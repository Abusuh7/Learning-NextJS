// pages/api/updateProduct.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const updatedProduct = req.body;

    // Read the JSON file
    const filePath = path.join(process.cwd(), 'public/products.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);

    // Find the product with the specified ID and update its properties
    const productIndex = data.products.findIndex(item => item.id === updatedProduct.id);
    if (productIndex !== -1) {
      data.products[productIndex] = updatedProduct;
    }

    // Write the updated data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(200).json({ message: `Product with id ${updatedProduct.id} updated` });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}