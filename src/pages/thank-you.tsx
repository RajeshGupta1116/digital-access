import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6">
      <div className="max-w-2xl text-center">
        
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-black text-white text-2xl font-bold">
            ✓
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Audit Request Received
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Thank you for requesting accessibility audit beta access.
          <br /><br />
          Our team will review your submission and respond within
          <span className="font-semibold"> 24–48 hours</span>.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-black text-white rounded-xl text-lg font-medium hover:opacity-90 transition"
          >
            Return to Homepage
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          DigitalAccess — Accessibility Strategy & Governance Platform
        </p>

      </div>
    </main>
  );
}