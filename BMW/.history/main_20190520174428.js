const nav = document.querySelector('nav');
const nav_height = nav.getBoundingClientRect().height
window.addEventListener('scroll', e => {
    let current_scroll = window.scrollY
    if(current_scroll > nav_height) nav.classList.add('float')
    else nav.classList.remove('float')
})