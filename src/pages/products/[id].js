import SingleProductView from '@/components/product/single-product-view.jsx';
import axios from 'axios';
 
const SingleProductPage = ({ product }) =>  {

 return <SingleProductView existingProduct={product}></SingleProductView>
}

export default SingleProductPage;

export const getServerSideProps = async ({ query }) => {
  const { id  } = query;
  const {
    data,
  } = await axios.post(`http://localhost:3000/api/product/${id}`, {});
  return { props: { product: data } };
};
