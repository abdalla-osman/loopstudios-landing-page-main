let navBtn=document.querySelector('.button img');
let navbar=document.querySelector('nav ul')
navBtn.addEventListener('click',()=>{
    navbar.classList.toggle('active')
    if(navbar.className.includes('active')){
        navBtn.src='./assets/images/icon-close.svg' 
        document.body.style.overflow='hidden'      
    }
    else{
        console.log(false);
        navBtn.src='./assets/images/icon-hamburger.svg' 
        document.body.style.overflow='unset' 
    }
});
