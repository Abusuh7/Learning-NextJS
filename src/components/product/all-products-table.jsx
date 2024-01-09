
// Import the required module
import { Add } from "@mui/icons-material";
import AllProductTableRow from "./all-products-table-row.jsx";

const AllProductTable = ({ products }) => {

  const handleClick = () => {
    window.location.href = "/products/new";
  }

  return (
    <div style={{ margin: "20px" }}>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h1>All Products</h1>
        <button onClick={() => handleClick()} style={{padding: "10px"}}>
          <Add></Add>
        </button>
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
            <AllProductTableRow key={item.id} existingProduct = {item}> </AllProductTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllProductTable;
