const searchbarButton = document.querySelector('#searchbar-button')

function showInputValue() {
  const inputValue = document.querySelector('#searchbar-input').value
  if (!inputValue) {
    alert('Pole wyszukiwarki nie może być puste!')
  } else {
    alert('Wyszukiwarka: ' + inputValue)
  }
}

searchbarButton.addEventListener('click', showInputValue)

const searchbarButtonDesktop = document.querySelector(
  '#searchbar-button-desktop'
)

function showInputValueDesktop() {
  const inputValue = document.querySelector('#searchbar-input-desktop').value
  if (!inputValue) {
    alert('Pole wyszukiwarki nie może być puste!')
  } else {
    alert('Wyszukiwarka: ' + inputValue)
  }
}

searchbarButtonDesktop.addEventListener('click', showInputValueDesktop)
