import Macy from 'macy'

import baguetteBox from 'baguettebox.js'

import 'baguettebox.js/dist/baguetteBox.css'

const macyInstance = Macy({
  container: '.macy',
  trueOrder: false,
  waitForImages: false,
  margin: 24,
  columns: 3,
  breakAt: {
    1200: 3,
    1023: 2,
    520: 1
  }
})

const realizationList = [
  {
    href: 'images/realizations/realization-1.webp',
    alt: 'realizacja 1',
    width: 451,
    height: 601
  },
  {
    href: 'images/realizations/realization-2.webp',
    alt: 'realizacja 2',
    width: 452,
    height: 388
  },
  {
    href: 'images/realizations/realization-3.webp',
    alt: 'realizacja 3',
    width: 451,
    height: 451
  },
  {
    href: 'images/realizations/realization-4.webp',
    alt: 'realizacja 4',
    width: 451,
    height: 452
  },
  {
    href: 'images/realizations/realization-5.webp',
    alt: 'realizacja 5',
    width: 451,
    height: 452
  },
  {
    href: 'images/realizations/realization-6.webp',
    alt: 'realizacja 6',
    width: 451,
    height: 603
  },
  {
    href: 'images/realizations/realization-7.webp',
    alt: 'realizacja 7',
    width: 451,
    height: 388
  },
  {
    href: 'images/realizations/realization-8.webp',
    alt: 'realizacja 8',
    width: 452,
    height: 601
  },
  {
    href: 'images/realizations/realization-9.webp',
    alt: 'realizacja 9',
    width: 451,
    height: 388
  }
]

window.onload = function () {
  const expandButton = document.getElementById('expand-button')
  const gradientElement = document.getElementById('gradient')

  expandButton.addEventListener('click', () => {
    const macyContainer = document.querySelector('.macy')

    realizationList.map((item, i) => {
      const aElement = document.createElement('a')
      aElement.href = item.href
      aElement.title = `Odnośnik od zdjęcia ${i + 1}`
      aElement.classList.add('macy-item')
      aElement.setAttribute('data-caption', `Podpis do zdjęcia ${i + 1}`)
      const img = document.createElement('img')
      img.src = item.href
      img.alt = item.alt
      img.width = item.width
      img.height = item.height
      aElement.appendChild(img)

      macyContainer.appendChild(aElement)
    })

    macyInstance.recalculate()

    macyInstance.runOnImageLoad(function () {
      macyInstance.recalculate(true)
    }, true)

    expandButton.style.display = 'none'
    gradientElement.style.display = 'none'

    baguetteBox.run('.macy', {
      buttons: 'auto',
      captions: function (element) {
        return element.getAttribute('data-caption')
      }
    })
  })

  baguetteBox.run('.macy', {
    captions: function (element) {
      return element.getAttribute('data-caption')
    }
  })
}
