let carts = document.querySelectorAll('.add-cart');

let products = [
    {
    name: 'red t',
    tag: 'rshirt',
    price: 10,
    inCart: 0
    },
    {
        name: 'black t',
        tag: 'bshirt',
        price: 15,
        inCart: 0
        },
        {
            name: 'blue t',
            tag: 'bbshirt',
            price: 20,
            inCart: 0
            }
]

for ( let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', ()=> {
        cartNumbers();
    })
}

function onLoadCartNumbes() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('.cart span').textContent =productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
 
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers +1;
    }
    else{
        localStorage.setItem('cartNumbers',  1);
        document.querySelector('.cart span').textContent =1;
    }
    
}

onLoadCartNumbes();





















