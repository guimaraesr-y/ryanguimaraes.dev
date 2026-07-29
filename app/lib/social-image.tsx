import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const socialImageAlt =
  "Retrato de Ryan Guimarães em capa editorial do seu portfólio Full-Stack";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

export async function createSocialImage() {
  const portrait = await readFile(join(process.cwd(), "public", "pfp.png"), "base64");
  const portraitSrc = `data:image/png;base64,${portrait}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f4f0e6",
          color: "#111310",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 410,
            height: "100%",
            background: "#111310",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            right: 34,
            top: 78,
            borderRadius: 70,
            background: "#3157ff",
            transform: "rotate(4deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 530,
            height: 530,
            right: 18,
            top: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitSrc}
            alt="Retrato de Ryan Guimarães"
            width="530"
            height="530"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            left: 68,
            top: 58,
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 20,
            color: "#5f645a",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 34,
              height: 5,
              background: "#3157ff",
            }}
          />
          <div style={{ display: "flex" }}>MEU ESPAÇO PESSOAL · 2026</div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 68,
            top: 142,
            width: 650,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "serif",
              fontSize: 91,
              lineHeight: 0.86,
              letterSpacing: "-4px",
            }}
          >
            Ryan
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "serif",
              fontSize: 91,
              lineHeight: 0.9,
              letterSpacing: "-4px",
            }}
          >
            Guimarães
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 73,
            top: 345,
            display: "flex",
            color: "#3157ff",
            fontSize: 27,
            fontWeight: 700,
          }}
        >
          Desenvolvedor Full-Stack
        </div>

        <div
          style={{
            position: "absolute",
            left: 68,
            bottom: 78,
            width: 510,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "13px 18px",
              background: "#a8e06c",
              fontSize: 22,
              fontWeight: 700,
              transform: "rotate(-1.5deg)",
            }}
          >
            backend é o ponto de partida.
          </div>
          <div
            style={{
              display: "flex",
              color: "#5f645a",
              fontSize: 24,
              lineHeight: 1.25,
            }}
          >
            curiosidade faz o resto: integração, produto e produção.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 62,
            bottom: 34,
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#f4f0e6",
            fontSize: 18,
            padding: "9px 14px",
            borderRadius: 999,
            background: "rgba(17, 19, 16, 0.86)",
          }}
        >
          <span
            style={{
              display: "flex",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#a8e06c",
            }}
          />
          ryanguimaraes.dev
        </div>
      </div>
    ),
    socialImageSize,
  );
}
