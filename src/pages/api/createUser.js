import dbConnect from "lib/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;
  console.log("connecting to mongodb");
  await dbConnect();
  console.log("connected to mongodb");
  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log("creating document");
        console.log(req.body);
        const user = await User.create(req.body); // create a new model in db
        console.log("document successfully created");
        res.status(201).json({ success: true, data: user });
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
