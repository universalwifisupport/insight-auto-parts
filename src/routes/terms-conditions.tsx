import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { BRAND_NAME } from "@/lib/catalog";

export const Route = createFileRoute("/terms-conditions")({
  component: () => (
    <LegalPage title="Terms & Conditions" updated="4 September 2026">
      <p>By using this website you agree to the following terms.</p>
      <h2>Phone ordering only</h2>
      <p>
        This website does not process payments or complete purchases online. Adding a product to
        your cart is a non-binding enquiry; an order is only confirmed once agreed by phone with a{" "}
        {BRAND_NAME} representative.
      </p>
      <h2>Product information</h2>
      <p>
        We aim to describe products accurately, but fitment can vary by vehicle configuration.
        Always confirm fitment with our team by phone before ordering.
      </p>
      <h2>Pricing</h2>
      <p>Prices shown are indicative and subject to confirmation at the time of order.</p>
      <h2>Manufacturer affiliation</h2>
      <p>
        {BRAND_NAME} is an independent parts supplier and is not affiliated with or authorized by
        any vehicle manufacturer unless explicitly stated.
      </p>
    </LegalPage>
  ),
});
