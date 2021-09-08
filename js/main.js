/* Product
Create
Read
Update
Delete*/


/*read*/
var state ={
    products:[{
        name:'Trappista',
        price:1500,
        isInStock:false,
    
    },

    {
        name:'Edami',
        price:2500,
        isInStock:true,
    },

    {
        name:'Gouda',
        price:3500,
        isInStock:true,
    },]
}
console.log(state.products[1])
function renderProducts() {
   var productHTML = '';

for ( var product of state.products){
    

    productHTML +=`
    <div class ="card ${product.isInStock ? '' : 'bg-danger'}">
   <p>${product.name}</p>
   <p>${product.price}</p> 
   </div>
    `;
}

document.getElementById("product-list-component").innerHTML = productHTML;

}
window.onload = renderProducts();

document.getElementById("create-product").onsubmit = function (event) {
    event.preventDefault();

    var price=event.target.elements.price.value;
    var name = event.target.elements.name.value;
    var isInStock = event.target.elements.isInStock.checked;

state.products.push({
    name:name,
    price:price,
    isInStock:isInStock});

    renderProducts();

}
   
