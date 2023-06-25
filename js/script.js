const track = document.getElementById("image-track");
var firstImage = document.querySelector("#image-track .image:first-child");
var secondImage = document.querySelector("#image-track .image:nth-child(2)");
var projectsDiv = document.querySelector(".project");
var thirdImage = document.querySelector("#image-track .image:nth-child(3)");
var skillDiv = document.querySelector(".skills");
var fourImage = document.querySelector("#image-track .image:nth-child(4)");
var veilleDiv = document.querySelector(".veille");
var fiveImage = document.querySelector("#image-track .image:nth-child(5)");
var contactDiv = document.querySelector(".contact");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}
window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);
window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);

var images = document.getElementsByClassName('image');

Array.from(images).forEach(function(image, index) {
  image.addEventListener('dblclick', function() {
    if (index === 0) {
        var Div = document.querySelector('.about-me');
        var footer = document.querySelector('.footer');
        footer.classList.toggle('show');
        Div.classList.toggle('show');
    }
    if (index === 1) {
        var Div = document.querySelector('.project');
        var footer = document.querySelector('.footer');
        footer.classList.toggle('show');
        Div.classList.toggle('show');
    }
    if (index === 2) {
        var Div = document.querySelector('.skills');
        var footer = document.querySelector('.footer');
        footer.classList.toggle('show');
        Div.classList.toggle('show');
    }
    if (index === 3) {
        var Div = document.querySelector('.veille');
        var footer = document.querySelector('.footer');
        footer.classList.toggle('show');
        Div.classList.toggle('show');
    }
    if (index === 4) {
        var Div = document.querySelector('.contact');
        var footer = document.querySelector('.footer');
        footer.classList.toggle('show');
        Div.classList.toggle('show');
    }
    
    var overlay = document.createElement('div');
    overlay.classList.add('animate-overlay');
    document.body.appendChild(overlay);
  });
});

var reverseButton = document.querySelector('.reverse-animation-button');
var page = document.documentElement;

reverseButton.addEventListener('click', function() {
  page.classList.add('animate-page-down');
  var divs = document.querySelectorAll('.about-me, .project, .skills, .veille, .contact');
  var footer = document.querySelector('.footer');
  var overlay = document.querySelector('.animate-overlay');

  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove('show');
  }

  if (overlay) {
    overlay.parentNode.removeChild(overlay);
  }

  footer.classList.remove('show');
});

page.addEventListener('animationend', function() {
  if (page.classList.contains('animate-page-down')) {
    page.classList.remove('animate-page-down');
  }
});

var animatedElement = document.querySelector('.animate-page-down');

animatedElement.addEventListener('animationend', function() {
  var overlay = document.querySelector('.animate-overlay');
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
  }
});

