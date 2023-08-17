// eslint-disable-next-line no-unused-vars
const openMenu = () => {
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

// eslint-disable-next-line no-unused-vars
const openDropdown = () => {
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

// eslint-disable-next-line no-unused-vars
const showSearchbar = () => {
  if (searchInput.classList.contains('hidden')) {
    searchInput.classList.add('flex')
    searchInput.classList.remove('hidden')
  } else {
    searchInput.classList.add('hidden')
    searchInput.classList.remove('flex')
  }
}
