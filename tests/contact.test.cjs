/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS is needed for the TypeScript require hook below. */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const Module = require('node:module');

// Load the application's TypeScript and @/ imports without another test dependency.
require.extensions['.ts'] = (module, filename) => {
  module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  }).outputText, filename);
};
const resolve = Module._resolveFilename;
Module._resolveFilename = function (name, ...args) {
  return resolve.call(this, name.startsWith('@/') ? path.join(__dirname, '..', name.slice(2)) : name, ...args);
};
const { POST } = require('../app/api/contact/route.ts');
const { NextRequest } = require('next/server');
const data = { name: 'Ana <Silva>', email: 'ana@example.com', message: 'Projeto <novo> & detalhes\nSegunda linha' };

async function submit(responses) {
  process.env.RESEND_API_KEY = 're_test';
  process.env.RESEND_FROM_EMAIL = 'Portfolio <contato@example.com>';
  process.env.CONTACT_EMAIL = 'guimaraesryan26@gmail.com';
  const calls = [];
  const originalFetch = global.fetch;
  global.fetch = async (_url, options) => {
    calls.push(JSON.parse(options.body));
    const status = responses[calls.length - 1] ?? 200;
    return new Response(JSON.stringify(status === 200 ? { id: 'test-id' } : { name: 'validation_error', message: 'Delivery failed' }), { status, headers: { 'Content-Type': 'application/json' } });
  };
  try {
    const response = await POST(new NextRequest('http://localhost/api/contact', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data),
    }));
    return { response, body: await response.json(), calls };
  } finally {
    global.fetch = originalFetch;
  }
}

test('delivers the complete contact to the owner before confirming to the visitor', async () => {
  const { response, body, calls } = await submit([200, 200]);
  assert.equal(response.status, 200);
  assert.equal(body.success, true);
  assert.equal(calls[0].to, 'guimaraesryan26@gmail.com');
  assert.equal(calls[0].reply_to, 'ana@example.com');
  assert.ok(calls[0].text.includes(data.message));
  assert.ok(calls[0].text.includes(data.name));
  assert.ok(calls[0].html.includes('Projeto &lt;novo&gt; &amp; detalhes'));
  assert.equal(calls[1].to, 'ana@example.com');
});

test('returns an error and skips confirmation when owner delivery fails', async () => {
  const { response, body, calls } = await submit([422]);
  assert.equal(response.status, 502);
  assert.equal(body.success, false);
  assert.equal(calls.length, 1);
});

test('keeps success when only the visitor confirmation fails', async () => {
  const { response, body, calls } = await submit([200, 422]);
  assert.equal(response.status, 200);
  assert.equal(body.success, true);
  assert.equal(calls.length, 2);
});
