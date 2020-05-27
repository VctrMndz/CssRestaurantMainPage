const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

//cuando le doy al menu se activa la open class
menuToggler.addEventListener('click', function(){
    body.classList.toggle('open')
})
