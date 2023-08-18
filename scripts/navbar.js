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

    navbar.classList.remove('mobile')
  }
}

const searchInput = document.querySelector('#searchInput')

function showSearchbar() {
  if (searchInput.classList.contains('hidden')) {
    searchInput.classList.add('flex')
    searchInput.classList.remove('hidden')
  } else {
    searchInput.classList.add('hidden')
    searchInput.classList.remove('flex')
  }
}

const toggleMenu = document.querySelector('#toggleMenu')
toggleMenu.addEventListener('click', openMenu)

const toggleSearchbar = document.querySelector('#toggleSearchbar')
toggleSearchbar.addEventListener('click', showSearchbar)

const menuItems = document.querySelectorAll('.menuItem')
menuItems.forEach((item) => {
  item.addEventListener('click', closeMenu)
})
