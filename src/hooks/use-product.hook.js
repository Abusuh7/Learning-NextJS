import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function useProduct(props) {
  const [product, setProduct] = useState(props.product || {});
  const [error, setError] = useState({});
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  

  const router = useRouter();

  const createProduct = async () => {
    try {
      const response = await axios.post("/api/product/addProduct", product);
      console.log(response.data.message);
      if (response.status === 200) {
        setShowSuccessAlert(true);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const updateProduct = async () => {
    try {
      const response = await axios.post("/api/product/updateProduct", product);
      console.log(response.data.message);
      if (response.status === 200) {
        setShowSuccessAlert(true);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async () => {
    try {
      const response = await axios.post("/api/product/deleteProduct", {
        id: product.id,
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    //TODO: Form Validation ie. Schema
    const err = validate();
    if (Object.keys(err).length !== 0) {
      setError(err);
      return;
    }

    await createProduct();
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    //TODO: Form Validation ie. Schema
    //do the validation here
    const err = validate();
    if (Object.keys(err).length !== 0) {
      setError(err);
      return;
    }
    await updateProduct();
  };

  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    //Form Validation ie. Schema
    await deleteProduct();
  };

  //validation 
  const validate = () => {
    let err = {};
    if (!product.title) {
      err.name = "Name is required";
    }
    if (!product.description) {
      err.description = "Description is required";
    }
    if (!product.price) {
      err.price = "Price is required";
    }
    return err;
  }

  const handleProductRoute = () => {
    router.push(`/products/${product.id}`);
  };

  const resetSuccessAlert = () => {
    setShowSuccessAlert(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return {
    product,
    error,
    showSuccessAlert,
    resetSuccessAlert,
    handleCreateProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    handleInputChange,
    handleProductRoute,
  };
}
