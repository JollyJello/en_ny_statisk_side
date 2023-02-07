fetch("https://kea-alt-del.dk/t7/api/products");
.then(res=>res.json())
.then(showProducts)

function showProducts(products){
    //looper og kalder produkt
    .products.forEach(showProduct)
}

function showProduct() {

}
