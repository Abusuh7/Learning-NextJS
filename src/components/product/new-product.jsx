import useProduct from "@/hooks/use-product.hook.js";
import { useState, useEffect } from "react";

export default function NewProduct({ existingProduct }) {
    const {
        product,
        error,
        handleCreateProduct,
        handleInputChange,
    } = useProduct({ product: null });
    
    //get the error from the hook and set it to the state
    const [errorMessage, setErrorMessage] = useState({});
    
    useEffect(() => {
        if (error) {
        setErrorMessage(error);
        console.log(error);
        }
    }, [error]);
    
    return (
        <div>
        <form
            className="product-form"
            onSubmit={handleCreateProduct}
        >
            <label htmlFor="title">Title:</label>
            {errorMessage.name && (
            <div
                style={{
                color: "red",
                fontSize: "12px",
                marginBottom: "10px",
                }}
            >
                {errorMessage.name}
            </div>
            )}
            <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleInputChange}
            />
    
            <label htmlFor="description">Description:</label>
            {errorMessage.description && (
            <div
                style={{
                color: "red",
                fontSize: "12px",
                marginBottom: "10px",
                }}
            >
                {errorMessage.description}
            </div>
            )}
            <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            ></textarea>
    
            <label htmlFor="price">Price:</label>
            {errorMessage.price && (
            <div
                style={{
                color: "red",
                fontSize: "12px",
                marginBottom: "10px",
                }}
            >
                {errorMessage.price}
            </div>
            )}
            <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            />
    
            <button type="submit" className="submit-button">
            {existingProduct ? "Update" : "Add"}
            </button>
        </form>
        </div>
    );
    }



