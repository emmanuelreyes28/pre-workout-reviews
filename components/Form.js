import { useState } from "react";

function Form() {
  const [product, setProduct] = useState({}); //pass in product details

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
        <input type="text" id="brand" name="brand" />
        <label htmlFor="benefits">Benefits:</label>
        <input type="text" id="benefits" name="benefits" />
        <label htmlFor="caffeine">Caffeine Per Serving:</label>
        <input type="number" id="caffeine" name="caffeine" />
        <input type="radio" id="openLabel" name="Open Label" />
        <label htmlFor="openLabel">Open Label</label>
        <input type="radio" id="proprietaryBlend" name="Proprietary Blend" />
        <label htmlFor="proprietaryBlend">Proprietary Blend</label>
      </form>
    </>
  );
}

export default Form;
