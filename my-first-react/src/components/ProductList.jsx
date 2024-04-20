import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import productsNetwork from "../services/productsNetwork";

function ProductList() {
  async function addHandler() {
    const product = {
      title: "Facas Ginsu",
      price: 35.5,
      description: "corta tudo!!!!!",
      image: "https://i.pravatar.cc",
      category: "stuff",
    };

    try {
      const result = await productsNetwork.postProduct(product);
      if (result) {
        alert("Inserido com sucesso!");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong! Please contact the site administrator");
    }
  }

  const [products, setProducts] = useState([]);

  useEffect(function () {
    productsNetwork.getProducts().then(function (result) {
      setProducts(result);
    });
  }, []);

  return (
    <>
      <button onClick={addHandler}>Add Product</button>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </>
  );
}

export default ProductList;
