import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Services() {
	useEffect(() => {
	document.title =
		"Enterprise Accessibility Strategy & WCAG Compliance Platform - DigitalAccess";
	
	const meta = document.createElement("meta");
	meta.name = "description";
	meta.content =
		"DigitalAccess provides enterprise accessibility consulting, WCAG compliance strategy, and automation-driven monitoring solutions.";
	document.head.appendChild(meta);
	}, []);

  return (
    <div className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-8 text-center">
          Enterprise Accessibility Consulting
        </h1>

        <p className="text-center text-gray-600 mb-20 max-w-3xl mx-auto">
          We help enterprises transition from reactive accessibility audits
          to sustainable compliance ecosystems integrated into digital governance.
        </p>

        <div className="space-y-20">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Accessibility Strategy & Governance Design
            </h2>
            <p className="text-gray-600">
              Development of enterprise-wide accessibility roadmaps aligned with
              WCAG 2.1, WCAG 2.2, ADA, and global regulatory frameworks.
              We design governance models that integrate accessibility into
              digital transformation programs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              WCAG Audits & Risk Assessment
            </h2>
            <p className="text-gray-600">
              Comprehensive accessibility audits with prioritized remediation
              frameworks. Executive-level risk visibility and regulatory
              exposure analysis for leadership decision-making.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              DevOps & Automation Integration
            </h2>
            <p className="text-gray-600">
              Embedding accessibility testing into CI/CD pipelines to ensure
              continuous compliance across releases. Automation-driven
              monitoring reduces long-term remediation costs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Executive Reporting & Maturity Frameworks
            </h2>
            <p className="text-gray-600">
              Accessibility maturity assessments, performance dashboards,
              and enterprise reporting models that align engineering,
              compliance, and executive leadership.
            </p>
          </div>

        </div>

        <div className="mt-24 text-center">
          <Link
            to="/contact"
            className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Book Enterprise Strategy Session
          </Link>
        </div>

      </div>
    </div>
  );
}