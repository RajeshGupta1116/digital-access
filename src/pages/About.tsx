import { useEffect } from "react";

export default function About() {
  useEffect(() => {
  document.title =
    "About | Enterprise Accessibility Strategy & WCAG Compliance Platform - DigitalAccess";

  const meta = document.createElement("meta");
  meta.name = "description";
  meta.content =
    "DigitalAccess provides enterprise accessibility consulting, WCAG compliance strategy, and automation-driven monitoring solutions.";
  document.head.appendChild(meta);
	}, []);

  return (
    <div className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-10 text-center">
          About DigitalAccess
        </h1>

        <div className="text-lg text-gray-700 space-y-8">

          <p>
            DigitalAccess was founded to bridge the gap between accessibility
            compliance, enterprise governance, and automation-driven execution.
          </p>

          <p>
            Many organizations approach accessibility as a reactive audit function.
            We believe accessibility must be embedded into digital strategy,
            engineering workflows, and executive oversight models.
          </p>

          <h2 className="text-2xl font-semibold mt-12">
            Our Approach
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Strategic accessibility governance design</li>
            <li>WCAG compliance alignment across digital ecosystems</li>
            <li>Automation-first monitoring models</li>
            <li>Executive-level risk and maturity frameworks</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12">
            Founder Vision
          </h2>

          <p>
            Founded by Rajesh Gupta, DigitalAccess operates at the intersection
            of consulting, SaaS automation, and enterprise digital governance.
            Our mission is to move accessibility from checklist compliance
            toward scalable compliance intelligence.
          </p>

        </div>
      </div>
    </div>
  );
}