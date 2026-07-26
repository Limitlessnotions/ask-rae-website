export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Ask Rae
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Your AI-powered social media assistant for entrepreneurs,
          creators, and small business owners.
        </p>

        <p className="mt-4 text-gray-500">
          Ask Rae helps you create engaging content, generate captions,
          organize ideas, and manage your online presence with AI.
        </p>

        <div className="mt-10 space-x-6">
          <a
            href="/privacy"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </a>

          <a
            href="/terms"
            className="text-blue-600 hover:underline"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </main>
  );
}