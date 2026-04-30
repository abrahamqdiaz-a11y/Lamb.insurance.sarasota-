import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using the Lamb Insurance Agency website.",
  robots: { index: false, follow: false },
};

export default function Terms() {
  const lastUpdated = "January 2025";

  return (
    <div className="min-h-screen bg-cream">
      {/* Header bar */}
      <div className="bg-navy-900 py-12">
        <div className="max-w-3xl mx-auto px-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sage-300 text-sm font-body hover:text-sage-200 transition-colors mb-6"
          >
            ← Back to Home
          </Link>
          <h1 className="font-display text-3xl font-bold text-white">
            Terms &amp; Conditions
          </h1>
          <p className="text-navy-400 font-body text-sm mt-2">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-navy-100 space-y-8 text-navy-700 leading-relaxed text-sm md:text-base font-body">

          <section aria-labelledby="acceptance-heading">
            <h2 id="acceptance-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Lamb Insurance Agency website at{" "}
              <strong>lambinsuranceagency.com</strong> (the &quot;Site&quot;), you accept and agree
              to be bound by these Terms and Conditions. If you do not agree to these terms, please
              do not use this Site.
            </p>
          </section>

          <hr className="border-navy-100" />

          <section aria-labelledby="purpose-heading">
            <h2 id="purpose-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
              Purpose of this Website
            </h2>
            <p>
              This website is provided for <strong>informational purposes only</strong>. The
              content on this Site describes the general insurance services offered by Lamb
              Insurance Agency and is intended to facilitate initial contact and quote requests.
              Nothing on this Site constitutes a binding insurance contract, policy, or guarantee
              of coverage.
            </p>
            <p className="mt-3">
              All coverage is subject to review, underwriting approval, and the terms and
              conditions of the applicable insurance policy issued by the relevant carrier.
            </p>
          </section>

          <hr className="border-navy-100" />

          <section aria-labelledby="accuracy-heading">
            <h2 id="accuracy-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
              Accuracy of Information
            </h2>
            <p>
              We strive to keep the information on this Site accurate and up to date. However,
              we make no warranties or representations, express or implied, regarding the
              completeness, accuracy, or reliability of any content on the Site. Insurance
              products, prices, and availability are subject to change without notice.
            </p>
          </section>

          <hr className="border-navy-100" />

          <section aria-labelledby="quotes-heading">
            <h2 id="quotes-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
              Quote Requests
            </h2>
            <p>
              Submitting a quote request form on this Site does not bind you to purchase any
              insurance product, nor does it bind Lamb Insurance Agency to provide a specific
              rate or coverage. All quotes are subject to underwriting review and carrier
              approval. A licensed agent will contact you to discuss your options.
            </p>
          </section>

          <hr className="border-navy-100" />

          <section aria-labelledby="ip-heading">
            <h2 id="ip-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
              Intellectual Property
            </h2>
            <p>
              All content on this Site, including text, graphics, logos, and design elements,
              is the property of Lamb Insurance Agency and may not be reproduced, distributed, or
              used without express written permission.
            </p>
          </section>

          <hr className="border-navy-100" />

          <section aria-labelledby="liability-heading">
            <h2 id="liability-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Lamb Insurance Agency shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages arising
              out of your use of, or inability to use, this Site or its content. This limitation
              applies regardless of the theory of liability.
            </p>
          </section>

          <hr className="border-navy-100" />

          <section aria-labelledby="links-heading">
            <h2 id="links-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
              Third-Party Links
            </h2>
            <p>
              This Site may contain links to third-party websites for your convenience. Lamb
              Insurance Agency does not endorse and is not responsible for the content, privacy
              practices, or services of any third-party site.
            </p>
          </section>

          <hr className="border-navy-100" />

          <section aria-labelledby="governing-heading">
            <h2 id="governing-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
              Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by the laws of the State of Florida,
              without regard to its conflict of law provisions. Any disputes arising under these
              terms shall be subject to the exclusive jurisdiction of the courts located in
              Florida.
            </p>
          </section>

          <hr className="border-navy-100" />

          <section aria-labelledby="changes-heading">
            <h2 id="changes-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
              Changes to These Terms
            </h2>
            <p>
              We reserve the right to update these Terms and Conditions at any time. Changes will
              be posted on this page with an updated &quot;Last updated&quot; date. Your continued
              use of the Site after any changes constitutes your acceptance of the revised terms.
            </p>
          </section>

          <hr className="border-navy-100" />

          <section aria-labelledby="contact-terms-heading">
            <h2 id="contact-terms-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
              Contact
            </h2>
            <p>Questions about these Terms? Reach us at:</p>
            <div className="mt-3 bg-navy-50 rounded-xl p-5 text-navy-700 text-sm space-y-1">
              <p className="font-bold text-navy-800">Lamb Insurance Agency</p>
              <p>
                📞{" "}
                <a href="tel:+19412252335" className="hover:underline">
                  941.225.2335
                </a>
              </p>
              <p>
                ✉️{" "}
                <a href="mailto:lambinsurance91@gmail.com" className="hover:underline">
                  lambinsurance91@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
