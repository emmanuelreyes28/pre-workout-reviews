import dbConnect from "lib/dbConnect";
import Product from "models/Product";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const { id } = req.query; // get the product ID from the request query
        const product = await Product.findById(id); // find the product by ID
        if (!product) {
          // if the product is not found, return a 404 response
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: product });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const { id } = req.query;
        const product = await Product.findById(id).exec();
        //console.log(req.body);
        //const product = await Product.findById(id);
        if (!product) {
          // if the product is not found, return a 404 response
          return res.status(404).json({ success: false });
        }

        // create new review object
        const newReview = {
          user,
          content,
          rating,
          helpfulCount: 0,
        };

        // add the new review to the product's reviews array
        product.reviews.push(newReview);

        // calculate the overall and taste rating based on the new review
        const numReviews = product.reviews.length;
        const overallRating =
          product.reviews.reduce((sum, review) => sum + review.rating, 0) /
          numReviews;
        const tasteRating =
          product.reviews.reduct(
            (sum, review) => sum + review.rating * 0.7,
            0
          ) / numReviews;

        // update the product's overall and taste rating
        product.overallRating = overallRating;
        product.tasteRating = tasteRating;

        // save the updated product to the database
        await product.save();

        res.status(201).json({ success: true, data: product });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
