import { Visibility, Delete, Edit } from "@mui/icons-material";
import useProduct from "@/hooks/use-product.hook.js";
import * as React from "react";
import AlertMessage from "./alert-message";

const AllProductsTableRow = ({ existingProduct }) => {
  const {
    product,
    error,
    showSuccessAlert,
    handleDeleteProduct,
    handleProductRoute,
    resetSuccessAlert,
  } = useProduct({
    product: existingProduct,
  });

  // Alert fade
  React.useEffect(() => {
    let fadeTimeout;

    if (showSuccessAlert) {
      fadeTimeout = setTimeout(() => {
        resetSuccessAlert(); // Call the function to reset the success alert state
        window.location.reload();
      }, 1000); // Adjust the timeout duration as needed
    }

    return () => clearTimeout(fadeTimeout);
  }, [showSuccessAlert, resetSuccessAlert]);

  return (
    
      <tr>
        <td>{product.id}</td>
        <td>
          <img
            src={product.thumbnail}
            alt="image"
            style={{ width: "100px", height: "100px" }}
          />
        </td>
        <td>{product.title}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <button onClick={handleProductRoute}>
            <Visibility></Visibility>
          </button>
          <button onClick={handleDeleteProduct}>
            <Delete></Delete>
          </button>
          <div>
            {showSuccessAlert && (
              <AlertMessage type="success" message="Deleted" />
            )
            }

          </div>
        </td>
      </tr>
  );
};

export default AllProductsTableRow;
