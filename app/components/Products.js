export default function Products({title, price}) {
    return (
        <div style={{border: "1px solid black", padding: "20px", margin: "20px"}}>
            <h2>{title}</h2>
            <p>{price}</p>
        </div>
    )
}