import Image from "next/image";

const features = [
  {
    icon: "/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-cyan-50 px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Heading with a thin decorative line through it */}
        <h2 className="text-center text-3xl font-heading font-normal  sm:text-4xl">
          <span className="relative inline-block px-2">
            <span
              aria-hidden
              className="absolute inset-x-0 top-1/2 h-px bg-cyan-900/30"
            />
            <span className="relative">Why Choose Wanderlust</span>
          </span>
        </h2>
        <p className="mt-1 text-center text-xs text-muted-foreground">
          Your trusted partner for exceptional travel experiences
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-md border border-border bg-white p-5 shadow-xs"
            >
              <Image
                src={feature.icon}
                alt=""
                width={32}
                height={32}
                unoptimized
                className="size-8"
              />
              <h3 className="mt-5 text-lg text-foreground">{feature.title}</h3>
              <p className="mt-2 max-w-56 text-xs leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
