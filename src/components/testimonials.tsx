import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious, And The Cultural Experiences Were Unforgettable!"',
    name: "Michael Chen",
    location: "Singapore",
    image: "/person2.png",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking, And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/person1.png",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Carousel opts={{ align: "start", loop: false }}>
          {/* Heading with navigation arrows */}
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-heading font-normal sm:text-4xl">
                What Travelers Say
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Real experiences from our happy travelers
              </p>
            </div>
            <div className="flex gap-3">
              <CarouselPrevious className="static my-auto size-10 rounded-full border-border" />
              <CarouselNext className="static my-auto size-10 rounded-full border-border" />
            </div>
          </div>

          {/* Cards */}
          <CarouselContent className="mt-8">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="basis-full md:basis-1/2"
              >
                <div className="flex h-full flex-col gap-5 rounded-lg border border-border bg-white p-5 shadow-xs sm:flex-row">
                  <div className="flex flex-1 flex-col">
                    <p className="font-heading text-sm font-semibold leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="mt-auto pt-6">
                      <div className="h-px bg-border" />
                      <p className="mt-4 text-xs text-cyan-600">
                        — {testimonial.name}
                      </p>
                      <p className="mt-1 text-[10px] text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={176}
                    height={220}
                    unoptimized
                    className="aspect-[4/5] w-full rounded-md object-cover sm:w-44"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
