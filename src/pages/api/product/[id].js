// pages/api/updateProduct.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const {
      query: { id },
    } = req;

    // Read the JSON file
    const filePath = path.join(process.cwd(), "public/products.json");
    const fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData);

    const product = data.products.find((item) => item.id == id);
    res.status(200).json(product);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
