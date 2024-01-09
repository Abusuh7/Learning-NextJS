// pages/api/deleteProduct.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.body;

    // Read the JSON file
    const filePath = path.join(process.cwd(), 'public/products.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);

    // Delete the item with the specified ID
    data.products = data.products.filter(item => item.id !== id);

    // Write the updated data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(200).json({ message: `Item with id ${id} deleted` });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}