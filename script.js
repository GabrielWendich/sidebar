const menuButton = document.querySelector('#menu-button')
const toggleItems = document.querySelectorAll('.opened')
const lis = document.querySelectorAll('li')
const nav = document.querySelector('nav')
const logout = document.querySelector('#user-info')

menuButton.addEventListener('click', () => {
    for(let item of toggleItems) {
        item.classList.toggle('hidden')
    }
    for(let li of lis) {
        li.classList.toggle('altWidth')
    }
    nav.classList.toggle('altNav')
    logout.classList.toggle('altLogout')
})