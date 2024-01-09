// pages/api/updateProduct.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const updatedProduct = req.body;

    // Read the JSON file
    const filePath = path.join(process.cwd(), "public/products.json");
    const fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData);

    res.status(200).json(data);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
