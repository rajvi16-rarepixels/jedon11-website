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

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
  console.log("clicked");

  hamburger.classList.toggle(('active'));
  navMenu.classList.toggle(('active'));
})


const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".testimonial-arrows");

let isDragging = false, startX, startScrollLeft, timeoutId;
let firstCardWidth, cardPerView, carouselChildrens;

function initCarousel() {
  firstCardWidth = carousel.querySelector(".card").offsetWidth;
  carouselChildrens = [...carousel.children];
  cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  })

  carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(initCarousel);
  });
} else {
  requestAnimationFrame(initCarousel);
}

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  })
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
}

const autoPlay = () => {
  if (window.innerWidth < 800) return;
  timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    carousel.classList.remove("no-transition");
  }
  else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


// const wrapper = document.querySelector(".what-we-offer-swiper");
// const carousel = document.querySelector(".what-we-offer-swiper .swiper-wrapper");
// const prevBtn = document.querySelector(".what-we-offer-swiper-left");
// const nextBtn = document.querySelector(".what-we-offer-swiper-right");
// let isDragging = false, startX, startScrollLeft, timeoutId;
// let firstCardWidth, cardPerView, carouselChildrens;

// const firstCardWidth = carousel.querySelector(".swiper-slide").offsetWidth;
// const slides = [...carousel.children];
// slides.slice(-1).reverse().forEach(slide => {carousel.insertAdjacentHTML("afterbegin", slide.outerHTML);});
// slides.slice(0, 1).forEach(slide => {carousel.insertAdjacentHTML("beforeend", slide.outerHTML);});
// carousel.scrollLeft = firstCardWidth;
// prevBtn.addEventListener("click", () => {carousel.scrollLeft -= firstCardWidth;});
// nextBtn.addEventListener("click", () => {carousel.scrollLeft += firstCardWidth;});
// carousel.addEventListener("mousedown", (e) => {
//   isDragging = true;
//   startX = e.pageX;
//   startScrollLeft = carousel.scrollLeft;
//   carousel.classList.add("dragging");
// });
// carousel.addEventListener("mousemove", (e) => {
//   if (!isDragging) return;
//   carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// });
// document.addEventListener("mouseup", () => {
//   isDragging = false;
//   carousel.classList.remove("dragging");
// });
// function autoPlay() {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(() => {carousel.scrollLeft += firstCardWidth;}, 3000);
// }
// autoPlay();
// carousel.addEventListener("scroll", () => {
//   if (carousel.scrollLeft <= 0) {
//     carousel.classList.add("no-transition");
//     carousel.scrollLeft =
//     carousel.scrollWidth - (2 * firstCardWidth);
//     carousel.classList.remove("no-transition");
//   }
//   if (
//     Math.ceil(carousel.scrollLeft) >=
//     carousel.scrollWidth - carousel.offsetWidth
//   ) {
//     carousel.classList.add("no-transition");
//     carousel.scrollLeft = firstCardWidth;
//     carousel.classList.remove("no-transition");
//   }
//   clearTimeout(timeoutId);
//     if (!wrapper.matches(":hover")) {autoPlay();}
// });
// wrapper.addEventListener("mouseenter", () => {clearTimeout(timeoutId);});
// wrapper.addEventListener("mouseleave", autoPlay);


// animation js

document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelectorAll('.home-hero-stats');
  const section = document.querySelector('.home-hero-wrapper');

  const observer = new IntersectionObserver(entries => { entries.forEach(entry => {
    if (entry.isIntersecting) {
      text.forEach((text, index) => {
        setTimeout(() => {text.classList.add('active');}, index * 300);}
      );
        observer.disconnect();
      }
    });
  }, {
    threshold: 0.3,

  });
  if (section) { observer.observe(section); }
});


document.addEventListener("DOMContentLoaded", function () {
  const hwcards = document.querySelectorAll('.how-it-wroks-card');
  const section = document.querySelector('.how-it-works-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hwcards.forEach((hwcards, index) => {
          setTimeout(() => {
            hwcards.classList.add('active');
          }, index * 300);
        }
        );
        observer.disconnect();
      }
    });
  }, {
    threshold: 0.3,

  });
  if (section) { observer.observe(section); }
});

document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelectorAll('.hm-abt-right');
  const section = document.querySelector('.hm-abt-content-wrapper');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        img.forEach((img, index) => {
          setTimeout(() => {
            img.classList.add('active');
          }, index * 300);
        }
        );
        observer.disconnect();
      }
    });
  }, {
    threshold: 0.3,

  });
  if (section) { observer.observe(section); }
});

const section = document.querySelector("#heroSection");
const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => {
      if (entry.isIntersecting) { document.querySelector(".delay-1").classList.add("show");
        // setTimeout(() => {
        //   document
        //     .querySelector(".reveal-left")
        //     .classList.add("show");
        // }, 800);
        // setTimeout(() => {
        //   document
        //     .querySelector(".reveal-right")
        //     .classList.add("show");
        // }, 1400);
        setTimeout(() => {
          document
            .querySelector(".delay-2")
            .classList.add("show");
        }, 1900);
        setTimeout(() => {
          document
            .querySelector(".delay-3")
            .classList.add("show");
          startCounters();
        }, 2400);
        observer.unobserve(section);
      }
    });
  },
  {
    threshold: 0.4
  }
);
observer.observe(section);

function startCounters() {
 const counters = document.querySelectorAll(".counter");
 counters.forEach((counter) => {
   const target = +counter.dataset.target;
   let count = 0;
   const increment = target / 100;
   const updateCounter = () => {
    count += increment;
    if (count < target) {
      counter.innerText = Math.floor(count) + "+";
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target + "+";
     }
   };
   updateCounter();
 });
}