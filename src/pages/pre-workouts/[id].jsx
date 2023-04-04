import { useRouter } from "next/router";
import ProductDetails from "components/ProductDetails";

export default function PreWorkout() {
  const router = useRouter();
  const { id } = router.query; //grab the document id from url and pass it as prop
  console.log(id);
  return (
    <>
      <h1>Unique Pre-Workout Product</h1>
      <ProductDetails productId={id} />
    </>
  );
}
