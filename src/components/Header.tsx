import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { ButtonLink, Container, Logo } from "./ui";
import { featureLinks, usefulLinks } from "../data";
export function Header() {
  const [banner, setBanner] = useState(true);
  const [mobile, setMobile] = useState(false);
  return (
    <header>
      {banner && (
        <div className="bg-white text-navy">
          <Container className="relative flex min-h-11 items-center gap-4 py-2 pr-12 text-[12px] sm:gap-5">
            <p>Promotional message to support platform growth</p>
            <ButtonLink
              href="#pricing"
              className="min-h-6 shrink-0 px-4 py-1 text-[10px]"
            >
              CTA Button
            </ButtonLink>
            <button
              onClick={() => setBanner(false)}
              aria-label="Dismiss promotional banner"
              className="absolute right-6 rounded p-1 lg:right-20"
            >
              <X size={19} />
            </button>
          </Container>
        </div>
      )}
      <Container className="relative flex min-h-18 items-center justify-between gap-5">
        <Logo className="w-19" />
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-[13px] lg:flex"
        >
          <NavDropdown label="Features" links={featureLinks} />
          <a className="nav-link" href="#pricing">
            Pricing
          </a>
          <a className="nav-link" href="#showcase">
            Listings
          </a>
          <NavDropdown label="Resources" links={usefulLinks} />
          <a className="nav-link" href="#showcase">
            About Us
          </a>
          <a className="nav-link" href="#contact">
            Contact Us
          </a>
        </nav>
        <ButtonLink href="#pricing" className="hidden md:inline-flex">
          Sign Up/Login
        </ButtonLink>
        <button
          onClick={() => setMobile(!mobile)}
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          className="rounded p-2 text-white lg:hidden"
        >
          {mobile ? <X /> : <Menu />}
        </button>
        {mobile && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute inset-x-6 top-full z-50 flex flex-col gap-1 rounded-lg border border-white/20 bg-navy p-4 text-white shadow-xl"
          >
            {[
              ["Features", "#leases"],
              ["Pricing", "#pricing"],
              ["Listings", "#showcase"],
              ["Resources", "#leases"],
              ["About Us", "#showcase"],
              ["Contact Us", "#contact"],
              ["Sign Up/Login", "#pricing"],
            ].map(([name, url]) => (
              <a
                key={name}
                href={url}
                onClick={() => setMobile(false)}
                className="rounded p-3 hover:bg-white/10"
              >
                {name}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
function NavDropdown({
  label,
  links,
}: {
  label: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <details className="group relative">
      <summary className="nav-link flex items-center gap-1.5">
        {label}
        <ChevronDown size={12} className="group-open:rotate-180" />
      </summary>
      <div className="absolute left-0 top-8 z-50 flex w-56 flex-col rounded-lg border border-white/15 bg-navy p-2 shadow-xl">
        {links.map(([name, url]) => (
          <a
            href={url}
            key={name}
            onClick={(e) =>
              e.currentTarget.closest("details")?.removeAttribute("open")
            }
            className="rounded px-3 py-2.5 text-white hover:bg-white/10"
          >
            {name}
          </a>
        ))}
      </div>
    </details>
  );
}
