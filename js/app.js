const aside = document.querySelector(".aside");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const clearCart = document.querySelector(".clear-cart");
const single = document.querySelector(".single");
const goBack = document.querySelector('.go-back');
function init(){
    closeBtn.addEventListener("click", closeCart);
    sidebarToggle.addEventListener("click", toggleCart);
}

function toggleCart() {
    aside.classList.toggle("show");
}

function closeCart() {
    aside.classList.remove("show");
}

let addToCarts = document.querySelectorAll('.add-to-cart');

// console.log(addToCarts);

// console.log(addToCarts.length);

// for (let i = 0; i < addToCarts.length; i++) {
//     console.log(addToCarts[i]);
// }

// for (addToCart in addToCarts) {
//     console.log(addToCart);
// }

// for (addToCart of addToCarts) {
//     console.log(addToCart);
// }

// addToCarts.forEach(function(addToCart){
//     console.log(addToCart);
// });


// product-detail

document.addEventListener("DOMContentLoaded", init);

let productDetails = document.querySelectorAll('.product-detail');

// productDetails.forEach(function(element) {
//     element.addEventListener("click", function(){
//         single.classList.add("show-single");
//     });
// });

goBack.addEventListener('click', function(){
    single.classList.remove("show-single");
})


productDetails.forEach(function(element) {
    element.addEventListener("click", function(e){
        
        console.log(e.target.parentNode);
        console.log(e.target.parentNode.parentNode.parentNode.parentNode);
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);

        // let parent = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

        let parent = e.target.closest(".product")
        console.log(parent);

        // description__content--about
        let price = parent.querySelector('.product-price').innerText;
        let name = parent.querySelector('.product-name').innerText;
        let about = `
        <h1>${name}</h1>
            <h2>$${price}</h2>
            <span>get ready to step into a new world</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur hic minus nihil obcaecati, ratione repellendus saepe sint tenetur totam ullam. Accusantium aspernatur ducimus impedit perferendis quisquam repellendus similique ullam vitae!</p>
        `;
        let contentAbout = document.querySelector('.description__content--about');
        contentAbout.innerHTML = about;

        // product__img
        let image = parent.querySelector('.product-img').getAttribute('src');
        document.querySelector('.product__img').innerHTML = `<img src="${image}" alt="">`;
        single.classList.add("show-single");
    });
});


