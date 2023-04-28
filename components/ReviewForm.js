import { useEffect, useState } from "react";
import Image from "next/image";

export default function ReviewForm({ productId }) {
  const [product, setProduct] = useState(null);

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

  // add functionality
  // when form is submitted send post request to api/product/[id]
  // include user name, content(review) and rating
  // may want to include username field in form
  // add a button to go back to home page if user doesnt wanna write a review
  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="border-b-2 border-stone-200">
          <h2 className="text-2xl font-semibold">Create Review</h2>
          <div className="mt-4 flex items-center pb-4">
            <div className="shrink-0 mr-4">
              <Image
                src={product.image}
                alt="pre-workout"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-xl">{product.productName}</span>
              <span className="font-sm text-zinc-500"> By {product.brand}</span>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-stone-200 mt-4 pb-4">
          <div className="text-xl pb-3">
            <h3>Overall Rating</h3>
          </div>
          <div>
            <input
              type="number"
              id="rating"
              name="rating"
              required
              className="w-10"
              min={1}
              max={5}
            />
            <span> Out of 5</span>
          </div>
        </div>
        <div className="border-b-2 border-stone-200 mt-4 pb-4">
          <div className="text-xl pb-3">
            <h3>Add a written review</h3>
          </div>
          <div>
            <textarea
              className="w-full"
              placeholder="What did you like or dislike?"
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mt-4">
            <button className="mr-6 px-5 py-2 rounded-full bg-amber-300 font-medium hover:bg-amber-400 hover:border-solid hover:border-black hover:border-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
