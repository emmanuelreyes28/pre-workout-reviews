import Image from "next/image";
import { StarSolidIcon } from "@heroicons/react/solid";

function StarRating({ rating }) {
  const fullStar = <StarSolidIcon className="h-5 w-5 text-yellow-500" />;

  const emptyStar = <StarSolidIcon className="h-5 w-5 text-gray-300" />;

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((index) => {
        const icon = index <= rating ? fullStar : emptyStar;
        return <span key={index}>{icon}</span>;
      })}
      <span className="ml-2">{rating}/5</span>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="max-w-sm max-h-5 rounded-lg bg-amber-300">
      <div className="outline outline-2 bg-amber-300">
        <div className="">
          <Image
            src={product.image}
            alt="pre-workout"
            width={400}
            height={400}
          />
          <p className="flex justify-center text-2xl font-bold">
            {product.productName}
          </p>
          <h3 className="flex justify-center text-md text-stone-900">
            {product.brand}
          </h3>
        </div>
        <div className="pt-3">
          {/* iterate over benefits array to display seperately */}
          <div className="flex justify-center">
            {product.benefits.map((benefit, index) => (
              <p key={index} className="">
                {benefit}&nbsp;
              </p>
            ))}
          </div>
          <p className="flex justify-center">
            Caffeine: {product.caffeinePerScoop}mg/serving
          </p>
          <div className="flex justify-center">
            {product.openLabel ? (
              <p className="">Open Label</p>
            ) : (
              <p className="">Proprietary Blend</p>
            )}
          </div>
          <p className="flex justify-center">
            Taste: <StarRating rating={product.tasteRating} />
          </p>
          <p className="flex justify-center">
            Overall: {product.overallRating}/5
          </p>
        </div>
        {/* <p className="">{product.description}</p> */}
      </div>
      {/* <ul className="w-full">
        {product.reviews.map((review, index) => (
          <li key={index} className="">
            <p className="">{review.user}</p>
            <p className="">{review.content}</p>
            <p className="">{review.rating}/5</p>
            <p className="">{review.helpfulCount}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default ProductCard;
