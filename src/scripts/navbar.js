// eslint-disable-next-line no-unused-vars
const openMenu = () => {
  const navbar = document.querySelector('#navigation-bar')
  const root = document.documentElement
  const searchbar = document.querySelector('#searchbar')

  if (navbar.classList.contains('topnav')) {
    navbar.classList.remove('topnav')
    root.classList.add('overflow-hidden')
    searchbar.classList.add('hidden')
    navbar.classList.add('mobile')
  } else {
    navbar.classList.add('topnav')
    root.classList.remove('overflow-hidden')
    searchbar.classList.remove('hidden')
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
