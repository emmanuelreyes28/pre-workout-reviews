import Image from "next/image";

function ProductCard({ product }) {
  // only show first 2 benefits for each card
  const benefitsToDisplay = product.benefits.slice(0, 2);

  return (
    <div className="max-w-sm rounded-lg ">
      <div className="rounded-lg shadow-md ">
        <div className="mb-1">
          <Image
            src={product.image}
            alt="pre-workout"
            width={400}
            height={400}
          />
          <p className="flex justify-center text-center text-2xl font-bold">
            {product.productName}
          </p>
          <h3 className="flex justify-center text-md text-stone-900">
            {product.brand}
          </h3>
        </div>
        <div className="pt-1">
          {/* iterate over benefits array to display seperately */}
          <div className=" text-center text-md md:text-lg font-semibold">
            {benefitsToDisplay.map((benefit) => (
              <p key={benefit._id} className="truncate">
                {benefit}&nbsp;
              </p>
            ))}
          </div>
          <p className="flex justify-center pt-1 text-red-600">
            Caffeine: {product.caffeinePerScoop}mg
          </p>
          <div className="flex justify-center pt-1">
            {product.openLabel ? (
              <p className="">Open Label</p>
            ) : (
              <p className="">Proprietary Blend</p>
            )}
          </div>
          <p className="flex justify-center pt-1 pb-2.5">
            Rating: {product.overallRating}/5
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
