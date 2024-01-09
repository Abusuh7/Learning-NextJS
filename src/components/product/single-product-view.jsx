import useProduct from "../../hooks/use-product.hook.js";
import { useState, useEffect, useRef } from "react";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Alert } from "@mui/material";

const SingleProductView = ({ existingProduct }) => {
  const {
    product,
    error,
    showSuccessAlert,
    resetSuccessAlert,
    handleCreateProduct,
    handleUpdateProduct,
    handleInputChange,
  } = useProduct({ product: existingProduct });

  // Alert fade
  const [reset, setReset] = React.useState(false);

  // Alert fade
  React.useEffect(() => {
    let fadeTimeout;

    if (showSuccessAlert) {
      fadeTimeout = setTimeout(() => {
        resetSuccessAlert(); // Call the function to reset the success alert state
      }, 2000); // Adjust the timeout duration as needed
    }

    return () => clearTimeout(fadeTimeout);
  }, [showSuccessAlert, resetSuccessAlert]);

  //get the error from the hook and set it to the state
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      console.log(error);
    }
  }, [error]);

  // Image scroll
  const scrollableImagesRef = useRef(null);

  useEffect(() => {
    const scrollableContainer = scrollableImagesRef.current;
    let scrollAmount = 1;

    const handleScroll = () => {
      if (
        scrollAmount >
        scrollableContainer.scrollWidth - scrollableContainer.clientWidth
      ) {
        scrollAmount = 1;
      } else {
        scrollAmount += 1;
      }
      scrollableContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(handleScroll, 50); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    // Your component code
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        gap: "40px",
        margin: "30px",
      }}
    >
      {/* For the images */}
      <div className="grid-container">
        <img
          src={product.thumbnail}
          alt="Large Thumbnail"
          className="thumbnail"
          style={{ width: "700px", height: "500px", marginBottom: "20px" }}
        />

        <div className="scrollable-images" ref={scrollableImagesRef}>
          {product.images.map((image, index) => (
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
              key={index}
              style={{ width: "250px", height: "150px" }}
            />
          ))}
        </div>
      </div>

      {/* For the form */}
      <div>
        <form
          className="product-form"
          onSubmit={existingProduct ? handleUpdateProduct : handleCreateProduct}
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
            style={{ width: "350px", height: "40px" }}
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
          /> */}

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

          {showSuccessAlert && (
            <Alert severity="success" style={{ marginTop: "10px" }}>
              Sucessfully Updated
            </Alert>
          )}

          <button type="submit" className="submit-button">
            {existingProduct ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductView;
