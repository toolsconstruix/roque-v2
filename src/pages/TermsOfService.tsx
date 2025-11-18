import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">
            Please read these Terms of Service carefully before using our website or submitting any project requests.
          </p>

          <div className="space-y-8 text-sm md:text-base text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using this website, you agree to be bound by these Terms of Service and our Privacy Policy.
                If you do not agree, please do not use this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Services</h2>
              <p>
                The information on this website is provided for general information about our remodeling and home services.
                Any estimates, proposals, or project details will be confirmed in writing and may be subject to a separate
                service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Use of the Website</h2>
              <p className="mb-2">You agree to use this website only for lawful purposes and not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Submit false, inaccurate, or misleading information</li>
                <li>Attempt to interfere with the security or proper functioning of the site</li>
                <li>Copy or reuse content in a way that infringes our intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Quotes and Estimates</h2>
              <p>
                Any quotes or estimates provided through this website or by email are based on the information available at
                the time and are not a final contract. Pricing and timelines may change after an on-site assessment and
                detailed scope of work are confirmed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. No Warranty</h2>
              <p>
                While we aim to keep the information on this website accurate and up to date, we do not guarantee that the
                content is complete, current, or free of errors. The site is provided on an "as is" and "as available"
                basis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential
                damages arising from your use of this website or reliance on its content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Third-Party Links</h2>
              <p>
                This website may include links to third-party websites or services. We do not control and are not
                responsible for the content, policies, or practices of any third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. Intellectual Property</h2>
              <p>
                All content on this website, including text, images, logos, and layouts, is owned by us or used with
                permission and is protected by applicable intellectual property laws. You may not reproduce, distribute, or
                create derivative works without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">9. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. Changes will be posted on this page and are effective
                when published. Your continued use of the website after changes are posted constitutes acceptance of the
                revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of the jurisdiction in which our business is based, without
                regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us using the details provided on our
                website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
