// const testimonialSwiper = new Swiper('.testimonial-swiper', {
//   loop: true,
//   // slidesPerView: 3,
//   spaceBetween: 20,
//   autoPlay: true,
//   delay: 1000,

//   navigation: {
//     nextEl: '.testimonial-swiper-right',
//     prevEl: '.testimonial-swiper-left',
//   },

//   breakpoints: {
//     768: { slidesPerView: 2, spaceBetween: 20 },
//     1200: { slidesPerView: 3 }
//   }
// });


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

// const mentorSwiper = new Swiper('.mentor-swiper', {
//   loop: true,
//   // slidesPerView: 3,
//   spaceBetween: 20,
//   delay: 1000,
//   breakpoints: {
//     768: { slidesPerView: 2 },
//     1360: { slidesPerView: 3 }
//   }
// });

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
  console.log("clicked");

  hamburger.classList.toggle(('active'));
  navMenu.classList.toggle(('active'));
})

// const whatweSwiper = new Swiper('.what-we-offer-swiper', {
//   loop: true,
//   // slidesPerView: 3,
//   spaceBetween: 20,
//   autoPlay: true,
//   delay: 1000,

//   breakpoints :{
//     0: { slidesPerView: 1 },
//   },

//   navigation: {
//     nextEl: '.what-we-offer-swiper-right',
//     prevEl: '.what-we-offer-swiper-left',
//   },
// });


const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".testimonial-arrows");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  })
});

const dragStart = () => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
}

const autoPlay = () => {
  if(window.innerWidth < 800) return;
  timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const infiniteScroll = () => {
  if(carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    coursel.scrollLeft = coursel.scrollWidth - ( 2 * carousel.offsetWidth );
    carousel.classList.remove("no-transition");
  }
  else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);
  if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);