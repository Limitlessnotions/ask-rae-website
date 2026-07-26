import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0615] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-purple-700/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[180px]" />
      </div>

      {/* Navbar */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Ask Rae"
            width={60}
            height={60}
            className="rounded-2xl"
          />

          <div>
            <h2 className="text-2xl font-semibold tracking-wide text-[#F3D48A]">
              Ask Rae
            </h2>

            <p className="text-xs text-purple-300">
              AI Social Media Assistant
            </p>
          </div>
        </div>

        <nav className="hidden gap-8 text-sm md:flex">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-20 px-8 py-20 lg:grid-cols-2">

        <div>

          <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            ✨ AI-Powered Content Creation
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight">

            Create Better
            <br />

            <span className="bg-gradient-to-r from-[#F7E8B0] via-[#F5C56E] to-[#B76DFF] bg-clip-text text-transparent">
              Social Content
            </span>

            <br />

            in Seconds.

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">

            Ask Rae helps entrepreneurs, coaches, creators and small
            businesses generate captions, content ideas, hashtags,
            marketing plans and social media strategies using AI.

          </p>

          <div className="mt-12 flex gap-5">

            <button className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-8 py-4 font-semibold shadow-xl shadow-purple-700/30 transition hover:scale-105">
              Coming Soon
            </button>

            <Link
              href="/privacy"
              className="rounded-full border border-purple-500 px-8 py-4 hover:bg-purple-700/20"
            >
              Privacy Policy
            </Link>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="rounded-[40px] border border-purple-500/20 bg-gradient-to-br from-[#1B102B] to-[#130B20] p-10 shadow-[0_0_100px_rgba(170,0,255,0.25)]">

            <Image
              src="/logo.png"
              alt="Ask Rae"
              width={350}
              height={350}
              className="rounded-[30px]"
            />

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-8 pb-24">

        <div className="grid gap-8 md:grid-cols-3">

          {[
            {
              title: "AI Content",
              text: "Generate engaging social media posts instantly.",
            },
            {
              title: "Captions & Hashtags",
              text: "Create optimized captions and trending hashtags.",
            },
            {
              title: "Business Growth",
              text: "Plan content calendars and grow your audience.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-md transition hover:border-purple-400 hover:bg-white/10"
            >
              <h3 className="text-2xl font-semibold text-[#F7D98C]">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                {feature.text}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-purple-900/50 py-8 text-center text-gray-400">

        <Image
          src="/logo.png"
          alt="Ask Rae"
          width={70}
          height={70}
          className="mx-auto mb-4 rounded-xl"
        />

        <p>© 2026 Ask Rae. All rights reserved.</p>

      </footer>
    </main>
  );
}