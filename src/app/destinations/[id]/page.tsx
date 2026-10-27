 
import Link from "next/link";
import { ArrowLeft, CalendarDays, Check, MapPin, Pencil, Trash2, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
 

const DestinatiosDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);
const destination = await res.json();

return (
<div className="min-h-screen bg-white">
<div className="mx-auto max-w-6xl px-5 py-5">
                    {/* Top Navigation */}
<div className="mb-3 flex items-center justify-between">
<Link
          href="/destinations"
          className="flex items-center gap-2 text-[11px] text-gray-500 hover:text-black">
          <ArrowLeft size={12} />
          Back to Destinations
</Link>

                                        
          <div className="flex items-center gap-2">
          <Link
          href={`/destinations/${id}/edit`}
          className="flex items-center gap-1.5 border border-gray-300 px-3 py-1.5 text-[10px] text-gray-700">
          <Pencil size={11} />
          Edit
          </Link>

          <button className="flex items-center gap-1.5 border border-red-300 px-3 py-1.5 text-[10px] text-red-500">
          <Trash2 size={11} />
          Cancel
          </button>
          </div>
         </div>

                    {/* Destination Image */}
          <div className="h-[400px] w-full overflow-hidden">
          <Image
          src={destination.imageUrl}
          alt={destination.name}
          width={1200}
          height={800}
          className="h-full w-full object-cover"/>
          </div>

                              
                              
          <div className="mt-[18px] border-t border-gray-100 pt-5">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_200px]">
                    
                    
                    {/* Destination Information */}
          <div>
          <div className="mb-2 flex items-center gap-1.5 text-[10px] text-gray-500">
          <MapPin size={11} />
          {destination.country}
          </div>

          <h1 className="font-serif text-[29px] leading-tight tracking-tight text-black">
          {destination.name}
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px]">
          <span className="flex items-center gap-1 font-semibold text-gray-800">
          <Star size={11} fill="#16a34a" className="text-green-600" />4.9
           <span className="font-normal text-gray-500">
          (234 reviews)
          </span>
          </span>

                                                                      
                                                                      
          <span className="flex items-center gap-1 text-gray-800">
          <CalendarDays size={11} />
          {destination.duration}
          </span>
          </div>

                    {/* Overview */}
          <section className="mt-5">
          <h2 className="font-serif text-[25px] text-black">
          Overview
          </h2>

          <p className="mt-2 max-w-2xl text-[10px] leading-[25px] text-gray-500">
          {destination.description}</p>
          </section>

                    {/* Highlights */}
          <section className="mt-5">
          <h2 className="font-serif text-[20px] text-black">
          Highlights
          </h2>

          <p className="mt-2 max-w-2xl text-[10px] leading-[25px] text-gray-500">
          Discover the magic of {destination.name} with pristine beaches,
          ancient temples, and vibrant culture. Experience luxury
          resorts, tropical landscapes, and unforgettable sunsets.
          </p>

          <div className="mt-3 grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2  ">
          {[
                                                                                          "Luxury beachfront accommodation",
                                                                                          "Visit Uluwatu Temple at sunset",
                                                                                          "Traditional Balinese spa treatment",
                                                                                          "Private beach dinner experience",
                                                                                          "Sunrise trek to Mount Batur",
].map((highlight) => (
                                                                                          <div
                                                                                                    key={highlight}
                                                                                                    className="flex items-center gap-1.5 text-[12px] text-gray-500"
                                                                                          >
                                                                                                    <Check size={11} className="shrink-0 text-green-600" />
                                                                                                    {highlight}
                                                                                          </div>
))}
                              </div>
                    </section>
          </div>

                    
                    
                    {/* Booking Card */}
          <aside className="h-fit border border-gray-100 bg-white p-2.5 shadow-sm">
          <p className="text-[9px] text-gray-500">Starting from</p>

          <h2 className="text-[21px] leading-tight text-cyan-600">
          ${destination.price}
                                                            </h2>

                                                            <p className="text-[9px] text-gray-500">per person</p>

                                                            <input
                                                                      type="text"
                                                                      value={destination.departureDate || ""}
                                                                      readOnly
                                                                      className="mt-5 h-[26px] w-full border border-gray-100 bg-gray-50 px-2 text-[9px] text-gray-700 outline-none"
                                                            />

                                                            <button className="mt-5 flex h-[28px] w-full items-center justify-center gap-1 bg-cyan-600 text-[9px] text-white transition hover:bg-cyan-700">
                                                                      Book Now
                                                                      <ArrowRight size={11} />
                                                            </button>

                                                            <div className="mt-3 space-y-1.5">
                                                                      {[
                                                                                "Free cancellation up to 7 days",
                                                                                "Travel insurance included",
                                                                                "24/7 customer support",
                                                                      ].map((benefit) => (
                                                                                <div
                                                                                          key={benefit}
                                                                                          className="flex items-center gap-1.5 text-[9px] text-gray-500"
                                                                                >
                                                                                          <Check size={11} className="shrink-0 text-green-600" />
                                                                                          {benefit}
                                                                                </div>
                                                                      ))}
                                                            </div>
                                                  </aside>
                                        </div>
                              </div>
                    </div>
          </div>
);
};

export default DestinatiosDetailsPage;
 