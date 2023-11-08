// import mongo
import { connectToDatabase } from "@/mongo";

export default async function handler(req, res) {
  // get tag param from url
  const { tag } = req.query;

  if (req.method === "GET") {
    const client = await connectToDatabase();
    let data;
    // get collection Campaigns from mongo connectToDatabase
    try {
      const db = client.db("help-ukraine-hub");
      const campaignsCollection = db.collection("Campaigns");

      //filter by more than one tag when tag is an array
      if (Array.isArray(tag)) {
        data = await campaignsCollection
          .find({ tags: { $in: tag }, verified: true })
          .sort({ featured: -1 })
          .toArray();
      } else if (tag) {
        // filter by tags if tag is provided
        data = await campaignsCollection
          .find({ tags: tag, verified: true })
          .sort({ featured: -1 })
          .toArray();
      } else {
        // get all campaigns from mongo
        data = await campaignsCollection.find({ verified: true }).toArray();
      }
    } catch (error) {
      console.error("error ", error);
    }
    //Return the content of the data file in json format
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    //const campaign = JSON.parse(req.body);
    const campaign = req.body;

    console.log(typeof req.body);

    console.log(campaign);
    const client = await connectToDatabase();
    const db = client.db("help-ukraine-hub");
    const campaignsCollection = db.collection("Campaigns");

    const result = await campaignsCollection.insertOne(campaign);

    return res.status(200).json(campaign);
  }

  //  Delete method that deletes all unverified campaigns
  if (req.method === "DELETE") {
    const client = await connectToDatabase();
    const db = client.db("help-ukraine-hub");
    const campaignsCollection = db.collection("Campaigns");

    const result = await campaignsCollection.deleteMany({ verified: false });

    return res.status(200).json(result);
  }

  res.status(405).json({ message: "Method not allowed" });
}
