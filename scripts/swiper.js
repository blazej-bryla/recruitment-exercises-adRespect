import Swiper from 'swiper'
// import Swiper and modules styles
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

new Swiper('.mySwiper', {
  modules: [Navigation, Pagination],
  navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' }
})
