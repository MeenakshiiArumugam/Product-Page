function toggleMoreInfo(element) {
    var allProducts = document.getElementsByClassName('product');
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i] !== element) {
            allProducts[i].classList.remove('active');
        }
    }
    element.classList.toggle('active');
}
function toggleLike(element) {
    element.classList.toggle('liked');
}