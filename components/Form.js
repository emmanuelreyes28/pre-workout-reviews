import { useState } from "react";
import { useRouter } from "next/router";

function Form({ formId, productForm }) {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [mesage, setMessage] = useState("");

  const [product, setProduct] = useState({
    image: productForm.image,
    productName: productForm.productName,
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

    if (name === "benefits") {
      // create a copy of the current benefits array
      const newBenefits = [...product.benefits];
      // add the new benefit to the array
      newBenefits[event.target.id] = value;
      // update the product state with the new benefits array
      setProduct((prevValue) => {
        return {
          ...prevValue,
          benefits: newBenefits,
        };
      });
    } else {
      setProduct((prevValue) => {
        return {
          ...prevValue,
          [name]: value,
        };
      });
    }
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
        <label htmlFor="0">Benefit 1:</label>
        <input
          type="text"
          id="0"
          name="benefits"
          value={product.benefits[0]}
          onChange={handleChange}
          required
        />
        <label htmlFor="1">Benefit 2:</label>
        <input
          type="text"
          id="1"
          name="benefits"
          value={product.benefits[1]}
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
        <label>Does pre-workout have an open label?</label>
        <input
          type="radio"
          id="openLabel"
          name="openLabel"
          value={true}
          onChange={handleChange}
          required
        />
        <label htmlFor="openLabel">Yes</label>
        <input
          type="radio"
          id="proprietaryBlend"
          name="openLabel"
          value={false}
          onChange={handleChange}
          required
        />
        <label htmlFor="proprietaryBlend">No</label>
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
