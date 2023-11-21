let OpnShopping = document.querySelector(".shopping");
let clsShoppind = document.querySelector(".closeShopping");
let lst = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let quantity = document.querySelector(".quantity")
let body = document.querySelector("body");
let total = document.querySelector(".total");

OpnShopping.addEventListener('click',function(){
    body.classList.add('active');
})
clsShoppind.addEventListener('click',function(){
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'Product 1',
        images:  '3.png',
        price: 60
    },
        {
            id: 2,
            name: 'Product 2',
            images: '3.png',
            price: 250
        },
        {
            id: 3,
            name: 'Product 3',
            images: '3.png',
            price: 300
        },
        {
            id: 4,
            name: 'Product 4',
            images: '3.png',
            price: 80
        },
        {
            id: 5,
            name: 'Product 5',
            images: '3.png',
            price: 150
        },
        {
            id: 6,
            name: 'Product 6',
            images: '3.png',
            price: 650
        },
];
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
           <img src="images/${value.images}"/>
           <div class ="title">${value.name}</div>
           <div class ="price">${value.price.toLocaleString()}</div>
           <button onClick="addToCard(${key})">Add to Card</button>

        `;
          lst.appendChild(newDiv);
    })
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
         let newDiv = document.createElement('li');
        newDiv.innerHTML = `
        <div> <img src="images/${value.images}"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>
        <button onClick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
        <div class= "count">${value.quantity}</div>
        <button onClick="changeQuantity(${key},${value.quantity + 1})">+</button>
      </div>
      `;
        listCard.appendChild(newDiv);
     }
    
    })
total.innerText = totalPrice.toLocaleString();
    quantity.innerHTML = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
      delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}



