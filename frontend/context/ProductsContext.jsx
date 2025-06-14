import { createContext, useContext, useState } from "react";
import axios from "axios";
import { server } from "../src/main";

const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setProductsLoading(true);
      const { data } = await axios.get(`${server}/api/v1/product`);
      setProducts(data.products);
    } catch (err) {
    } finally {
      setProductsLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        productsLoading,
        fetchProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const ProductState = () => {
  return useContext(ProductContext);
};
