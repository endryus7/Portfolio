let show = true

const menucontent = document.querySelector('.header')
const menuhamburger = menucontent.querySelector('.mobile_menu')

menuhamburger.addEventListener('click', () => {
    menucontent.classList.toggle('on', show)
    show =! show
})