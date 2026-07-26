import Link from "next/link";

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-[#0B0615] text-white flex items-center justify-center px-6">
      <div className="max-w-3xl rounded-3xl border border-purple-500/20 bg-white/5 p-10 backdrop-blur-xl">

        <h1 className="text-4xl font-bold text-[#F5D68C]">
          User Data Deletion
        </h1>

        <p className="mt-8 leading-8 text-gray-300">
          If you would like Ask Rae to delete your account and all
          associated personal data, please email us at:
        </p>

        <p className="mt-6 text-xl font-semibold text-[#F5D68C]">
          tracydew312@yahoo.com
        </p>

        <p className="mt-8 leading-8 text-gray-300">
          Once we verify your request, all associated personal data
          will be permanently deleted in accordance with our Privacy
          Policy and applicable laws.
        </p>

        <Link
          href="/privacy"
          className="mt-10 inline-block text-purple-300 hover:text-white"
        >
          ← Back to Privacy Policy
        </Link>

      </div>
    </main>
  );
}