import { useRouter } from "next/router";
import ProductDetails from "components/ProductDetails";
// import dbConnect from "lib/dbConnect";
// import Product from "models/Product";
// import dbConnect from "lib/dbConnect";

export default function PreWorkout() {
  const router = useRouter();
  const { id } = router.query; //grab the document id from url and pass it as prop
  return (
    <>
      <h1>Unique Pre-Workout Product</h1>
      <ProductDetails productId={id} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   try {
//     const { id } = context.query;
//     console.log(id);
//     await dbConnect();
//     const pre = await Product.findById(id);
//     return { props: { pre: JSON.parse(JSON.stringify(pre)) } };
//   } catch (error) {
//     console.error(error);
//   }
// }
