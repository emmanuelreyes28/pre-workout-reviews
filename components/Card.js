import Image from "next/image";

function Card({ product }) {
  return (
    <li className="">
      <div className="">
        <Image src={product.image} alt="pre-workout" width={400} height={400} />
        <h2 className="">{product.productName}</h2>
        <h3 className="">{product.brand}</h3>
      </div>
      <div className="">
        <p className="">{product.benefits}</p>
        <p className="">{product.caffeinePerScoop}mg</p>
        <div>
          {product.openLabel ? (
            <p className="">Open Label</p>
          ) : (
            <p className="">Proprietary Blend</p>
          )}
        </div>
        <p className="">{product.tasteRating}/5</p>
        <p className="">{product.overallRating}/5</p>
        <p className="">{product.description}</p>
      </div>
      <ul className="w-full">
        {product.reviews.map((review, index) => (
          <li key={index} className="">
            <p className="">{review.user}</p>
            <p className="">{review.content}</p>
            <p className="">{review.rating}/5</p>
            <p className="">{review.helpfulCount}</p>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Card;
