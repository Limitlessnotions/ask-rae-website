import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B0615] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/20 blur-[180px]" />
      </div>

      {/* Navbar */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        <Link href="/" className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt="Ask Rae"
            width={60}
            height={60}
            className="rounded-2xl"
          />

          <div>
            <h2 className="text-2xl font-semibold text-[#F3D48A]">
              Ask Rae
            </h2>

            <p className="text-xs text-purple-300">
              AI Social Media Assistant
            </p>
          </div>

        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>

      </header>

      {/* Main Content */}

      <section className="mx-auto max-w-5xl px-6 pb-20">

        <div className="rounded-[40px] border border-purple-500/20 bg-white/5 p-10 backdrop-blur-xl">

          <h1 className="text-5xl font-bold text-[#F5D68C]">
            Terms of Service
          </h1>

          <p className="mt-3 text-purple-300">
            Effective Date: July 26, 2026
          </p>

          <div className="mt-12 space-y-10 leading-8 text-gray-300">

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                1. Acceptance of Terms
              </h2>

              <p>
                By accessing or using Ask Rae, you agree to comply with
                these Terms of Service. If you do not agree with any part
                of these terms, you should discontinue use of the platform.
              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                2. Description of Service
              </h2>

              <p>
                Ask Rae is an AI-powered assistant that helps users
                generate social media content, create captions,
                brainstorm ideas, organize marketing campaigns,
                schedule content, and manage connected social media
                platforms.
              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                3. User Responsibilities
              </h2>

              <ul className="list-disc space-y-3 pl-6">

                <li>Provide accurate and up-to-date information.</li>

                <li>Protect your account credentials.</li>

                <li>Use Ask Rae only for lawful purposes.</li>

                <li>
                  Respect the terms and policies of connected social
                  media platforms.
                </li>

                <li>
                  Remain responsible for any content you publish using
                  the platform.
                </li>

              </ul>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                4. AI-Generated Content
              </h2>

              <p>
                Ask Rae generates content using artificial intelligence.
                While we strive for accuracy and quality, users are
                responsible for reviewing and approving generated content
                before publishing.
              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                5. Third-Party Integrations
              </h2>

              <p>
                Ask Rae integrates with services including Meta,
                Instagram, TikTok, LinkedIn, X (Twitter), Firebase,
                OpenAI, and other providers. Your use of these services
                is also governed by their respective terms and privacy
                policies.
              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                6. Intellectual Property
              </h2>

              <p>
                All trademarks, branding, software, and content
                associated with Ask Rae remain the property of Ask Rae
                or its licensors unless otherwise stated.
              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                7. Limitation of Liability
              </h2>

              <p>
                To the fullest extent permitted by law, Ask Rae shall
                not be liable for indirect, incidental, consequential,
                or special damages arising from your use of the platform.
              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                8. Account Suspension & Termination
              </h2>

              <p>
                We reserve the right to suspend or terminate accounts
                that violate these Terms, abuse the platform, or engage
                in unlawful activities.
              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                9. Updates to These Terms
              </h2>

              <p>
                We may revise these Terms periodically. Continued use of
                Ask Rae after updates indicates acceptance of the revised
                Terms.
              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                10. Contact
              </h2>

              <p>
                If you have questions regarding these Terms, please
                contact us.
              </p>

              <div className="mt-6 rounded-2xl border border-purple-500/20 bg-[#161024] p-6">

                <p className="font-semibold text-[#F5D68C]">
                  support@askrae.app
                </p>

              </div>

            </section>

          </div>

        </div>

      </section>

    </main>
  );
}