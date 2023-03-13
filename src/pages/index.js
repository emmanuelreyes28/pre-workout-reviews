import Head from "next/head";
import dbConnect from "lib/dbConnect";
import Product from "models/Product";
import Image from "next/image";
import Card from "components/Card";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Pre-Workout Reviews</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-3xl font-bold underline text-red-900">
          Pre-Workouts
        </h1>
        <ul>
          {products.map((product, index) => (
            <Card key={product._id} product={product} />
          ))}
          {/*{products.map((product, index) => (
             <li key={product._id} id={index}>
               <Image src={product.image} alt="pre-workout" /> 
              <h2>{product.productName}</h2>
              <h3>{product.brand}</h3>
              <p>{product.benefits}</p>
              <p>{product.caffeinePerScoop}mg</p>
              <div>
                {product.openLabel ? (
                  <p>Open Label</p>
                ) : (
                  <p>Proprietary Blend</p>
                )}
              </div>
              <p>{product.tasteRating}/5</p>
              <p>{product.overallRating}/5</p>
              <p>{product.description}</p>
              <ul>
                {product.reviews.map((review, index) => (
                  <li key={review.index} id={index}>
                    <p>{review.user}</p>
                    <p>{review.content}</p>
                    <p>{review.rating}/5</p>
                    <p>{review.helpfulCount}</p>
                  </li>
                ))}
              </ul> 
            </li>
          ))}*/}
        </ul>
      </div>
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
