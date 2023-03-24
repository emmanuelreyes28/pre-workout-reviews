import { useState } from "react";
import { useRouter } from "next/router";

function Form({ formId, productForm }) {
  const [product, setProduct] = useState({
    image: productForm.image,
    productName: productForm.name,
    brand: productForm.brand,
    benefits: productForm.benefits,
    caffeinePerScoop: productForm.caffeine,
    openLabel: productForm.label,
  }); //pass in product details

  const postData = async (product) => {
    try {
      const res = await fetch("/api/product", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(product),
      });

      // throw error with status code in case fetch api req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      // route user to homepage (root route)
      router.push("/");
    } catch (error) {
      setMessage("Failed to save product");
    }
  };

  return (
    <>
      <form>
        <label htmlFor="name">Pre-Workout Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="brand">Brand:</label>
        <input type="text" id="brand" name="brand" required />
        <label htmlFor="benefits">Benefits:</label>
        <input type="text" id="benefits" name="benefits" required />
        <label htmlFor="caffeine">Caffeine Per Serving:</label>
        <input type="number" id="caffeine" name="caffeine" required />
        <input type="radio" id="openLabel" name="label" required />
        <label htmlFor="label">Open Label</label>
        <input type="radio" id="proprietaryBlend" name="label" required />
        <label htmlFor="proprietaryBlend">Proprietary Blend</label>
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
