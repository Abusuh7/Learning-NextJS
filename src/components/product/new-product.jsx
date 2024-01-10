import useProduct from "@/hooks/use-product.hook.js";
import { useState, useEffect, useRef } from "react";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";
import AlertMessage from "./alert-message.jsx";

export default function NewProduct({ existingProduct }) {
  const {
    product,
    error,
    handleCreateProduct,
    handleInputChange,
    resetSuccessAlert,
    showSuccessAlert,
  } = useProduct({ product: null });

  //get the error from the hook and set it to the state
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      console.log(error);
    }
  }, [error]);

  // Alert fade
  React.useEffect(() => {
    let fadeTimeout;

    if (showSuccessAlert) {
      fadeTimeout = setTimeout(() => {
        resetSuccessAlert(); // Call the function to reset the success alert state
        window.location.reload();
      }, 2000); // Adjust the timeout duration as needed
    }

    return () => clearTimeout(fadeTimeout);
  }, [showSuccessAlert, resetSuccessAlert]);

  return (
    <div>
      <form
        className="product-form"
        onSubmit={handleCreateProduct}
        style={{ marginTop: "30px" }}
      >
        {/* <label htmlFor="title">Title:</label>
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
            </button> */}

        <Typography variant="h6" gutterBottom>
          Add Product
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="title"
              name="title"
              label="Product Model"
              fullWidth
              // autoComplete="given-name"
              variant="standard"
              value={product.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="price"
              name="price"
              label="Price ($)"
              type="number"
              fullWidth
              // autoComplete="family-name"
              variant="standard"
              value={product.price}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="description"
              name="description"
              label="Description"
              fullWidth
              // autoComplete="shipping address-line1"
              variant="standard"
              value={product.description}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        {showSuccessAlert && (
          <AlertMessage type="success" message="Product Added Successfully" />
        )}

        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    </div>
  );
}
