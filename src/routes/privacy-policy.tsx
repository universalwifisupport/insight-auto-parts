import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { BRAND_NAME } from "@/lib/catalog";

export const Route = createFileRoute("/privacy-policy")({
  component: () => (
    <LegalPage title="Privacy Policy" updated="4 September 2026">
      <p>
        {BRAND_NAME} ("we", "us") respects your privacy. This policy explains what information we
        collect through this website and how it is used.
      </p>
      <h2>Information we collect</h2>
      <p>
        When you submit an enquiry form, we collect your name, phone number, email address and
        message. We do not collect payment information through this website, as all orders are
        completed by phone.
      </p>
      <h2>How we use your information</h2>
      <p>
        Enquiry details are used solely to respond to your request — confirming part availability,
        fitment and pricing. We do not sell or rent your information to third parties.
      </p>
      <h2>Data retention</h2>
      <p>
        Enquiry records are retained only as long as needed to handle your request and for basic
        business record-keeping.
      </p>
      <h2>Contact</h2>
      <p>To ask about the data we hold on you, contact us using the details on our Contact page.</p>
    </LegalPage>
  ),
});
