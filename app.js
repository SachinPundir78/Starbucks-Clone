//const, var,let

const bar = document.querySelector('#bars');
const cross = document.querySelector('#cross');
const nav = document.querySelector('.nav');

bar.addEventListener('click', ()=>{
   bar.style.display = 'none';
   cross.style.display = 'block';
   nav.style.left = '20%';
});

cross.addEventListener('click', ()=>{
    bar.style.display = 'block';
    cross.style.display = 'none';
    nav.style.left = '100%';
});

const arrow = document.querySelectorAll('.arrow');

//Array.forEach(function)

arrow.forEach((e)=>{
    e.addEventListener('click', ()=>{
        var footerlist= e.parentElement.nextElementSibling; //footer list
        
        if(e.classList.contains('temp')){
            e.classList.remove('temp');
            footerlist.style.display = 'none';
            e.style.transform = 'rotate(0deg)';
        }
        else{
            e.classList.add('temp');
            footerlist.style.display = 'block';
            e.style.transform = 'rotate(180deg)';
        }
    });
})

const menuNav = document.querySelector('.menu-nav');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > menuNav.offsetTop){
        menuNav.classList.add('sticky');
    }
    else{
        menuNav.classList.remove('sticky');
    }
});

document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = 'index.html';
});


// rewards section

let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
}
let autoPlay = setInterval(() => {
    next.click();
}, 5000);


// by clicking logo we open the home page

document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = 'index.html';
});

