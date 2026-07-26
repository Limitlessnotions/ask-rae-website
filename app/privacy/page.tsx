import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0B0615] text-white">

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/20 blur-[180px]" />
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
          <Link href="/terms">Terms</Link>
        </nav>

      </header>

      {/* Content */}

      <section className="mx-auto max-w-5xl px-6 pb-20">

        <div className="rounded-[40px] border border-purple-500/20 bg-white/5 p-10 backdrop-blur-xl">

          <h1 className="text-5xl font-bold text-[#F5D68C]">
            Privacy Policy
          </h1>

          <p className="mt-3 text-purple-300">
            Effective Date: July 26, 2026
          </p>

          <div className="mt-12 space-y-10 text-gray-300 leading-8">

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                1. Introduction
              </h2>

              <p>
                Welcome to Ask Rae. Your privacy is important to us.
                This Privacy Policy explains how we collect, use,
                store and protect your personal information when you
                use our website and mobile application.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                2. Information We Collect
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>Name and email address</li>
                <li>Account profile information</li>
                <li>Business information you provide</li>
                <li>AI conversations and prompts</li>
                <li>Connected social media accounts</li>
                <li>Device information</li>
                <li>Usage analytics</li>
              </ul>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                3. How We Use Your Information
              </h2>

              <ul className="list-disc space-y-3 pl-6">

                <li>Generate AI-powered content.</li>

                <li>Improve recommendations.</li>

                <li>Personalize your experience.</li>

                <li>Provide customer support.</li>

                <li>Maintain platform security.</li>

                <li>Connect with third-party social media platforms.</li>

              </ul>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                4. Third-Party Services
              </h2>

              <p>

                Ask Rae integrates with trusted providers including
                Firebase, OpenAI, Meta, Instagram, TikTok,
                LinkedIn and X (Twitter). These services have their
                own privacy policies governing how your information
                is handled.

              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                5. Data Security
              </h2>

              <p>

                We use industry-standard security measures to protect
                your information. While no system is completely secure,
                we continually work to safeguard your personal data.

              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                6. Your Rights
              </h2>

              <p>

                You may request access, correction,
                export or deletion of your personal data
                by contacting us.

              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                7. Children's Privacy
              </h2>

              <p>

                Ask Rae is not intended for children under
                13 years of age.

              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                8. Policy Updates
              </h2>

              <p>

                We may update this Privacy Policy periodically.
                Any changes become effective immediately after
                publication on this page.

              </p>

            </section>

            <section>

              <h2 className="mb-4 text-2xl font-semibold text-white">
                9. Contact Us
              </h2>

              <p>

                If you have any questions regarding this Privacy
                Policy, please contact us.

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