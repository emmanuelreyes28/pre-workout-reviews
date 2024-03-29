import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);
  const [numReviews, setNumReviews] = useState(3);

  //fetch product data from api
  //run everytime productId prop change (dependency)
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/product/${productId}`);
        const { data } = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }

    // fetch product only if product id prop is received
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  //show loading if product details have not yet been fetched
  if (!product) {
    return <div>Loading...</div>;
  }

  const handleViewMoreReviews = () => {
    setNumReviews(numReviews + 5); //show additional 5 reviews
  };

  // slice reviews array based on numReviewsState
  const reviewsToDisplay = product.reviews.slice(0, numReviews);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={product.image}
                alt="pre-workout"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold">{product.productName}</h1>
            <p className="text-lg mb-2">{product.brand}</p>
            <p>Rating: {product.overallRating}/5</p>
            <div className="mb-4">
              <p className="font-medium mb-1">Benefits:</p>
              <div className="flex flex-wrap">
                {product.benefits.map((benefit) => (
                  <span
                    key={benefit._id}
                    className="bg-gray-200 rounded-full py-1 px-2 text-sm font-medium mr-2 mb-2"
                  >
                    {benefit}&nbsp;
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium mb-1">Description:</p>
              <p className="text-lg">{product.description}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold pt-2 px-2">REVIEWS</h2>
              <p className="text-md px-2">{product.reviews.length} Ratings</p>
            </div>
            <div>
              <div className="mr-6 mt-4 pt-3">
                <Link
                  href={`/create-review/${product._id}`}
                  className="px-8 py-4 bg-blue-400 rounded-full hover:bg-blue-500 hover:text-white"
                >
                  Write a review
                </Link>
              </div>
            </div>
          </div>
          <div>
            <ul>
              {reviewsToDisplay.map((review) => (
                <li
                  className="mt-2 mb-2 px-2 border-b-2 border-stone-200"
                  key={review._id}
                >
                  <p className="font-semibold">{review.user}</p>
                  <p className="pb-2">{review.rating}/5</p>
                  <p className="pb-2">{review.content}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-center ">
              {numReviews < product.reviews.length && (
                <button
                  className="px-8 py-4 font-semibold"
                  onClick={handleViewMoreReviews}
                >
                  See more reviews
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
