import Image from "next/image";
import StarRating from "./StarRating";

function ProductCard({ product }) {
  return (
    <div className="max-w-sm rounded-lg bg-amber-300">
      <div className="outline outline-2 bg-amber-300">
        <div className="mb-4">
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
          <div className="flex flex-wrap justify-center text-md md:text-lg font-semibold">
            {product.benefits.map((benefit, index) => (
              <p key={benefit._id}>{benefit}&nbsp;</p>
            ))}
          </div>
          <p className="flex justify-center pt-1 ">
            Caffeine: {product.caffeinePerScoop}mg/serving
          </p>
          <div className="flex justify-center pt-1">
            {product.openLabel ? (
              <p className="">Open Label</p>
            ) : (
              <p className="">Proprietary Blend</p>
            )}
          </div>
          <p className="flex justify-center pt-1">
            Taste: {product.tasteRating}/5
          </p>
          <p className="flex justify-center pt-1 pb-2.5">
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
