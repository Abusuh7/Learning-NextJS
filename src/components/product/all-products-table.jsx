// Import the required module
import { Add } from "@mui/icons-material";
import AllProductTableRow from "./all-products-table-row.jsx";
import useProduct from "@/hooks/use-product.hook.js";
import * as React from "react";
import AlertMessage from "./alert-message.jsx";

const AllProductTable = ({ products }) => {
  const {
    product,
    error,
    showSuccessAlert,
    handleDeleteProduct,
    handleProductRoute,
    resetSuccessAlert,
  } = useProduct({
    product: products,
  });
  const handleClick = () => {
    window.location.href = "/products/new";
  };

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

  return (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>All Products</h1>
        <button onClick={() => handleClick()} style={{ padding: "10px" }}>
          <Add></Add>
        </button>
        {showSuccessAlert && (
          <AlertMessage type="success" message={showSuccessAlert} />
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {products.products.map((item) => (
            <AllProductTableRow key={item.id} existingProduct={item}>
              {" "}
            </AllProductTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProductTable;
