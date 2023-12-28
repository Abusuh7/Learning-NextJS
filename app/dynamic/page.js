import Link from "next/link";

async function getStaticProps() {
  const response = await fetch(
    "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
  );
  const data = await response.json();
  return data.products;
}

export default async function Index() {
  const products = await getStaticProps();
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div style={{ margin: "20px", padding: "20px" }} key={product.id}>
          {product.title} - {product.price} <br></br>
          <Link style={{border: "solid black 2px"}} href={`/dynamic/${product.id}`}> View Product</Link>
        </div>
      ))}
    </div>
  );
}
