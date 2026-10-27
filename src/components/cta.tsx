import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="relative isolate flex min-h-[360px] items-center justify-center overflow-hidden  sm:min-h-[400px]">
      {/* Background */}
      <Image
        src="/CTA.png"
        alt=""
        fill
        className="-z-10 object-cover"
      />
      <div
        aria-hidden
        className="-z-10 absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
      />

      {/* Content */}
      <div className="px-4 text-center text-white">
        <h2 className="font-heading text-4xl font-normal sm:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-sm text-white/85">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Button className="mt-7 h-11 gap-3 rounded-md bg-white px-7 text-xs font-medium tracking-widest text-foreground uppercase shadow-sm hover:bg-white/90">
          Book Your Trip Today
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </section>
  );
}
