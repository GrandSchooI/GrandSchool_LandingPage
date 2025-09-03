// import Swiper JS
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  modules: [Pagination],
});
