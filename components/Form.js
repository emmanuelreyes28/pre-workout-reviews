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
    postData(product);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Pre-Workout Name:
          </label>
          <input
            type="text"
            id="name"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="block text-gray-700 font-bold mb-2">
            Brand:
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="0" className="block text-gray-700 font-bold mb-2">
            Benefit 1:
          </label>
          <input
            type="text"
            id="0"
            name="benefits"
            value={product.benefits[0]}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="1" className="block text-gray-700 font-bold mb-2">
            Benefit 2:
          </label>
          <input
            type="text"
            id="1"
            name="benefits"
            value={product.benefits[1]}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="2" className="block text-gray-700 font-bold mb-2">
            Benefit 3:
          </label>
          <input
            type="text"
            id="2"
            name="benefits"
            value={product.benefits[2]}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="caffeine"
            className="block text-gray-700 font-bold mb-2"
          >
            Caffeine Per Serving:
          </label>
          <input
            type="number"
            id="caffeine"
            name="caffeinePerScoop"
            value={product.caffeinePerScoop}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Does this pre-workout have an open label?
          </label>
          <div className="block">
            <input
              type="radio"
              id="openLabel"
              name="openLabel"
              value={true}
              onChange={handleChange}
              required
            />
            <label htmlFor="openLabel" className="text-gray-700 font-bold mb-2">
              Yes
            </label>
          </div>
          <div className="block">
            <input
              type="radio"
              id="proprietaryBlend"
              name="openLabel"
              value={false}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="proprietaryBlend"
              className="text-gray-700 font-bold mb-2"
            >
              No
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 hover:bg-gray-700 hover:text-white active:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
