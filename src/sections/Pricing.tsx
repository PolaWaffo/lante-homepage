import { useState } from "react";
import { CheckCheck, X } from "lucide-react";
import { Button, Container } from "../components/ui";
import { plans, planPrice, type BillingPeriod, type Plan } from "../data";
export function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="bg-surface py-16"
    >
      <Container>
        <h2
          id="pricing-title"
          className="text-center text-[clamp(1.8rem,3.5vw,2.625rem)] font-semibold leading-tight"
        >
          Discover Our Unique Plans
        </h2>
        <div
          className="mx-auto mt-7 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-lg border border-navy/40 p-1.5"
          role="group"
          aria-label="Billing period"
        >
          {(["monthly", "annual"] as const).map((value) => (
            <button
              key={value}
              aria-pressed={period === value}
              onClick={() => setPeriod(value)}
              className={`flex min-h-8 items-center justify-center gap-2 rounded px-4 py-1.5 text-body ${period === value ? "bg-navy text-white" : "hover:bg-navy/5"}`}
            >
              {value === "monthly" ? "Monthly Billing" : "Annual Billing"}
              {value === "annual" && (
                <span className="rounded-sm bg-emerald-500/10 px-1.5 py-0.5 text-[11px] text-emerald-600">
                  12% OFF
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              period={period}
           
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
function PricingCard({
  plan,
  period,

}: {
  plan: Plan;
  period: BillingPeriod;

}) {
  const price = planPrice(plan.monthlyPrice, period);
  return (
    <article
      className={`flex min-w-0 flex-col rounded-card border p-5 lg:p-4 ${plan.premium ? "border-navy bg-navy text-white" : plan.popular ? "border-panel bg-panel" : "border-navy/15 bg-surface"}`}
    >
      <div className="flex items-center justify-between gap-2 pt-2">
        <h3 className="text-body font-medium tracking-normal">{plan.name}</h3>
        {plan.popular && (
          <span className="rounded-sm bg-orange/10 px-2 py-0.5 text-[11px] text-orange">
            Popular
          </span>
        )}
      </div>
      <p
        className="mt-6 flex flex-wrap items-baseline gap-2"
        aria-live="polite"
      >
        <span className="text-price font-semibold tracking-[-0.045em]">
          ${price.toFixed(2)}
        </span>
        <span className="text-[12px]">per month</span>
      </p>
      {period === "annual" && (
        <p className="mt-1 text-[11px] opacity-75">
          ${(price * 12).toFixed(2)} billed annually
        </p>
      )}
      <p className="mt-6 text-[15px] font-medium">{plan.subtitle}</p>
      <Button
        variant={plan.popular ? "primary" : "orange-outline"}
        className="mt-8 w-full"
       
      >
        Get Started
      </Button>
      <div
        className={`my-7 border-t ${plan.premium ? "border-white/25" : "border-navy/25"}`}
      />
      <h4 className="text-[15px] font-medium">Features</h4>
      <p className="mt-2 text-body">{plan.intro}</p>
      <ul className="mt-7 space-y-3 pb-3">
        {plan.features.map((feature, i) => (
          <li
            key={i}
            className={`flex items-start gap-3 text-[12px] ${feature.included ? "" : "text-muted"}`}
          >
            {feature.included ? (
              <CheckCheck
                size={15}
                className="mt-0.5 shrink-0"
                aria-label="Included"
              />
            ) : (
              <X
                size={15}
                className="mt-0.5 shrink-0"
                aria-label="Not included"
              />
            )}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
