
async function getProducts() {
    const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
    const data = await response.json();
    return data.products;
}

async function getSingleProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
}



export default async function Dynamic({params}) {


    const product = await getSingleProduct(params.id);
    // console.log(product);

    return (
        <div>
            <h1>Dynamic Product Page</h1>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
        </div>
    )
}