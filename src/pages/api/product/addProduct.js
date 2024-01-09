// pages/api/addProduct.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const newProduct = req.body;

    // Read the JSON file
    const filePath = path.join(process.cwd(), "public/products.json");
    const fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData);

    //get the last id and increment it by 1
    const lastestlength = data.products.length;
    const lastestId = data.products[lastestlength - 1].id;
    const newId = lastestId + 1;

    // Add the new id to the new product
    newProduct.id = newId;

    // Add the new product
    data.products.push(newProduct);

    // Write the updated data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(200).json({ message: "New product added" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
