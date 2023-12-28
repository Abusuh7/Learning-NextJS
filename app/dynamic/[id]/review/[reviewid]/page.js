export default function Reviews({params : {id, reviewid}}) {
    return (
        <div>
            <h1>Reviews</h1>
            <h2>Product ID: {id}</h2>
            <h2>Review ID: {reviewid}</h2>
        </div>
    )
}
