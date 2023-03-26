import { useState } from "react";
import { useRouter } from "next/router";

function Form({ formId, productForm }) {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [mesage, setMessage] = useState("");

  const [product, setProduct] = useState({
    image: productForm.image,
    productName: productForm.name, //may need to change this to productForm.productName
    brand: productForm.brand,
    benefits: productForm.benefits,
    caffeinePerScoop: productForm.caffeinePerScoop,
    openLabel: productForm.openLabel,
  });

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

  function handleChange(event) {
    const { name, value } = event.target;

    setProduct((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Pre-Workout Name:</label>
        <input
          type="text"
          id="name"
          name="productName"
          value={product.productName}
          onChange={handleChange}
          required
        />
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          required
        />
        <label htmlFor="benefits">Benefits:</label>
        <input
          type="text"
          id="benefits"
          name="benefits"
          value={product.benefits}
          onChange={handleChange}
          required
        />
        <label htmlFor="caffeine">Caffeine Per Serving:</label>
        <input
          type="number"
          id="caffeine"
          name="caffeinePerScoop"
          value={product.caffeinePerScoop}
          onChange={handleChange}
          required
        />
        {/* change open label to question that determines boolean value */}
        <input
          type="radio"
          id="openLabel"
          name="openLabel"
          value={product.openLabel}
          onChange={handleChange}
          required
        />
        <label htmlFor="label">Open Label</label>
        <input
          type="radio"
          id="proprietaryBlend"
          name="openLabel"
          value={product.openLabel}
          onChange={handleChange}
          required
        />
        <label htmlFor="proprietaryBlend">Proprietary Blend</label>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={product.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
