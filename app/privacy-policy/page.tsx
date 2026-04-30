import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Lamb Insurance Agency. Learn how we collect, use, and protect your personal information.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
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
          <h1 className="font-display text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="text-navy-400 font-body text-sm mt-2">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 py-14">
        <div className="prose prose-slate max-w-none font-body">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-navy-100 space-y-8 text-navy-700 leading-relaxed text-sm md:text-base">

            <section aria-labelledby="intro-heading">
              <h2 id="intro-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
                Introduction
              </h2>
              <p>
                Lamb Insurance Agency (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website at{" "}
                <strong>lambinsuranceagency.com</strong> or contact us to inquire about our
                insurance services.
              </p>
              <p className="mt-3">
                This website is for informational purposes and to facilitate the process of
                requesting insurance quotes. Please read this policy carefully. By using our
                website or submitting a quote request, you agree to the practices described here.
              </p>
            </section>

            <hr className="border-navy-100" />

            <section aria-labelledby="collect-heading">
              <h2 id="collect-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
                Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-navy-600">
                <li>
                  <strong>Personal Identification:</strong> Full name, address, email address, and
                  phone number submitted through our quote request form.
                </li>
                <li>
                  <strong>Vehicle Information:</strong> Year, make, model, and VIN number if
                  voluntarily provided when requesting auto insurance quotes.
                </li>
                <li>
                  <strong>Usage Data:</strong> Standard web server logs including IP address,
                  browser type, pages visited, and visit timestamps.
                </li>
                <li>
                  <strong>Communications:</strong> Any messages or additional details you include
                  when contacting us.
                </li>
              </ul>
            </section>

            <hr className="border-navy-100" />

            <section aria-labelledby="use-heading">
              <h2 id="use-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-navy-600">
                <li>Respond to your quote requests and insurance inquiries</li>
                <li>Provide personalized insurance recommendations</li>
                <li>Contact you by phone, email, or other means about your inquiry</li>
                <li>Comply with legal and regulatory obligations as a licensed insurance agency</li>
                <li>Improve our website and customer service</li>
              </ul>
              <p className="mt-4">
                We will <strong>never sell, rent, or trade</strong> your personal information to
                third parties for marketing purposes.
              </p>
            </section>

            <hr className="border-navy-100" />

            <section aria-labelledby="share-heading">
              <h2 id="share-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
                Information Sharing
              </h2>
              <p>
                We may share your information with insurance carriers and underwriters as necessary
                to obtain quotes and process applications on your behalf—and only with your
                knowledge and consent. We may also share information when required by law or to
                protect the rights and safety of our agency, clients, or others.
              </p>
            </section>

            <hr className="border-navy-100" />

            <section aria-labelledby="security-heading">
              <h2 id="security-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
                Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and physical security measures
                to protect your personal information. Form submissions are processed securely
                through Netlify&#39;s platform. However, no method of internet transmission is
                100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <hr className="border-navy-100" />

            <section aria-labelledby="cookies-heading">
              <h2 id="cookies-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
                Cookies &amp; Analytics
              </h2>
              <p>
                Our website may use standard browser cookies to improve user experience. We do not
                currently use third-party advertising or behavioral tracking cookies. If we add
                analytics services in the future, this policy will be updated.
              </p>
            </section>

            <hr className="border-navy-100" />

            <section aria-labelledby="rights-heading">
              <h2 id="rights-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
                Your Rights
              </h2>
              <p>
                You have the right to request access to the personal data we hold about you, to
                request corrections, or to request deletion of your information, subject to
                applicable legal requirements. To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:lambinsurance91@gmail.com"
                  className="text-sage-600 underline hover:text-sage-700"
                >
                  lambinsurance91@gmail.com
                </a>
                .
              </p>
            </section>

            <hr className="border-navy-100" />

            <section aria-labelledby="contact-heading">
              <h2 id="contact-heading" className="font-display text-xl font-bold text-navy-800 mb-3">
                Contact Us
              </h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
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

            <p className="text-xs text-navy-400 mt-4">
              This policy may be updated periodically. Continued use of this website after changes
              are posted constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
