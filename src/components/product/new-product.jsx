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
            Edit Product
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
                defaultValue={product.title}
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
                defaultValue={product.price}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="brand"
                name="brand"
                label="Brand"
                fullWidth
                // autoComplete="shipping address-line1"
                variant="standard"
                defaultValue={product.brand}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="category"
                name="category"
                label="Category"
                fullWidth
                // autoComplete="shipping address-line2"
                variant="standard"
                defaultValue={product.category}
                onChange={handleInputChange}
                inputProps={{
                  style: { textTransform: "uppercase" }, // This will visually capitalize the input
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="rating"
                name="rating"
                label="Rating"
                fullWidth
                // autoComplete="shipping address-level2"
                variant="standard"
                onChange={handleInputChange}
                defaultValue={product.rating}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="Stock"
                name="Stock"
                label="Stock"
                fullWidth
                variant="standard"
                onChange={handleInputChange}
                defaultValue={product.stock}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                fullWidth
                // autoComplete="shipping postal-code"
                variant="standard"
                onChange={handleInputChange}
                defaultValue={product.description}
                multiline // Enable multiline input
                rows={5} // Set the number of rows (adjust as needed)
                style={{ width: "400px" }}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
                onChange={handleInputChange}
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid> */}
          </Grid>

          <button type="submit" className="submit-button">
            {existingProduct ? "Update" : "Add"}
          </button>
        </form>
        </div>
    );
    }



