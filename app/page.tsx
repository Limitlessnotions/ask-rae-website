import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      title: "AI Content Creation",
      text: "Create social media ideas, captions, content plans, marketing strategies and other business content with AI.",
    },
    {
      title: "Social Media Management",
      text: "Connect supported social accounts and manage your social content from one place.",
    },
    {
      title: "Captions & Hashtags",
      text: "Develop engaging captions, relevant hashtags and content ideas for your social media presence.",
    },
    {
      title: "Business Support",
      text: "Get help with marketing plans, business ideas, content strategy and other everyday business tasks.",
    },
    {
      title: "Goals & Accountability",
      text: "Set goals, create reminders and use Ask Rae to stay organized and accountable.",
    },
    {
      title: "Personal Assistant",
      text: "Use Ask Rae for everyday planning, reminders, affirmations and other personal productivity needs.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create your account",
      text: "Sign in to Ask Rae and personalize your experience around your goals and needs.",
    },
    {
      number: "02",
      title: "Ask Rae for help",
      text: "Use the AI assistant to create content, plan tasks, develop ideas and work through your goals.",
    },
    {
      number: "03",
      title: "Connect your social accounts",
      text: "When you want to manage social content, authorize the social platforms you choose to connect.",
    },
    {
      number: "04",
      title: "Create and manage",
      text: "Create your content in Ask Rae and use your connected social accounts to manage your social presence.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0615] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-purple-700/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[180px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-purple-500/10 bg-[#0B0615]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Ask Rae"
              width={56}
              height={56}
              className="rounded-2xl"
            />

            <div>
              <h2 className="text-xl font-semibold tracking-wide text-[#F3D48A] md:text-2xl">
                Ask Rae
              </h2>

              <p className="text-xs text-purple-300">
                AI Personal & Social Media Assistant
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-gray-300 md:flex">
            <Link href="#about" className="transition hover:text-white">
              About
            </Link>

            <Link href="#features" className="transition hover:text-white">
              Features
            </Link>

            <Link href="#how-it-works" className="transition hover:text-white">
              How It Works
            </Link>

            <Link href="#social-media" className="transition hover:text-white">
              Social Media
            </Link>

            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            ✨ AI-Powered Personal & Business Assistant
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
            Create Better
            <br />

            <span className="bg-gradient-to-r from-[#F7E8B0] via-[#F5C56E] to-[#B76DFF] bg-clip-text text-transparent">
              Social Content
            </span>

            <br />

            in Seconds.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            Ask Rae is an AI-powered assistant that helps entrepreneurs,
            coaches, creators and small businesses create content, develop
            ideas, plan their social media presence and stay organized.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://apps.apple.com/app/ask-rae/id6803644893"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-7 py-4 font-semibold shadow-xl shadow-purple-700/30 transition hover:scale-105"
            >
              Available on iOS
            </a>

            <Link
              href="#features"
              className="rounded-full border border-purple-500/60 px-7 py-4 font-semibold transition hover:bg-purple-700/20"
            >
              Explore Ask Rae
            </Link>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Ask Rae is available on iOS. Android availability is coming soon.
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <div className="rounded-[40px] border border-purple-500/20 bg-gradient-to-br from-[#1B102B] to-[#130B20] p-8 shadow-[0_0_100px_rgba(170,0,255,0.25)] md:p-10">
            <Image
              src="/logo.png"
              alt="Ask Rae application"
              width={350}
              height={350}
              className="rounded-[30px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-y border-purple-900/40 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
              About Ask Rae
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              One assistant for your ideas, content and everyday goals.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ask Rae is designed to help users turn ideas into action. The
              assistant combines AI-powered content creation with tools for
              social media management, business support, planning,
              accountability and everyday productivity.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              Whether you are building a personal brand, running a small
              business, creating social content or simply trying to stay
              organized, Ask Rae provides a single place to work through the
              things that matter to you.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28"
      >
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
            Features
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Built to help you create, plan and stay organized.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Ask Rae brings AI assistance and practical productivity tools
            together in one experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-white/[0.08]"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/10 text-xl">
                ✦
              </div>

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

      {/* Social Media */}
      <section
        id="social-media"
        className="border-y border-purple-900/40 bg-gradient-to-b from-purple-950/20 to-transparent"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
                Social Media
              </span>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Manage your social presence from one place.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ask Rae helps users create and manage social-media content
                through connected social accounts. Users remain in control of
                their accounts and authorize each platform before Ask Rae can
                perform actions on their behalf.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Instagram", "Facebook", "TikTok", "X"].map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2.5 text-sm text-purple-200"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="text-2xl font-semibold text-[#F7D98C]">
                Social content workflow
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold">
                    1
                  </span>

                  <div>
                    <h4 className="font-semibold">Connect an account</h4>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Authorize the social platform you want to use.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold">
                    2
                  </span>

                  <div>
                    <h4 className="font-semibold">Create your content</h4>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Develop your social content using Ask Rae.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold">
                    3
                  </span>

                  <div>
                    <h4 className="font-semibold">Choose the destination</h4>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Select the connected social account where you want to
                      publish.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold">
                    4
                  </span>

                  <div>
                    <h4 className="font-semibold">Publish</h4>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Ask Rae sends the authorized content to the selected
                      social platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28"
      >
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Simple tools. One AI assistant.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Ask Rae is designed to fit into the way you already work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-purple-500/20 bg-white/5 p-7 backdrop-blur-md"
            >
              <span className="text-sm font-semibold tracking-widest text-purple-400">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-[#F7D98C]">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section className="border-y border-purple-900/40 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-8 md:py-24">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
            Who Ask Rae Is For
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
            Built for people turning ideas into something real.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Ask Rae supports entrepreneurs, coaches, creators, small business
            owners and professionals who want practical AI assistance for
            content, business and everyday productivity.
          </p>

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {[
              "Entrepreneurs",
              "Coaches",
              "Creators",
              "Small Businesses",
              "Professionals",
              "Personal Brands",
            ].map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2.5 text-sm text-purple-200"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center md:px-8 md:py-28">
        <div className="rounded-[40px] border border-purple-500/20 bg-gradient-to-br from-purple-950/50 to-fuchsia-950/30 px-6 py-14 shadow-[0_0_100px_rgba(170,0,255,0.12)] md:px-12">
          <h2 className="text-4xl font-bold md:text-5xl">
            Meet your AI assistant.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Use Ask Rae to create better content, organize your ideas and
            manage more of your everyday business and personal workflow from
            one place.
          </p>

          <a
            href="https://apps.apple.com/app/ask-rae/id6803644893"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-8 py-4 font-semibold shadow-xl shadow-purple-700/30 transition hover:scale-105"
          >
            Get Ask Rae on iOS
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900/50">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Ask Rae"
                width={52}
                height={52}
                className="rounded-xl"
              />

              <div>
                <p className="font-semibold text-[#F3D48A]">Ask Rae</p>
                <p className="text-sm text-gray-500">
                  AI Personal & Social Media Assistant
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <Link href="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-purple-900/40 pt-6 text-center text-sm text-gray-500">
            © 2026 Ask Rae. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}