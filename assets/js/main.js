function backtoTop() {
  window.scrollTo(0, 0);
}

const backToTop = document.querySelector(".back-to-Top");
const observerTarget = document.querySelector("header");

const observer = new IntersectionObserver((enteries, observer) => {
  enteries.forEach(entry => {
    if (!entry.isIntersecting) {
      backToTop.classList.add("shown");
    } else {
      backToTop.classList.remove("shown");
    }
  })
}, {

});

observer.observe(observerTarget);
