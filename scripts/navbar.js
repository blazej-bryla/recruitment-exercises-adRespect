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

function openDropdown() {
  const dropdown = document.querySelector('#dropdown')

  if (dropdown.classList.contains('dropdown')) {
    dropdown.classList.remove('dropdown')
    dropdown.classList.add('dropped')
  } else {
    dropdown.classList.remove('dropped')
    dropdown.classList.add('dropdown')
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

const toggleDropdown = document.querySelector('#toggleDropdown')
toggleDropdown.addEventListener('click', openDropdown)

const toggleMenu = document.querySelector('#toggleMenu')
toggleMenu.addEventListener('click', openMenu)

const toggleSearchbar = document.querySelector('#toggleSearchbar')
toggleSearchbar.addEventListener('click', showSearchbar)
