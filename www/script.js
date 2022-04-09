var swiper = new Swiper(".swiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    grabCursor:true,
});

let navbar = document.querySelector('nav');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

