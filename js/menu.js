
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-container');
const dropdowns = document.querySelectorAll('.dropdown > div');
const subDropdowns = document.querySelectorAll('.sub-dropdown > div');


let menuOpen = false;


menuBtn.addEventListener('click', ()=>{

    menu.classList.toggle('mega-menu-show');

    if(menuOpen===false){

        menuBtn.innerHTML=`
        <span class="material-symbols-outlined">
            close
        </span>
        `;

        menuOpen = true;
    }
    else{

        menuBtn.innerHTML=`
        <span class="material-symbols-outlined">
            menu
        </span>
        `;

        menuOpen = false;
    }
});


dropdowns.forEach(dropdown=>{

    dropdown.addEventListener("click", (e)=>{

        dropdown.nextElementSibling.classList.toggle('menu-show');

        dropdown.lastElementChild.classList.toggle('icon-rotated');
    });
});


subDropdowns.forEach(subDropdown=>{

    subDropdown.addEventListener('click', (e)=>{

        subDropdown.nextElementSibling.classList.toggle('sub-menu-show');

        subDropdown.lastElementChild.classList.toggle('icon-rotated');
    });
});



// document.addEventListener("contextmenu", function(e){
//     e.preventDefault();
// });

document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};