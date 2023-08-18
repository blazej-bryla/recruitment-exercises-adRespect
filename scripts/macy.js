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

window.onload = function () {
  const expandButton = document.getElementById('expand-button')
  const gradientElement = document.getElementById('gradient')
  const additionalImagesCount = 9

  expandButton.addEventListener('click', () => {
    const macyContainer = document.querySelector('.macy')

    for (let i = 0; i < additionalImagesCount; i++) {
      const aElement = document.createElement('a')
      aElement.href = `images/realizations/realization-${i + 1}.webp`
      aElement.className = 'macy-item'
      aElement.setAttribute('data-caption', `Podpis do zdjęcia ${i + 1}`)
      const img = document.createElement('img')
      img.src = `images/realizations/realization-${i + 1}.webp`
      img.alt = `zdjecie: ${i + 1}`
      aElement.appendChild(img)

      macyContainer.appendChild(aElement)
    }

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
