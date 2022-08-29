export async function load() {
  const res = fetch("https://cms.sghomedecor.lv/api/products");
  const products = res.json();
  return {
    products,
  };
}
