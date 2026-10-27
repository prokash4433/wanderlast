import { ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const quickLinks = ["Home", "Destinations", "My Bookings", "My Profile"];
const supportLinks = ["Help Center", "Terms of Service", "Privacy Policy"];
const contact = ["786 901 1622", "info@wandarland.com"];

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-4"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

const socials = [
  { label: "X (Twitter)", href: "#", icon: XIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className=" bg-black px-4 pt-12 pb-6 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Wordmark */}
        <h2 className="font-heading text-5xl font-semibold sm:text-6xl">
          Wanderlast
        </h2>
        <p className="mt-3 text-sm text-neutral-400">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        {/* Columns */}
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-sm font-normal tracking-wide uppercase">
              Newsletter
            </h3>
            <p className="mt-3 text-xs text-neutral-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form className="relative mt-4 max-w-72">
              <Input
                type="email"
                placeholder="Enter email"
                aria-label="Email address"
                className="h-10 rounded-md border-0 bg-neutral-800 px-3.5 text-sm placeholder:text-neutral-400 focus-visible:bg-neutral-800"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="absolute top-1/2 right-3 -translate-y-1/2 text-white"
              >
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-sm font-normal tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-300 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-normal tracking-wide uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-300 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-normal tracking-wide uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              {contact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-neutral-400">
            © 2026 Wanderlast. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white transition-opacity hover:opacity-70"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
