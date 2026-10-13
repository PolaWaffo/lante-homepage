import { useState } from "react";
import { Button, Container } from "../components/ui";
export function DigitalLeases() {
  const [more, setMore] = useState(false);
  return (
    <section
      id="leases"
      aria-labelledby="leases-title"
      className="bg-peach py-20 md:py-24"
    >
      <Container>
        <h2
          id="leases-title"
          className="text-display font-semibold text-orange"
        >
          <span className="block">Say goodbye to</span>
          <span className="block md:text-right">paperwork</span>
        </h2>
        <div className="mt-10 max-w-132.5 md:ml-auto md:mt-12">
          <p className="text-body">
            With Digital Lease and Contracts, say goodbye to paperwork! Lante
            allows you to create, sign, and store lease agreements digitally.
            Ensure compliance with legally binding e-signatures and keep all
            your documents secure in one place.
          </p>
          <Button
            variant="outline"
            arrow
            className="mt-5"
            onClick={() => setMore(!more)}
            aria-expanded={more}
            aria-controls="lease-details"
          >
            Learn More
          </Button>
          {more && (
            <ol
              id="lease-details"
              className="mt-5 list-decimal space-y-2 rounded-card border border-orange/20 bg-white/60 p-5 pl-10"
            >
              <li>Create your lease agreement.</li>
              <li>Collect signatures digitally.</li>
              <li>Keep documents together in one secure place.</li>
            </ol>
          )}
        </div>
      </Container>
    </section>
  );
}
