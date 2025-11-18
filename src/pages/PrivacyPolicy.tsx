import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "2-digit" })}
          </p>

          <div className="space-y-8 text-sm md:text-base text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
              <p>
                This Privacy Policy explains how we collect, use, and protect your personal information when you visit our
                website or contact us about our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
              <p className="mb-2">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contact details such as your name, email address, and phone number</li>
                <li>Project details that you share with us through forms or consultations</li>
                <li>Technical data such as IP address, browser type, and pages visited</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your inquiries and provide service estimates</li>
                <li>Schedule and manage projects and customer communication</li>
                <li>Improve our website, services, and customer experience</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Cookies and Tracking</h2>
              <p>
                We may use cookies or similar technologies to understand how visitors use our website and to improve
                performance. You can adjust your browser settings to refuse cookies, but some features of the site may not
                function properly as a result.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Data Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with trusted service providers who
                assist us in operating our business (for example, hosting, analytics, or communication tools), but only as
                necessary to perform their services and subject to confidentiality obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
              <p>
                We take reasonable technical and organizational measures to protect your personal information from
                unauthorized access, disclosure, or misuse. However, no method of transmission over the Internet or
                electronic storage is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes described in this
                policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
              <p className="mb-2">
                Depending on your location, you may have certain rights regarding your personal information, such as the
                right to access, correct, or delete your data. To exercise these rights, please contact us using the
                details below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices or
                content of those websites. We encourage you to review their privacy policies separately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">10. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. Any updates will be posted on this page with a revised "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your information, please contact us
                using the contact details provided on our website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
