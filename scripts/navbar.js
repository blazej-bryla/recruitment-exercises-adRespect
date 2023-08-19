function openMenu() {
  const navbar = document.querySelector('#navigation-bar')
  const root = document.documentElement

  if (navbar.classList.contains('topnav')) {
    navbar.classList.remove('topnav')
    root.classList.add('overflow-hidden')

    navbar.classList.add('mobile')
  } else {
    navbar.classList.add('topnav')
    root.classList.remove('overflow-hidden')

    navbar.classList.remove('mobile')
  }
}

function closeMenu() {
  const navbar = document.querySelector('#navigation-bar')
  const root = document.documentElement

  if (navbar.classList.contains('mobile')) {
    navbar.classList.add('topnav')
    root.classList.remove('overflow-hidden')
    menuIcon.classList.remove('change')

    navbar.classList.remove('mobile')
  }
}

const toggleMenu = document.querySelector('#toggleMenu')
toggleMenu.addEventListener('click', openMenu)

const menuItems = document.querySelectorAll('.menuItem')
menuItems.forEach((item) => {
  item.addEventListener('click', closeMenu)
})

const menuIcon = document.querySelector('.menu-button')
function changeMenu() {
  menuIcon.classList.toggle('change')
}

menuIcon.addEventListener('click', changeMenu)
