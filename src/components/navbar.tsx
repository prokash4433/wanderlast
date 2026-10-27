import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";

const links = [
  { label: "Home", href: "/", active: true },
  { label: "Destinations", href: "/destinations" },
  {label: "Add Destination", href: "/add-destination"},
  {label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "/admin" },
];

export function Navbar() {
  return (
    <header className="relative flex h-14 items-center bg-white px-4 sm:px-8">
      {/* Left: primary links */}
      <nav className="hidden flex-1 items-center gap-6 text-sm md:flex">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "font-medium transition-colors",
              link.active
                ? "text-cyan-500"
                : "text-foreground hover:text-cyan-500",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu toggle (md and down) */}
      <button
        type="button"
        aria-label="Open menu"
        className="flex flex-1 items-center md:hidden"
      >
        <Menu className="size-5 text-foreground" />
      </button>

      {/* Center: logo — served unoptimized so a broken optimizer can't hide it */}
      <Image
        src="/Wanderlast.png"
        alt="Wanderlast"
        width={100}
        height={40}
        priority
        unoptimized
        className="absolute left-1/2 z-10 h-6 w-auto -translate-x-1/2"
      />

      {/* Right: account links */}
      <nav className="flex flex-1 items-center justify-end gap-6 text-sm">
        <Link
          href="/profile"
          className="hidden items-center gap-1.5 font-medium text-foreground transition-colors hover:text-cyan-500 sm:flex"
        >
          <User className="size-4" />
          Profile
        </Link>
        <Link
          href="/login"
          className="font-medium text-foreground transition-colors hover:text-cyan-500"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="font-medium text-foreground transition-colors hover:text-cyan-500"
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
}
