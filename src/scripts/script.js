const menu = document.querySelector('.menu_icon');
const menu_list = document.querySelector('.mobile_menu');
menu.addEventListener('click' , ()=> {
    menu_list.classList.toggle('hidden')
})