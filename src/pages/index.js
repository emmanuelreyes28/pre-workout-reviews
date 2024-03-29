import Head from "next/head";
import dbConnect from "lib/dbConnect";
import Product from "models/Product";
import ProductCard from "components/ProductCard";
import Link from "next/link";
import Layout from "components/Layout";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Pre-Workout Reviews</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto my-8 px-4">
          <div>
            <div className="grid gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {products.map((product, index) => (
                <Link
                  key={product._id}
                  href={`pre-workouts/${product._id}`}
                  className="hover:scale-105"
                >
                  <ProductCard key={product._id} product={product} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    await dbConnect();
    const products = await Product.find({}); // grab all pre-workout products
    return { props: { products: JSON.parse(JSON.stringify(products)) } };
  } catch (error) {
    console.error(error);
    // return empty array to ensure app doesnt crash and provides a fallback for rendering the page
    return { props: { products: [] } };
  }
}
