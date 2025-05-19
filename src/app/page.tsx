import Head from "next/head";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function CanaryWalletPage() {
  return (
    <>
      <Head>
        <title>Canary Wallet</title>
        <meta
          name="description"
          content="Early warning smart wallet with canary mechanism"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen bg-black text-yellow-400 font-sans" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>
        {/* Navigation */}
        <nav className="flex justify-between items-center px-6 py-4 bg-yellow-400 text-black shadow-md">
          <div className="text-2xl font-semibold">🐤 Canary Wallet</div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/realCanaryWallet/canary-wallet"
              target="_blank"
              className="bg-black text-yellow-400 font-medium px-5 py-2 rounded-full hover:bg-gray-800 transition"
            >
              🚀 Deploy Canary
            </Link>
            <Link href="https://github.com/realCanaryWallet/canary-wallet" target="_blank">
              <FaGithub className="w-6 h-6 hover:text-gray-700" />
            </Link>
            <Link href="https://x.com/canary_wallet" target="_blank">
              <FaXTwitter className="w-6 h-6 hover:text-gray-700" />
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center py-20 px-6">
          <div className="relative inline-block">
            <h1 className="text-6xl font-bold mb-2 tracking-tight leading-tight">
              A <span className="italic text-yellow-300">Canary</span> That Saves ₿illions.
            </h1>
            <div className="absolute right-0 bottom-[-1.5rem] text-lg italic text-gray-400">
              <a
                href="https://en.wiktionary.org/wiki/canary_in_a_coal_mine#English"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-yellow-200"
              >
                — canary in a coal mine
              </a>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-10 leading-relaxed">
            Canary Wallet is an early warning system for smart wallets. When a ping
            fails to arrive, funds can escape to safety.
          </p>
        </section>

        {/* How It Works */}
        <section className="bg-white text-black px-6 py-20">
          <div className="flex flex-col lg:flex-row items-start gap-8 mt-12">
            {/* <h2 className="text-4xl font-semibold mb-10 text-center">How It Works</h2> */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/diagram.png"
                alt="Canary Wallet Architecture Diagram"
                width={800}
                height={0}
                style={{ height: "30%", width: "auto" }}
                priority
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">🔧 How it works</h2>
              <ol className="list-decimal list-inside space-y-3 text-lg leading-relaxed">
                <li>
                  Deploy a <strong>CanarySignal</strong> contract with a designated wallet
                  (EOA or AA) that sends pings periodically.
                </li>
                <li>
                  Deploy an <strong>EscapeWallet</strong> with:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li><strong>Owner:</strong> Can trigger the escape</li>
                    <li><strong>EscapeTo:</strong> Safe fallback address</li>
                    <li><strong>Canary:</strong> The ping contract address</li>
                  </ul>
                </li>
                <li>
                  If pinging stops for a set duration (e.g., 7 days), the owner can trigger the escape to transfer funds.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-black text-white px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold mb-8">Use Cases</h2>
            <ul className="list-disc list-inside text-lg space-y-4 leading-relaxed">
              <li>🔐 Cold wallet compromise mitigation</li>
              <li>🕵️‍♀️ Detect silent EOA key leaks</li>
              <li>🏛️ Institutional/DAO treasury alert layer</li>
            </ul>
          </div>
        </section>

        {/* Security Tips */}
        <section className="bg-white text-black px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold mb-8">Security Tips</h2>
            <ul className="list-disc list-inside text-lg space-y-4 leading-relaxed">
              <li>Use hardware or multisig wallets as <strong>owner</strong></li>
              <li>Set ping intervals between 3-7 days</li>
              <li>Monitor on-chain ping activity via API</li>
            </ul>
          </div>
        </section>

        <footer className="text-center text-sm text-yellow-400 py-6">
          © {new Date().getFullYear()} Canary Wallet. All rights reserved.
        </footer>
      </main>
    </>
  );
}
