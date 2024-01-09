import NewProductForm from '../../components/product/new-product.jsx';

export default function NewProductPage() {
  return (
    <div>
      <h1>New Product</h1>
      <NewProductForm />
    </div>
  );
}

export const getServerSideProps = async () => {
    return { props: {} };
    }