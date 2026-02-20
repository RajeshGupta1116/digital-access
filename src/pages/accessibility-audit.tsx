import { useState } from "react";
import { useRouter } from "next/router";

export default function AccessibilityAuditPage() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
  return (
    <main className="bg-white text-gray-900">
      
      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Enterprise-Grade Accessibility Audit — Beta Access
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Submit your website for an automation-assisted, expert-reviewed WCAG audit.
            Built for modern product teams, QA leaders, and accessibility-driven organizations.
          </p>
          <div className="mt-8">
            <a
              href="#request-form"
              className="inline-block px-8 py-4 bg-black text-white rounded-xl text-lg font-medium hover:opacity-90 transition"
            >
              Request Audit Access
            </a>
            <p className="mt-3 text-sm text-gray-500">
              Limited beta access available.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Accessibility Gaps Often Stay Hidden — Until They Become Risk
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Many teams rely on fragmented tools or one-time scans that miss deeper accessibility issues.
            Modern digital platforms require structured evaluation, severity mapping,
            and strategic remediation guidance.
            <br /><br />
            DigitalAccess bridges automated detection with expert validation.
          </p>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            What You’ll Receive During Beta
          </h2>
          <ul className="mt-8 space-y-4 text-gray-700">
            <li>• Top accessibility issues mapped to WCAG guidelines</li>
            <li>• Severity classification (Critical / Major / Minor)</li>
            <li>• Risk exposure summary</li>
            <li>• Actionable remediation recommendations</li>
            <li>• Delivery within 24–48 hours</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            Reports are automation-assisted and expert-reviewed for clarity and precision.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Who This Is For
          </h2>
          <ul className="mt-8 space-y-4 text-gray-700">
            <li>• Product teams preparing for compliance review</li>
            <li>• QA engineers strengthening accessibility workflows</li>
            <li>• Startups building inclusive products</li>
            <li>• Enterprises evaluating accessibility risk</li>
            <li>• Accessibility consultants validating implementation</li>
          </ul>
        </div>
      </section>

      {/* BETA TRANSPARENCY */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            About the Beta Phase
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Our automated accessibility audit engine is currently in development.
            During beta, audits follow a structured review process combining automation
            tools with strategic expert validation.
            <br /><br />
            This ensures meaningful insight — not just raw error output.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="request-form" className="px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">
            Request Accessibility Audit Access
          </h2>

          <form
			className="mt-10 space-y-6"
			onSubmit={async (e) => {
				e.preventDefault();
				setLoading(true);
				setError("");
			
				const formData = new FormData(e.currentTarget);
			
				const response = await fetch("https://formspree.io/f/mjgeevgo", {
				method: "POST",
				body: formData,
				headers: {
					Accept: "application/json",
				},
				});
			
				if (response.ok) {
				router.push("/thank-you");
				} else {
				setError("Something went wrong. Please try again.");
				}
			
				setLoading(false);
			}}
		>
		  <input type="hidden" name="_next" value="https://digital-access.vercel.app/thank-you" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Work Email"
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              name="organization"
              placeholder="Organization"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="url"
              name="website"
              placeholder="Website URL"
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />

            <select
              name="role"
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select Your Role</option>
              <option>Developer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Founder</option>
              <option>Accessibility Specialist</option>
              <option>Other</option>
            </select>

            <textarea
              name="challenge"
              placeholder="What accessibility challenges are you currently facing? (Optional)"
              rows={4}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
			type="submit"
			disabled={loading}
			className="w-full py-4 bg-black text-white rounded-xl text-lg font-medium hover:opacity-90 transition disabled:opacity-50"
			>
			{loading ? "Submitting..." : "Submit for Beta Review"}
			</button>
			{error && (
				<p className="text-center text-sm text-red-600 mt-2">
			{error}
				</p>
			)}
            <p className="text-center text-sm text-gray-500">
              We’ll respond within 24–48 hours.
            </p>
          </form>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section className="px-6 py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">
            The Future of Accessibility Governance
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            DigitalAccess is building a continuous accessibility monitoring platform
            designed for modern DevOps environments — combining automation, reporting,
            and strategic oversight.
            <br /><br />
            Beta participants help shape roadmap priorities.
          </p>
        </div>
      </section>

    </main>
  );
}
