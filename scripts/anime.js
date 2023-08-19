import anime from 'animejs/lib/anime.es'

const searchIcon = document.querySelector('.searchbarIcon')
const searchInput = document.querySelector('.searchbarDesktop')
const searchInputButton = document.querySelector('.searchbar-button-desktop')

let inputExpanded = false

searchIcon.addEventListener('click', () => {
  if (!inputExpanded) {
    anime({
      targets: searchInput,
      width: ['0', '150px'],
      easing: 'easeOutQuad',
      duration: 300,
      complete: () => {
        searchInput.classList.add('border', 'border-green')
      }
    }),
      anime({
        targets: searchInputButton,
        width: ['0', '60px'],
        easing: 'easeOutQuad',
        complete: () => {
          searchInputButton.innerHTML = 'Szukaj'
        },
        duration: 300
      })
  } else {
    anime({
      targets: searchInput,
      width: ['150px', '0'],
      easing: 'easeOutQuad',
      complete: () => {
        searchInput.classList.remove('border', 'border-green')
      },
      duration: 300
    }),
      anime({
        targets: searchInputButton,
        width: ['60px', '0'],
        easing: 'easeOutQuad',
        complete: () => {
          searchInputButton.innerHTML = ''
        },
        duration: 300
      })
  }

  inputExpanded = !inputExpanded
})

const options = {
  rootMargin: '0px',
  threshold: 0.5
}

const offerSection = document.getElementById('offer')
const offerItems = document.querySelectorAll('.offer-item')

const offerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      offerItems.forEach((item, index) => {
        anime({
          targets: item,
          translateX: [-100, 0],
          opacity: 1,
          delay: index * 100,
          easing: 'easeOutQuad',
          duration: 500
        })
      })
      observer.unobserve(offerSection)
    }
  })
}

const offerObserver = new IntersectionObserver(offerCallback, options)
offerObserver.observe(offerSection)

const aboutSection = document.getElementById('about')
const aboutContent = document.querySelector('.about-text')

const aboutCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      anime({
        targets: aboutContent,
        translateY: 0,
        opacity: 1,
        easing: 'easeOutQuad',
        duration: 500
      })
      observer.unobserve(aboutSection)
    }
  })
}

const aboutObserver = new IntersectionObserver(aboutCallback, options)
aboutObserver.observe(aboutSection)

const imageLinks = document.querySelectorAll('.macy-item')

function animateImages(entries, observer) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const link = entry.target
      const delay = index * 10
      anime({
        targets: link,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutQuad',
        duration: 800,
        delay: delay
      })
      observer.unobserve(link)
    }
  })
}

const observer = new IntersectionObserver(animateImages, { threshold: 0.2 })

imageLinks.forEach((link) => {
  observer.observe(link)
})
