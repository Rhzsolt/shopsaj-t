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
        isInStock:true,
    
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

function renderProducts() {
   var productHTML = '';

for ( var product of state.products){

    productHTML +=`
    <div class ='card'>
   <p>${product.name}</p>
   <p>${product.price}</p>
   </div>
    `;
}

document.getElementById("product-list-component").innerHTML = productHTML;

}
window.onload = renderProducts();