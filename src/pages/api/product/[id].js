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
  }
}
