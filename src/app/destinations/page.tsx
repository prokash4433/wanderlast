import { ArrowUpRight, Calendar, MapPin, Star } from "lucide-react";
import Link from "next/link";

const AllDestinationsPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const data = await res.json();
  console.log(data);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-4xl font-normal sm:text-5xl">
        Explore All Destinations
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Find your perfect travel experience from our curated collection
      </p>

      <p className="mt-8 text-sm text-muted-foreground">
        Showing {data.length} destinations
      </p>

      <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((destination: {
          _id: string;
          name: string;
          country: string;
          price: number;
          duration: string;
          imageUrl: string;
        }) => (
          <article key={destination._id}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element -- image URLs come from the API */}
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="h-full w-full object-cover"
              />
              <span className="absolute top-3 right-3 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs font-medium shadow-sm">
                4.5
                <Star className="size-3 fill-current" />
              </span>
            </div>

            <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5 shrink-0" />
              {destination.country}
            </p>

            <div className="mt-1.5 flex items-baseline justify-between gap-3">
              <h2 className="font-semibold">{destination.name}</h2>
              <p className="shrink-0">
                <span className="font-semibold">${destination.price}</span>
                <span className="text-xs text-muted-foreground">/Person</span>
              </p>
            </div>

            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="size-3.5 shrink-0" />
              {destination.duration}
            </p>
             

             <Link href={`/destinations/${destination._id}`}>
            <button
              type="button"
              className="mt-3 flex items-center gap-1 text-xs font-semibold tracking-wide cursor-pointer text-cyan-600 uppercase"
            >
              Book Now
              <ArrowUpRight className="size-3.5" />
            </button>
          </Link>
          </article>
        ))}
      </div>
    </main>
  );
};

export default AllDestinationsPage;
