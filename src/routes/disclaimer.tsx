import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { BRAND_NAME } from "@/lib/catalog";

export const Route = createFileRoute("/disclaimer")({
  component: () => (
    <LegalPage title="Disclaimer" updated="4 September 2026">
      <p>
        {BRAND_NAME} is an independent supplier of automotive parts and is not affiliated with,
        endorsed by, or authorized by any vehicle or original-equipment manufacturer, unless
        explicitly stated on a specific product page.
      </p>
      <h2>Fitment</h2>
      <p>
        Product descriptions are provided as a general guide. Always confirm exact fitment for your
        vehicle with our team by phone before ordering.
      </p>
      <h2>Imagery</h2>
      <p>
        Product photography is representative of the item supplied; minor variations in finish or
        packaging may occur.
      </p>
      <h2>No online transactions</h2>
      <p>
        This website does not process payments. All orders are confirmed and completed directly with
        our team by phone.
      </p>
    </LegalPage>
  ),
});
