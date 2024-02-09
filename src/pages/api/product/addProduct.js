// pages/api/addProduct.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const newProduct = req.body;

    // Read the JSON file
    // Use try catch to handle errors
    // try {
    //   const filePath = path.join(process.cwd(), "public/products.json");
    //   const fileData = fs.readFileSync(filePath, "utf8");
    //   const data = JSON.parse(fileData);
    // } catch (error) {
    //   // showthe error to the user
    //   console.error(error);
    // }

    try {
      const filePath = path.join(process.cwd(), "public/products.json");
      const fileData = fs.readFileSync(filePath, "utf8");
      console.log("test");
      const data = JSON.parse(fileData);

      // Add the new product
      data.products.push(newProduct);

      // Write the updated data back to the JSON file
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      res.status(200).json({ message: "New product added" });
    } catch (error) {
      //show the error to the user
      //dont console
      res.status(500).json({ message: "Failed to get data" });  //CHECKHERE*******
    }

    // const filePath = path.join(process.cwd(), "public/products.json");
    // const fileData = fs.readFileSync(filePath, "utf8");
    // const data = JSON.parse(fileData);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
