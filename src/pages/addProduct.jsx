import Form from "components/Form";

const NewProduct = () => {
  const productForm = {
    image: "",
    productName: "",
    brand: "",
    benefits: [""],
    caffeinePerScoop: "",
    openLabel: "",
  };

  return <Form productForm={productForm} />;
};

export default NewProduct;
