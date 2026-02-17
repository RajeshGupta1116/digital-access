import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  useEffect(() => {
	document.title =
		"Blog | Enterprise Accessibility Strategy & WCAG Compliance Platform - DigitalAccess";
	
	const meta = document.createElement("meta");
	meta.name = "description";
	meta.content =
		"DigitalAccess provides enterprise accessibility consulting, WCAG compliance strategy, and automation-driven monitoring solutions.";
	document.head.appendChild(meta);
	}, []);

  return (
    <div className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-6 text-center">
          Accessibility Insights
        </h1>

        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Thought leadership on enterprise accessibility strategy, WCAG compliance,
          DevOps integration, and scalable governance models.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Blog 1 */}
          <Link
            to="/blog/devops-accessibility"
            className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition block"
          >
            <p className="text-sm text-indigo-600 mb-4 font-semibold">
              Enterprise Strategy
            </p>

            <h2 className="text-2xl font-bold mb-4">
              Why Accessibility Must Be Integrated into DevOps
            </h2>

            <p className="text-gray-600">
              Accessibility should not be a post-release audit function.
              Learn how embedding compliance checks into CI/CD pipelines
              reduces remediation cost and regulatory risk.
            </p>

            <div className="mt-6 text-indigo-600 font-semibold">
              Read Article →
            </div>
          </Link>

          {/* Blog 2 */}
          <Link
            to="/blog/wcag-22-enterprise"
            className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition block"
          >
            <p className="text-sm text-indigo-600 mb-4 font-semibold">
              WCAG Compliance
            </p>

            <h2 className="text-2xl font-bold mb-4">
              WCAG 2.2: What Enterprises Need to Prepare For
            </h2>

            <p className="text-gray-600">
              Understand the new success criteria introduced in WCAG 2.2
              and how large organizations should align governance and
              monitoring systems for readiness.
            </p>

            <div className="mt-6 text-indigo-600 font-semibold">
              Read Article →
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}