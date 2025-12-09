import { TService } from "@/types/service";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";

type ServiceCardProps = {
  service: TService;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const provider = service.providerServices?.[0]?.service_provider || undefined;
  const providerName = provider?.fullName || "Unknown Provider";
  const providerPhoto = provider?.user?.profileImage || null;
  const rating = service?.avg_rating ?? 0;
  const categories = service.serviceOnCategory || [];

  return (
    <div
      className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col items-start
                   transition-transform duration-200 hover:scale-[1.025]
                   hover:shadow-lg border border-transparent hover:border-green-200 cursor-pointer"
    >
      <Link href={`/service/${service.id}`}>
        {/* --- Top: Provider Info --- */}
        <div className="flex items-center mb-3 w-full">
          {providerPhoto ? (
            <Image
              height={100}
              width={100}
              src={providerPhoto}
              alt={providerName}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-green-200 mr-3 flex-shrink-0"
            />
          ) : (
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-base sm:text-lg mr-3 flex-shrink-0">
              {providerName.charAt(0)}
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-base sm:text-lg font-bold text-green-700 leading-tight truncate">
                {service.title}
              </h4>
              {service.is_featured && (
                <span className="ml-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-semibold flex-shrink-0">
                  Featured
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 text-xs font-semibold mt-1">
              {Array(5)
                .fill(0)
                .map((_, i) =>
                  i < Math.round(rating) ? (
                    <FaStar key={i} className="w-3 h-3" />
                  ) : (
                    <FaRegStar key={i} className="w-3 h-3" />
                  )
                )}
              <span className="text-gray-700 ml-1">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* --- Description --- */}
        <div className="text-gray-700 text-xs sm:text-sm mb-3 w-full line-clamp-2">
          {service.description || "No description provided."}
        </div>

        {/* --- Tags: Area + Price --- */}
        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 mb-2 w-full">
          {service.area && (
            <span className="bg-green-50 px-2 py-0.5 rounded">
              {service.area}
            </span>
          )}
          {service.price !== undefined && (
            <span className="bg-green-50 px-2 py-0.5 rounded">
              ৳ {Number(service.price).toFixed(2)}
            </span>
          )}
        </div>

        {/* --- Categories --- */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 w-full mt-2">
            {categories.map((cat) => (
              <span
                key={cat.category.id}
                className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium"
              >
                {cat.category.name}
              </span>
            ))}
          </div>
        )}
      </Link>
    </div>
  );
};

export default ServiceCard;
