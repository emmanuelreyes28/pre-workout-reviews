import Image from "next/image";

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
          <p className="">{product.benefits}</p>
          <p className="flex justify-center">
            Caffeine: {product.caffeinePerScoop}mg/serving
          </p>
          <div>
            {product.openLabel ? (
              <p className="">Open Label</p>
            ) : (
              <p className="">Proprietary Blend</p>
            )}
          </div>
          <p className="">Taste: {product.tasteRating}/5</p>
          <p className="">Overall: {product.overallRating}/5</p>
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
