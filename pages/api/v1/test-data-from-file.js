import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json");
  //console.log(jsonDirectory);
  console.log(process.cwd());

  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/entity-data.json",
    "utf8"
  );

  // const fileContents = await fs.readFile("/entity-data.json", "utf8");
  const data = JSON.parse(fileContents);

  //Return the content of the data file in json format
  res.status(200).json(data);
}

// DB PASS 3DyptFL3eNGIrcPe
// DB user admin
// DB_URI = mongodb+srv://admin:<password>@cluster0.cq0tbow.mongodb.net/?retryWrites=true&w=majority
