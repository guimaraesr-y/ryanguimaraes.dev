'use client';

import React, { useState } from 'react';
import { Play, Square } from 'lucide-react';

const TransitionSection = () => {
    const [isServerRunning, setIsServerRunning] = useState(false);
    const [isIntervalRunning, setIsIntervalRunning] = useState(false);
    const [logs, setLogs] = useState<string[]>(["$ node server.js"]);
    const [showApp, setShowApp] = useState(false);

    const serverLogs = [
        "Initializing server...",
        "Loading configurations...",
        "Connecting to database...",
        "Starting middleware...",
        "[+] Server running on port 3000",
        "Ready for connections :)"
    ];

    let currentLog = 0;
    const timeout = 500;

    const startServer = () => {
        setIsServerRunning(true);
        setIsIntervalRunning(true)
        setShowApp(false);
        currentLog = 0;

        const logInterval = setInterval(() => {
            if (currentLog >= serverLogs.length) {
                clearInterval(logInterval);
                setIsIntervalRunning(false);
                setTimeout(() => setShowApp(true), 500);
                return;
            }

            setLogs(currentLogs => [...currentLogs, serverLogs[currentLog]]);
            currentLog += 1;
        }, timeout);
    };

    const stopServer = () => {
        setIsServerRunning(false);
        setLogs(["$ node server.js"]);
        setShowApp(false);
    };

    return (
        <div className="relative h-auto md:h-[45vh] bg-noise bg-gradient-to-r from-gray-900 to-black py-8 md:py-20">
            <div className="max-w-4xl mx-auto min-h-[400px] md:h-full flex flex-col md:flex-row gap-4 md:gap-8 px-4 md:px-0">
                {/* Terminal */}
                <div
                    className={`bg-black bg-opacity-50 rounded-lg p-4 md:p-6 transition-all duration-500 ease-in-out flex-1 md:flex-none ${
                        isServerRunning ? 'md:w-1/2' : 'w-full'
                    }`}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="flex-1"></div>
                        {!isServerRunning ? (
                            <button
                                onClick={startServer}
                                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm text-white transition-colors"
                            >
                                <Play size={14} />
                                Start Server
                            </button>
                        ) : (
                            <button
                                disabled={isIntervalRunning}
                                onClick={stopServer}
                                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Square size={14} />
                                Stop Server
                            </button>
                        )}
                    </div>
                    <pre className="text-green-400 text-sm font-mono">
                        <code>{logs.join('\n')}</code>
                    </pre>
                </div>

                {/* Server Preview */}
                <div
                    className={`bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out flex-1 md:flex-none ${
                        isServerRunning 
                            ? 'max-h-[400px] opacity-100 md:w-1/2 md:translate-x-0' 
                            : 'max-h-0 md:w-0 opacity-0 md:translate-x-full'
                    }`}
                >
                    <div className="bg-gray-100 p-4 border-b">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-sm text-gray-600">localhost:3000</span>
                        </div>
                    </div>
                    <div className="p-8">
                        {!showApp ? (
                            <div className="space-y-4 animate-fade-in">
                                <div className="h-8 bg-gray-100 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                                <div className="h-4 bg-gray-100 rounded w-full"></div>
                                <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                                <div className="h-12 bg-gray-100 rounded w-full"></div>
                            </div>
                        ) : (
                            <div className="animate-fade-in flex flex-col items-center justify-center space-y-6">
                                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                                    Hello, World!
                                </h1>
                                <p className="text-gray-600 text-center">
                                    Your Node.js application is running successfully.
                                </p>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 w-full text-center">
                                    <code className="text-sm text-gray-400">
                                        Ready to start coding! 🚀
                                    </code>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default TransitionSection;