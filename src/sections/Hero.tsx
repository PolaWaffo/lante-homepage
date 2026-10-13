import { Header } from "../components/Header";
import { ButtonLink, Container } from "../components/ui";
import { DashboardPreview } from "../components/DashboardPreview";
export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-black text-white"
    >
      <Header />
      <Container className="relative pt-14 text-center md:pt-12">
        <div
          aria-hidden="true"
          className="absolute right-10 top-44 h-60 w-60 rounded-full border border-white/10 bg-[radial-gradient(circle_at_bottom,#05284466,transparent)]"
        />
        <h1 id="hero-title" className="relative text-heading font-semibold">
          The Smart Link
          <br />
          Between Landlords &amp; Tenants
        </h1>
        <p className="relative mx-auto mt-6 max-w-162.5 text-body text-white/95">
          Designed for both landlords and tenants, Lante simplifies property
          management with effortless rent collection, lease tracking, and
          maintenance coordination—all in one place.
        </p>
        <div className="relative mt-5 flex flex-wrap justify-center gap-5">
          <ButtonLink href="#contact" arrow>
            Book a Demo
          </ButtonLink>
          <ButtonLink href="#pricing" variant="light-outline" arrow>
            Get Started
          </ButtonLink>
        </div>
        <DashboardPreview />
      </Container>
    </section>
  );
}
