const baseDomain = "https://fakestoreapi.com"

async function getProducts() {
    const url = baseDomain + "/products";

    const response = await fetch(url);
    const result = await response.json();

    return result;
  }

  export default {
    getProducts
  }