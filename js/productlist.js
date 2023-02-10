const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if (category) {
  fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
    .then((res) => res.json())
    .then(showProducts);
} else {
  fetch("https://kea-alt-del.dk/t7/api/products")
    .then((res) => res.json())
    .then(showProducts);
}

/* 
fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);
*/
function showProducts(products) {
  //looper og kalder showprodukt
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  //fange template
  const template = document.querySelector("#smallProductTemplate").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".subtle").textContent = product.articletype + " | " + product.brandname;
  copy.querySelector("img").src = "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
  copy.querySelector("img").alt = product.productdisplayname;
  copy.querySelector(".price").textContent = product.price + " DKK";
  copy.querySelector(".discounted").textContent = product.discount;

  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  copy.querySelector(".read-more").setAttribute("href", `product.html?id=${product.id}`);

  //appende
  document.querySelector("main").appendChild(copy);
}

/*
 <article class="smallProduct onSale">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/1164.webp" alt="Blue T20">
            <h3>Blue T20 Indian Cricket Jersey</h3>
            <p class="subtle">Tshirts | Nike</p>
            <p class="price"><span>Prev.</span> DKK 1595,-</p>
            <div class="disxcounted">
                <p>Now DKK 1560,-</p>
                <p>-34%</p>
            </div>
            <a href="product.html">Read More</a>
        </article>
        */

/*

id	1164
gender	"Men"
category	"Apparel"
subcategory	"Topwear"
articletype	"Tshirts"
season	"Winter"
productionyear	2015
usagetype	"Sports"
productdisplayname	"Blue T20 Indian Cricket Jersey"
price	1595
discount	28
brandname	"Nike"
soldout	1
*/
