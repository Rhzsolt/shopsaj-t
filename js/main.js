/* Product
Create
Read
Update
Delete*/


/*read*/
var state ={
    products:[{
        id:uuidv4(),
        name:'Trappista',
        price:1500,
        isInStock:false,
    
    },

    {   id:uuidv4(),
        name:'Edami',
        price:2500,
        isInStock:true,
    },

    {   id:uuidv4(),
        name:'Gouda',
        price:3500,
        isInStock:true,
    },],
    editedId :''
}
  


function renderEditProducts(){

  if(state.editedId === ''){

    document.getElementById('edit-product').innerHTML = '';
    return;
    
  }
  var talProduct;

  for(var product of state.products){

    if(product.id === state.editedId){
        talProduct = product;break
    }
  }

 var editFormHTML =`<form id="update-product" class="p-5">
 <label class="w-100">
  Név:
  <input class="form-control" type="text" name="name" value="${talProduct.name}">
   </label>
 <label class="w-100">
  Ára:
  <input class="form-control" type="number" name="price" value = "${talProduct.price}">
 </label>
 <label class="w-100">
 Elérhető?
  <input class="form-control" type="checkbox" name="isInStock" ${talProduct.isInStock ? 'checked' : ''}> 
 </label>
 <button class="btn btn-primary" type="submit">Küldés</button>
 </form>
 ` 

 document.getElementById('edit-product').innerHTML = editFormHTML;

  document.getElementById('update-product').onsubmit = function(event){

   event.preventDefault()

   var name = event.target.elements.name.value;
   var price = Number(event.target.elements.price.value);
   var isInStock = event.target.elements.isInStock.checked;

   var talindex;

   for( var i = 0; i< state.products.length; i++) {
    if( state.products[i].id === state.editedId){talindex = i; break;}
   }

   state.products[talindex]={

    id:state.editedId,
    name:name,
    price:price,
    isInStock:isInStock,
   }
   state.editedId = '';
   renderProducts();
   renderEditProducts();
 } 
}


function renderProducts() {
   var productHTML = '';

    for ( var product of state.products){

    productHTML +=
    `
   <div class ="card ${product.isInStock ? '' : 'bg-primary'} ">
   <p>${product.name}</p>
   <p>${product.price}</p>
   <button class =" btn btn-warning editbut mb-2" data-butid="${product.id}">Szerkesztés</button>
   <button class = " btn btn-danger deletebut" data-butid="${product.id}">Törlés</button>
   </div>
   `}
   document.getElementById("product-list-component").innerHTML = productHTML;  

   for( var edtbutt of document.querySelectorAll('.editbut'))

   {
     edtbutt.onclick = function(event){
       var edbtn = event.target.dataset.butid;
      

       state.editedId = edbtn;
       renderEditProducts()
       
     }
   }

  for( var butt of document.querySelectorAll('.deletebut')){
       
butt.onclick = function(event){
   var id = event.target.dataset.butid;

   var talindex;

  for( var i = 0; i< state.products.length; i++) {
    if( state.products[i].id === id){talindex = i; break;}
  }
  state.products.splice(talindex,1);

  renderProducts();
}   }   };







 
document.getElementById("create-product").onsubmit = function(event){

  event.preventDefault()

  var name = event.target.elements.name.value;
  var price = Number(event.target.elements.price.value);
  var isInStock = event.target.elements.isInStock.checked;

  state.products.push({
    id:uuidv4(),
    name:name,
    price:price,
    isInStock:isInStock,
  })
  renderProducts();
}




 window.onload = renderProducts();


 function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}



 