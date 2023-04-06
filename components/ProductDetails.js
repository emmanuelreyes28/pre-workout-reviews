import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductDetails({ productId }) {
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
            <div>
              <p>Description:</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
