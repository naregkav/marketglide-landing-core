import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: 06/10/2025</p>
          
          <p className="mb-6">
            Ventures Without Borders Limited ("Ventures Without Borders," "MarketGlide," "we," "us," or "our"), the operator of MarketGlide ("Platform"), respects your privacy and is committed to protecting your personal data. This policy (the "Privacy Policy") explains how we collect, process, use, disclose, and protect your personal information when you use MarketGlide.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy outlines how we handle your personal data in accordance with applicable data protection laws, including the UK General Data Protection Regulation ("UK GDPR"), the EU General Data Protection Regulation ("GDPR"), and other applicable regulations.
            </p>
            <p className="mt-4">
              Ventures Without Borders Limited is the data controller responsible for the processing of your personal data under this Privacy Policy.
            </p>
            <p className="mt-4">
              By accessing or using MarketGlide, you confirm that you have read, understood and agreed to the terms of this Privacy Policy and consent to the collection, processing, and use of your personal data as described in this Privacy Policy. If you do not agree with these terms, please do not use the Platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. What Data We Collect</h2>
            <p className="mb-4">We may collect and process the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data:</strong> Name, title, date of birth, nationality.</li>
              <li><strong>Contact Data:</strong> Email address, phone number, physical address.</li>
              <li><strong>Financial Data:</strong> Payment details (if applicable for subscriptions or transactions).</li>
              <li><strong>Account Information:</strong> Login credentials, profile details, and preferences.</li>
              <li><strong>Investment Preferences:</strong> Information related to investment interests and interactions on the Platform.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system, and browsing activity.</li>
              <li><strong>Communication Data:</strong> Messages, support requests, and feedback.</li>
            </ul>
            <p className="mt-4">
              The Platform is not intended for individuals under the age of 18. We do not knowingly collect data from children. If we become aware that we have inadvertently collected personal data from a person under 18, we procure to take prompt steps to delete such data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Collect Data</h2>
            <p className="mb-4">We collect personal data through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Direct Interactions:</strong> When you register for an account, fill out forms, or communicate with us.</li>
              <li><strong>Automated Technologies:</strong> When you browse the Platform, cookies and similar technologies may collect data.</li>
              <li><strong>Third Parties:</strong> Information from business partners, data providers, and compliance verification services.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Data</h2>
            <p className="mb-4">We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate and maintain MarketGlide services.</li>
              <li>To verify identity and ensure compliance with regulatory requirements (e.g., KYC, AML).</li>
              <li>To personalize your experience and facilitate introductions and communication between users.</li>
              <li>To process payments and manage subscriptions (if applicable).</li>
              <li>To ensure security, detect fraud, and monitor misuse.</li>
              <li>To comply with applicable laws and regulatory requirements.</li>
              <li>To analyze anonymized or aggregated data for insights and platform optimization.</li>
              <li>To send newsletters, updates, and promotional content (with your consent).</li>
              <li>To use automated systems for profile analysis and matchmaking (with safeguards and/or human oversight).</li>
            </ul>
            <p className="mt-4">
              By using MarketGlide, users consent to the use of their profile and preferences data for matchmaking and communication within the Platform.
            </p>
            <p className="mt-4">
              We process your personal data based on the following legal bases: contract necessity, legal compliance, legitimate interests, and user consent where required.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. How We Share Your Data</h2>
            <p className="mb-4">We do not sell or rent your personal data. We may share your data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Third-Party Service Providers:</strong> For identity verification, payment processing, analytics, and security.</li>
              <li><strong>Regulatory Authorities & Law Enforcement:</strong> When required by law or to enforce legal obligations.</li>
              <li><strong>Business Partners & Investors:</strong> Where you have consented to sharing your data for investment matchmaking purposes.</li>
              <li><strong>Affiliates & Group Companies:</strong> To provide a seamless service experience.</li>
            </ul>
            <p className="mt-4">
              All third parties receiving personal data are bound to adhere to confidentiality obligations and implement security and compliance measures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. International Data Transfers</h2>
            <p className="mb-4">
              We may transfer personal data outside the UK and the EEA (European Economic Area), where data protection laws may differ. When such transfers occur, we implement adequate safeguards, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission.</li>
              <li>Adequacy Decisions from the UK or EU authorities.</li>
              <li>Binding Corporate Rules (BCRs) for multinational transfers.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary for the purposes outlined in this Privacy Policy, including compliance with legal obligations, dispute resolution, and fraud prevention. Data retention periods vary depending on the nature of the data and legal obligations. Data no longer required is securely deleted or anonymized.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights & Choices</h2>
            <p className="mb-4">You have rights regarding your personal data, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access & Rectification:</strong> Request a copy of your data or correct inaccuracies.</li>
              <li><strong>Deletion:</strong> Request the removal of personal data under certain conditions.</li>
              <li><strong>Restriction & Objection:</strong> Limit or object to the processing of your data.</li>
              <li><strong>Portability:</strong> Request your data in a structured format.</li>
              <li><strong>Withdraw Consent:</strong> If processing is based on consent, you may withdraw it at any time.</li>
            </ul>
            <p className="mt-4">
              To exercise your rights, please contact us at <a href="mailto:concierge@marketglide.io" className="text-primary hover:underline">concierge@marketglide.io</a>. We may require identity verification before fulfilling requests. You also have the right to lodge a complaint with a supervisory authority such as the UK Information Commissioner's Office (ICO) if you believe your data has been processed unlawfully.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Security Measures</h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect personal data from unauthorized access, alteration, disclosure, or destruction. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Data encryption in transit and at rest.</li>
              <li>Access control and authentication measures.</li>
              <li>Regular security audits and compliance checks.</li>
            </ul>
            <p className="mt-4">
              Despite our efforts, no system is entirely secure, and we cannot guarantee absolute security. In addition, users are responsible for maintaining the confidentiality of their login credentials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Cookies & Tracking Technologies</h2>
            <p>
              MarketGlide uses cookies and similar tracking technologies to enhance user experience, improve functionality, and analyze site traffic. You may adjust cookie settings in your browser to limit tracking.
            </p>
            <p className="mt-4">
              For detailed information, please refer to our Cookie Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Children's Privacy</h2>
            <p>
              MarketGlide is not intended for use by individuals under the age of 18. We do not knowingly collect or process personal data from anyone under 18. If we become aware of such collection, we will delete the information promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated date. We encourage users to review this policy regularly. Your continued use of the Platform after modifications constitutes acceptance of the revised Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
            <p className="mb-4">If you have questions about this Privacy Policy or how we process personal data, please contact us at:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:concierge@marketglide.io" className="text-primary hover:underline">concierge@marketglide.io</a></li>
              <li>Website: <a href="https://www.marketglide.io" className="text-primary hover:underline">www.marketglide.io</a></li>
            </ul>
          </section>

          <p className="mt-8 text-muted-foreground italic">
            By using MarketGlide, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
