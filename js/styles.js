const testimonialSwiper = new Swiper('.testimonial-swiper', {
  loop: true,
  // slidesPerView: 3,
  spaceBetween: 30,
  autoPlay: true,
  delay: 1000,

  navigation: {
    nextEl: '.testimonial-swiper-right',
    prevEl: '.testimonial-swiper-left',
  },

  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 20 },
    1200: { slidesPerView: 3 }
  }
});


const tabs = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    content.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");

    document.getElementById(tab.getAttribute("data-tab")).classList.add("active");
  })
});


const pathwayTabs = document.querySelectorAll(".pathway-tab");
const pathwayContent = document.querySelectorAll(".pathway-content");

const nextBtn = document.getElementById("pathway-next");
const prevBtn = document.getElementById("pathway-prev");

let currentIndex = 0;

function updateSwiper() {
  pathwayTabs.forEach(tab => tab.classList.remove("active"));
  pathwayContent.forEach(content => content.classList.remove("active"));

  pathwayTabs[currentIndex].classList.add("active");
  pathwayContent[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % pathwayTabs.length;
  updateSwiper();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + pathwayTabs.length) % pathwayTabs.length;
  updateSwiper();
});

const mentorSwiper = new Swiper('.mentor-swiper', {
  loop: true,
  // slidesPerView: 3,
  spaceBetween: 20,
  delay: 1000,
  breakpoints: {
    768: { slidesPerView: 2 },
    1360: { slidesPerView: 3 }
  }
});

const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {

})

const whatweSwiper = new Swiper('.what-we-offer-swiper', {
  loop: true,
  // slidesPerView: 3,
  spaceBetween: 30,
  autoPlay: true,
  delay: 1000,

  breakpoints :{
    0: { slidesPerView: 1 },
  },

  navigation: {
    nextEl: '.what-we-offer-swiper-right',
    prevEl: '.what-we-offer-swiper-left',
  },
});