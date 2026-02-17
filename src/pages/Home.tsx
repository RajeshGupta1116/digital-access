import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
    <div className="font-sans text-gray-900">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-900 text-white py-40 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-indigo-300 mb-6">
            Enterprise Accessibility Platform
          </p>

          <h1 className="text-6xl font-extrabold mb-8 leading-tight">
            Accessibility Strategy  
            <br /> Built for Scale
          </h1>

          <p className="text-xl text-gray-300 mb-10">
            DigitalAccess helps enterprises achieve WCAG compliance
            through strategic consulting and automation-driven monitoring.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              to="/services"
              className="bg-white text-indigo-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Consulting Services
            </Link>

            <Link
              to="/platform"
              className="border border-indigo-300 px-8 py-3 rounded-xl hover:bg-indigo-800 transition"
            >
              Explore Scanner
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white py-10 border-b">
        <div className="max-w-6xl mx-auto text-center text-gray-500 tracking-wide">
          WCAG 2.1 • WCAG 2.2 • ADA • Section 508 • Enterprise Governance
        </div>
      </section>

      {/* VALUE BLOCKS */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">
            Consulting Meets Automation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We don’t just audit accessibility. We build scalable compliance systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-6">
              Strategic Accessibility Roadmaps
            </h3>
            <p className="text-gray-600">
              Enterprise-level WCAG governance models aligned with digital
              transformation initiatives.
            </p>
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-6">
              Continuous Compliance Monitoring
            </h3>
            <p className="text-gray-600">
              Automated scanning and reporting integrated into development pipelines.
            </p>
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-6">
              Executive & Developer Reporting
            </h3>
            <p className="text-gray-600">
              Clear dashboards for leadership and actionable insights for engineering teams.
            </p>
          </div>
        </div>
      </section>
	  {/* FEATURED INSIGHT */}
		<section className="py-24 px-6 bg-white">
		<div className="max-w-6xl mx-auto text-center">
		
			<h2 className="text-4xl font-bold mb-12">
			Featured Insight
			</h2>
		
			<div className="bg-gray-50 p-12 rounded-3xl shadow-lg">
			<h3 className="text-2xl font-semibold mb-4">
				Why Accessibility Must Be Integrated into DevOps
			</h3>
		
			<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
				Enterprises that embed accessibility into CI/CD pipelines
				reduce remediation cost, improve release velocity,
				and strengthen regulatory readiness.
			</p>
		
			<a
				href="/blog/devops-accessibility"
				className="text-indigo-600 font-semibold"
			>
				Read Full Article →
			</a>
			</div>
		
		</div>
		</section>

      {/* CTA */}
      <section className="py-28 text-center bg-indigo-900 text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Scale Accessibility?
        </h2>
        <p className="mb-10 text-gray-300">
          Let’s design your enterprise compliance strategy.
        </p>

        <a
          href="https://calendly.com/rajeshgupta"
          target="_blank"
          className="bg-white text-indigo-900 px-10 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Book Consultation
        </a>
      </section>

    </div>
  );
}