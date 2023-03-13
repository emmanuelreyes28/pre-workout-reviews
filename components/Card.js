import Image from "next/image";

function Card({ product }) {
  return (
    <li className="flex flex-col items-center border rounded-md shadow-md p-6 mb-6">
      <div className="mb-6">
        {/* <Image src={product.image} alt="pre-workout" /> */}
        <h2 className="text-2xl font-bold">{product.productName}</h2>
        <h3 className="text-lg font-medium text-gray-600">{product.brand}</h3>
      </div>
      <div className="mb-6">
        <p className="text-gray-800">{product.benefits}</p>
        <p className="text-gray-800">{product.caffeinePerScoop}mg</p>
        <div>
          {product.openLabel ? (
            <p className="text-green-500">Open Label</p>
          ) : (
            <p className="text-yellow-500">Proprietary Blend</p>
          )}
        </div>
        <p className="text-gray-800">{product.tasteRating}/5</p>
        <p className="text-gray-800">{product.overallRating}/5</p>
        <p className="text-gray-800">{product.description}</p>
      </div>
      <ul className="w-full">
        {product.reviews.map((review, index) => (
          <li key={index} className="border-t py-2">
            <p className="text-gray-800">{review.user}</p>
            <p className="text-gray-800">{review.content}</p>
            <p className="text-gray-800">{review.rating}/5</p>
            <p className="text-gray-800">{review.helpfulCount}</p>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Card;
