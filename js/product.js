//https://kea-alt-del.dk/t7/api/products/1525
fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  console.log(product);
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector("img").src = imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
