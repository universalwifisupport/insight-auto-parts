import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/refund-policy")({
  component: () => (
    <LegalPage title="Refund Policy" updated="4 September 2026">
      <p>
        Because orders are completed by phone, refund and return terms are confirmed with our team
        at the time of order.
      </p>
      <h2>Core exchanges</h2>
      <p>
        Some remanufactured engines and transmissions require a core exchange. Core terms are
        explained before you commit to an order.
      </p>
      <h2>Damaged or incorrect parts</h2>
      <p>
        Contact us immediately if a part arrives damaged or does not match what was confirmed on
        your order call. We will work with you to resolve it.
      </p>
      <h2>Made-to-order and quote items</h2>
      <p>
        Items marked "Quote required" or "Built to order" are manufactured or sourced against your
        specific request and refund eligibility is confirmed before you order.
      </p>
    </LegalPage>
  ),
});
