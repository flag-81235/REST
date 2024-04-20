import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import productsNetwork from "../services/productsNetwork";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    productsNetwork.getProducts().then(function (result) {
      setProducts(result);
    });
  }, []);

  return (
    <>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </>
  );
}

export default ProductList;
