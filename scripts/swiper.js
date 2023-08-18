import Swiper from 'swiper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true
  }
})
