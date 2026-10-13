import { useState } from "react";
import { Hero } from "./sections/Hero";
import { PropertyShowcase } from "./sections/PropertyShowcase";
import { DigitalLeases } from "./sections/DigitalLeases";
import { Pricing } from "./sections/Pricing";
import { Footer } from "./sections/Footer";

import type { BillingPeriod, Plan } from "./data";
export default function App() {
  const [selection, setSelection] = useState<{
    plan: Plan;
    period: BillingPeriod;
  } | null>(null);
  return (
    <>
      <a
        href="#showcase"
        className="fixed -top-20 left-4 z-100 rounded bg-orange p-3 text-white focus:top-4"
      >
        Skip to content
      </a>
      <main>
        <Hero />
        <PropertyShowcase />
        <DigitalLeases />
        <Pricing />
      </main>
      <Footer />
      {/* <PlanDialog selection={selection} onClose={() => setSelection(null)} /> */}
    </>
  );
}
