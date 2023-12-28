import Products from "../components/Products";

async function getProducts() {
    const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
    const data = await response.json();
    return data.products;
}

export default async function DisplayProduct() {

    const products = await getProducts();
    console.log(products);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {
                products.map(
                    (product) => (
                        <Products key={product.id} title={product.title} price={product.price} />
                    )
                )
                }
                </ul>
        </div>
    )
}