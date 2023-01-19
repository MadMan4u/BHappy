// fixed header

window.onscroll = function () {
  myFunction()
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// effect scroll
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('animation-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let animation = document.querySelectorAll('.animation');
let title = document.querySelectorAll('.animation-title');
let photo = document.querySelectorAll('.animation-photo');
let wrapper = document.querySelectorAll('.animation-wrapper');
for (let elm of animation) {
  observer.observe(elm);
}
for (let elm of title) {
  observer.observe(elm);
}
for (let elm of photo) {
  observer.observe(elm);
}
for (let elm of wrapper) {
  observer.observe(elm);
}

// burger menu
$(document).ready(function() {
  $('.menu-burger__header').click(function() {
      $('.menu-burger__header').toggleClass('open-menu');
      $('.header__nav-burger').toggleClass('open-menu');
      $('body').toggleClass('fixed-page');
  });
});