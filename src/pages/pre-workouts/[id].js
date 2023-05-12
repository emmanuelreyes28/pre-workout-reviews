import { useRouter } from "next/router";
import ProductDetails from "components/ProductDetails";
import Layout from "components/Layout";

export default function PreWorkout() {
  const router = useRouter();
  const { id } = router.query; //grab the document id from url and pass it as prop
  return (
    <>
      <Layout>
        <ProductDetails productId={id} />
      </Layout>
    </>
  );
}
