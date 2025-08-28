import {
  ArrowRight,
  Check,
  Code,
  Copy,
  Database,
  ExternalLink,
  Globe,
} from "lucide-react";
import React from "react";
import Header from "../components/Header";
import type { headerProps } from "../types/CardsTypes";
import ScrollUp from "../utils/ScrollUp";
import Footer from "../components/Footer";

export default function Api({ showDropList, setShowDropList }: headerProps) {
  const [copiedEndpoint, setCopiedEndpoint] = React.useState<string | null>(
    null
  );

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const endpoints = [
    {
      id: "games",
      method: "GET",
      path: "/",
      description: "Get all available games",
      response: `{
  "games": [
    {
      "id": 1,
      "title": "Game Title",
      "genre": "Action",
      "platform": "PC",
      "release_date": "2024-01-01"
    }
  ]
}`,
    },
    {
      id: "game-names",
      method: "GET",
      path: "/games",
      description: "Get only game names",
      response: `
  [
    "Game Title 1",
    "Game Title 2", 
    "Game Title 3"...
  ]`,
    },
    {
      id: "game-genre",
      method: "GET",
      path: "/games?genre=shooter",
      description: "Get only game with specific genre",
      note: "Note: This feature is still in development",
      response: `
"games": [{
    "Shooter Game 1"},
    {"Shooter Game 2"}, 
    {"Shooter Game 3}"{...
    }]`,
    },
  ];

  return (
    <>
      <ScrollUp />
      <Header
        setShowDropList={setShowDropList}
        showDropList={showDropList}
        searchTerm={""}
        setSearchTerm={() => ""}
      />
      <div className="min-h-screen bg-neutral-900 text-white pt-10">
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 border-b border-neutral-700">
          <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-500/20 p-3 rounded-lg">
                <Database className="text-teal-400" size={24} />
              </div>
              <div>
                <h1 className="text-2xl lg:text-4xl font-bold text-white">
                  NWG API
                </h1>
                <p className="text-neutral-400 text-sm lg:text-base">
                  Simple and fast game data API
                </p>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-4 lg:p-6">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="text-teal-400" size={16} />
                <span className="text-sm lg:text-base font-medium">
                  Base URL
                </span>
              </div>
              <div className="flex items-center justify-between bg-neutral-900 border border-neutral-600 rounded-lg p-3">
                <code className="text-teal-400 text-xs lg:text-base font-mono">
                  https://no-wallet-gaming-back-end.vercel.app
                </code>
                <button
                  onClick={() =>
                    copyToClipboard(
                      "https://no-wallet-gaming-back-end.vercel.app/",
                      "base-url"
                    )
                  }
                  className="text-neutral-400 hover:text-white transition-colors p-1"
                >
                  {copiedEndpoint === "base-url" ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12">
          <section className="mb-8 lg:mb-12">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 flex items-center gap-2">
              <Code className="text-teal-400" size={20} />
              Getting Started
            </h2>
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 lg:p-6">
              <p className="text-neutral-300 text-sm lg:text-base mb-4">
                Our API is completely free and requires no authentication.
                Simply make HTTP requests to our endpoints.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-neutral-900/50 border border-neutral-600 rounded-lg p-4">
                  <h3 className="font-semibold text-teal-400 mb-2">
                    No Auth Required
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Start using immediately
                  </p>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-600 rounded-lg p-4">
                  <h3 className="font-semibold text-teal-400 mb-2">
                    JSON Response
                  </h3>
                  <p className="text-sm text-neutral-400">
                    All responses in JSON format
                  </p>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-600 rounded-lg p-4">
                  <h3 className="font-semibold text-teal-400 mb-2">
                    CORS Enabled
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Use from any domain
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8 lg:mb-12">
            <h2 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-2">
              <ArrowRight className="text-teal-400" size={20} />
              Endpoints
            </h2>

            <div className="space-y-6">
              {endpoints.map((endpoint) => (
                <div
                  key={endpoint.id}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden"
                >
                  <div className="bg-neutral-900/50 border-b border-neutral-700 p-4 lg:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {endpoint.method}
                        </span>
                        <code className="text-teal-400 font-mono text-sm lg:text-base">
                          {endpoint.path}
                        </code>
                      </div>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            `https://no-wallet-gaming-back-end.vercel.app${endpoint.path}`,
                            endpoint.id
                          )
                        }
                        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
                      >
                        {copiedEndpoint === endpoint.id ? (
                          <Check size={16} />
                        ) : (
                          <Copy size={16} />
                        )}
                        {copiedEndpoint === endpoint.id
                          ? "Copied!"
                          : "Copy URL"}
                      </button>
                    </div>
                    <p className="text-neutral-300 text-sm lg:text-base mt-2">
                      {endpoint.description}
                    </p>
                    <p className="text-teal-500 text-xs lg:text-sm mt-0.5 ">
                      {endpoint?.note}
                    </p>
                  </div>

                  <div className="p-4 lg:p-6">
                    <h4 className="text-sm font-semibold text-neutral-400 mb-3">
                      Response Example:
                    </h4>
                    <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-neutral-300 font-mono whitespace-pre-wrap">
                        {endpoint.response}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8 lg:mb-12">
            <h2 className="text-xl lg:text-2xl font-bold mb-6">
              Usage Examples
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 lg:p-6">
                <h3 className="font-semibold text-teal-400 mb-4">
                  JavaScript (Fetch)
                </h3>
                <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs text-neutral-300 font-mono">
                    {`fetch('https://no-wallet-gaming-back-end......')
  .then(response => response.json())
  .then(data => console.log(data));`}
                  </pre>
                </div>
              </div>

              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 lg:p-6">
                <h3 className="font-semibold text-teal-400 mb-4">cURL</h3>
                <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs text-neutral-300 font-mono">
                    {`curl -X GET \\
  https://no-wallet-gaming-back-end.vercel.app`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-r from-teal-500/10 to-neutral-800/50 border border-teal-500/20 rounded-xl p-4 lg:p-6">
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                Need Help?
              </h3>
              <p className="text-neutral-300 text-sm lg:text-base mb-4">
                If you have questions or need support, feel free to reach out to
                us.
              </p>
              <a href="https://www.linkedin.com/in/ali-al-najjar-88a801324/">
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 lg:py-3 lg:px-6 rounded-lg transition-colors duration-200 flex items-center gap-2">
                  <ExternalLink size={16} />
                  Contact Support
                </button>
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
}
