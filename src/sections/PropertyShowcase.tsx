import { useState } from "react";
import { Button, Container } from "../components/ui";
export function PropertyShowcase() {
  const [details, setDetails] = useState(false);
  return (
    <section
      id="showcase"
      aria-labelledby="showcase-title"
      className="bg-surface py-16 md:py-20"
    >
      <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-10">
        <div>
          <h2 id="showcase-title" className="section-heading">
            Showcase &amp;
            <br />
            Rent Faster with Lante
          </h2>
          <p className="mt-6 max-w-[440px] text-body">
            Effortlessly list your properties with detailed descriptions,
            high-quality images, and pricing. Attract the right tenants with a
            professional and organized property showcase. Lante ensures maximum
            visibility, helping you fill vacancies faster.
          </p>
          <Button
            variant="outline"
            arrow
            className="mt-6"
            aria-expanded={details}
            aria-controls="property-details"
            onClick={() => setDetails(!details)}
          >
            Learn More
          </Button>
          {details && (
            <div
              id="property-details"
              className="mt-5 rounded-card border border-navy/15 bg-white p-5"
            >
              <h3 className="font-medium tracking-normal">
                Four bedroom apartment
              </h3>
              <p className="mt-2">Available for rent in Embakasi, Nairobi.</p>
              <a
                href="#contact"
                className="mt-3 inline-block text-orange underline"
              >
                Contact us about this property
              </a>
            </div>
          )}
        </div>
        <div className="relative mx-auto w-full max-w-[480px]">
          <img
            src="/assets/property.jpg"
            alt="Modern white four-bedroom house with a garden in Embakasi, Nairobi"
            width="1438"
            height="1438"
            className="aspect-square w-full rounded-card object-cover"
          />
          <div className="absolute -bottom-5 left-3 flex max-w-[355px] items-center gap-3 rounded-lg bg-white p-2 shadow-sm sm:bottom-9 sm:-left-16 lg:-left-32">
            <img
              src="/assets/property.jpg"
              alt=""
              className="h-16 w-16 shrink-0 rounded-lg object-cover"
            />
            <div>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-body font-medium tracking-normal">
                  Property Listed
                </h3>
                <span className="whitespace-nowrap text-[9px] text-muted">
                  24mins ago
                </span>
              </div>
              <p className="mt-1 text-body">
                Four bedroom apartment available for rent in Embakasi, Nairobi.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
