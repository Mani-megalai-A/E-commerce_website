const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// //cart open close
// let cartIcon=document.querySelector("#cart-icon");
// let cart=document.querySelector("");
// let closeCart=document.querySelector("#close-cart");

// // open cart
// cartIcon.onclick = () => {
//     cart.classList.add("active")
// }
