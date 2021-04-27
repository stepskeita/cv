const toTop = document.querySelector('.to-top')

document.addEventListener('DOMContentLoaded', () => {
    
    window.addEventListener('scroll', showArrow);
});

function showArrow(e) {
    if(window.scrollY > 150) 
    {
        toTop.style.visibility = 'visible'
    }
    else 
    {
        toTop.style.visibility = 'hidden'

    }
}