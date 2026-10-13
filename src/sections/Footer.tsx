import { ArrowUp } from "lucide-react";
import { SocialIcon } from "../components/SocialIcon";
import { Container, Logo } from "../components/ui";
import { featureLinks, usefulLinks, legalParagraphs } from "../data";
export function Footer() {
  return (
    <footer id="contact" className="bg-peach py-12">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          <div>
            <Logo dark className="w-25" />
            <p className="mt-6">Follow us!</p>
            <div className="mt-4 flex gap-4">
              {[
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/",
                  icon: <SocialIcon name="linkedin" />,
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/",
                  icon: <SocialIcon name="instagram" />,
                },
                {
                  name: "X",
                  url: "https://x.com/",
                  icon: <span className="text-[23px] leading-none">𝕏</span>,
                },
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/",
                  icon: <SocialIcon name="facebook" />,
                },
              ].map(({ name, url, icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="hover:text-orange"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <FooterLinks title="Features" links={featureLinks} />
          <FooterLinks title="Useful Links" links={usefulLinks} />
          <div>
            <h2 className="text-[15px] font-medium tracking-normal">
              Contact Us
            </h2>
            <div className="mt-4 space-y-3">
              <a className="footer-link" href="tel:+9083263782321">
                + 908326 3782 321
              </a>
              <a className="footer-link" href="mailto:support@lante.app">
                support@lante.app
              </a>
            </div>
          </div>
        </div>
        <div className="mb-10 mt-10 border-t border-orange/60" />
        <div className="space-y-4 text-[10px] leading-relaxed">
          {[...legalParagraphs, legalParagraphs[1]].map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <div className="mt-4 flex items-end justify-between gap-5">
          <p className="text-[10px] font-semibold">
            © 2025 Lante, Inc. All rights reserved.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange/20 text-orange hover:bg-orange/30"
          >
            <ArrowUp size={30} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="text-[15px] font-medium tracking-normal">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map(([name, href]) => (
          <li key={name}>
            <a className="footer-link" href={href}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
