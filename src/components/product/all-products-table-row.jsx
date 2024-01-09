import { Visibility, Delete, Edit } from "@mui/icons-material";
import useProduct from "@/hooks/use-product.hook.js";

const AllProductsTableRow = ({ existingProduct }) => {
  const { product, error, handleDeleteProduct, handleProductRoute } = useProduct({
    product: existingProduct,
  });

  return (
    <tr>
      <td>{product.id}</td>
      <td><img src={product.thumbnail} alt="image" style={{width: "100px", height: "100px"}} /></td>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        <button
          onClick={handleProductRoute}
        >
          <Visibility></Visibility>
        </button>
        <button onClick={handleDeleteProduct}>
          <Delete></Delete>
        </button>
      </td>
    </tr>
  );
};

export default AllProductsTableRow;
