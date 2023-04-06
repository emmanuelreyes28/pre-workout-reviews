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
      <div>
        <div>
          <div>
            <Image
              src={product.image}
              alt="pre-workout"
              width={400}
              height={400}
            />
            <div>
              <h1>{product.productName}</h1>
              <p>{product.brand}</p>
              <p>Rating: {product.overallRating}/5</p>
              <div>
                {product.benefits.map((benefit) => (
                  <span key={benefit._id}>{benefit}&nbsp;</span>
                ))}
              </div>
              <div>
                <p>Description:</p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
