export async function load() {
  const response = await fetch("https://cms.sghomedecor.lv/api/products");
  const products = await response.json();
  return {
    data: products.data,
  };
}
