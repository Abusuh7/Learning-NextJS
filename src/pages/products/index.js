import AllProductTable from "@/components/product/all-products-table";
import axios from "axios";

const ProductPage = ({ products }) => {
  return (
    <div >
      <h1 style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>Product List</h1>
      <AllProductTable products={products} />
    </div>
  );
};

export default ProductPage;

export const getServerSideProps = async () => {
  const {
    data,
  } = await axios.post("http://localhost:3000/api/product/all", {});
  return { props: { products: data } };
};
