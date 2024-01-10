import NewProductForm from '../../components/product/new-product.jsx';

export default function NewProductPage() {
  return (
    <div>
      <NewProductForm />
    </div>
  );
}

export const getServerSideProps = async () => {
    return { props: {} };
    }