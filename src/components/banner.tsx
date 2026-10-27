import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const searchFields = [
  { label: "Location", value: "Anywhere, City, or Zip" },
  { label: "Date/Duration", value: "Anytime, 3 Days" },
  { label: "Budget", value: "$0 - $3000" },
  { label: "People", value: "5-10" },
];

export function Banner() {
  return (
    <section className="relative isolate flex min-h-[600px] flex-col overflow-hidden text-white lg:min-h-[680px]">
      {/* Background */}
      <Image
        src="/Banner.png"
        alt=""
        fill
        priority
        className="-z-10 object-cover"
      />
      <div
        aria-hidden
        className="-z-10 absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/35"
      />

      {/* Headline */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 pt-16 pb-16 text-center">
        <h1 className="max-w-3xl font-heading text-5xl font-normal tracking-wide text-balance sm:text-6xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button className="h-10 gap-2 rounded-md bg-cyan-500 px-5 text-xs font-medium tracking-wider uppercase text-white hover:bg-cyan-600">
            Explore Now
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button className="h-10 rounded-md border border-white/40 bg-white/25 px-5 text-xs font-medium tracking-wider uppercase text-white backdrop-blur-sm hover:bg-white/35 hover:text-white">
            View Destination
          </Button>
        </div>
      </div>

      {/* Search bar */}
      <form className="w-full">
        <div className="flex flex-col bg-white/15 backdrop-blur-md md:flex-row">
          {searchFields.map((field) => (
            <button
              key={field.label}
              type="button"
              className="border-white/25 px-6 py-4 text-left transition-colors hover:bg-white/10 md:flex-1 md:border-t-0 md:border-l md:first:border-l-0"
            >
              <p className="text-sm font-medium">{field.label}</p>
              <p className="mt-1 text-xs text-white/70">{field.value}</p>
            </button>
          ))}
          <button
            type="submit"
            className="bg-cyan-500 px-10 py-4 text-sm font-medium text-white transition-colors hover:bg-cyan-600 md:py-0"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}
