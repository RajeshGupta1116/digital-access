import { useEffect } from "react";

export default function Platform() {
  useEffect(() => {
    document.title =
      "Accessibility Consulting Platform | WCAG & ADA Compliance - DigitalAccess";
  }, []);

  return (
    <div className="font-sans text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-28 text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          DigitalAccess Scanner
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          A next-generation accessibility scanning platform designed to help
          enterprises monitor, detect, and fix WCAG compliance issues continuously.
        </p>

        <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Join Early Access
        </button>
      </section>

      {/* FREE SCANNER SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Free Accessibility Scanner
        </h2>
        <p className="max-w-3xl mx-auto mb-12">
          Instantly scan your website for WCAG violations and receive
          a structured accessibility report.
        </p>

        <div className="bg-gray-100 p-10 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Enter your website URL"
            className="w-full md:w-2/3 px-6 py-4 rounded-lg border mb-4"
          />
          <br />
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
            Scan Now
          </button>
        </div>
      </section>

      {/* ENTERPRISE FEATURES */}
      <section className="bg-gray-50 py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Enterprise Monitoring & Reporting
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="bg-white p-8 shadow-xl rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              Continuous Monitoring
            </h3>
            <p>
              Automatically track accessibility compliance across releases
              and deployments.
            </p>
          </div>

          <div className="bg-white p-8 shadow-xl rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              Detailed Reporting
            </h3>
            <p>
              Executive-level compliance summaries and developer-friendly
              technical issue breakdowns.
            </p>
          </div>

          <div className="bg-white p-8 shadow-xl rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              CI/CD Integration
            </h3>
            <p>
              Integrate accessibility checks directly into your development
              workflow and pipelines.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Enterprise Plan Coming Soon
        </h2>
        <p className="mb-8">
          Contact us for early enterprise access and platform demos.
        </p>

        <a
			href="mailto:se.rajeshgupta@gmail.com?subject=DigitalAccess Scanner Early Access"
			className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
			>
			Join Early Access
		</a>
      </section>

    </div>
  );
}