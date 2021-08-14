const toTop = document.querySelector('.to-top')
const closeBtn = document.querySelector('#closeBtn');
const sidenavContainer = document.querySelector('#sidenavContainer');
const sidenavContent = document.querySelector('#sidenavContent');
const toggle = document.querySelector('.toggle')
document.addEventListener('DOMContentLoaded', () => {
    
    window.addEventListener('scroll', showArrow);
    closeBtn.addEventListener('click', closeOnClick)
    sidenavContainer.addEventListener('click', closeOnClick)
    toggle.addEventListener('click', toggleShow)
});

function showArrow(e) {
    if(window.scrollY > 150) 
    {
        toTop.classList.add('show')
    }
    else 
    {
        toTop.classList.remove('show')
    }
}

function toggleShow(e) {
    sidenavContainer.classList.toggle('show')
}

function closeOnClick(e){

    if(!e.target.classList.contains('not-a-closer')) {
        sidenavContainer.classList.remove('show')
    }
}

