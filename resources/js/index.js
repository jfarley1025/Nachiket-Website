var header = document.getElementById("header");
var slideIndex;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var dropdownIcon = 0;
var menu = document.getElementById("menu");
var windowSmall = false;
var menuItems = document.getElementsByClassName("menu-item");
var paused = 0;
const servicesImages = document.getElementsByClassName('services-image');
const servicesTexts = document.getElementsByClassName('services-text');
const servicesContents = document.getElementsByClassName('services-content');

const browserAlert = "Your current web browser is not fully compatible with our website, please switch to a recent version of Chrome, Edge, Safari, Firefox, etc. for a better website experience."

const testElem = document.createElement('div');
if (testElem.style.flex !== undefined && testElem.style.grid !== undefined) {
  console.log("All tests pass");
} else {
  alert(browserAlert);
}

if(window.location.toString().lastIndexOf("services")!=-1){
  slideIndex=0;
}else{
  slideIndex=1;
}

window.onscroll = function() {shrinkHeader()};

window.onresize = function() {
  switchMenu();
  if(window.location.toString().lastIndexOf("gallery")!=-1){
    arrangeShowcase();
  }
};


function shrinkHeader() {
  if (window.pageYOffset > 50 && dropdownIcon == 0) {
    header.style.height="90px";
    document.getElementById("logo-container").style.height="80px";
  } else {
    header.style.height="130px";
    document.getElementById("logo-container").style.height="110px";
  }
}

function showDropdown() {
  if(dropdownIcon==0){
    dropdownIcon = 1;
    document.getElementById("menu-dropdown").style.display="block";
    header.style.height="130px";
    document.getElementById("logo-container").style.height="110px";
    setTimeout(function() {
      document.querySelector('#menu-dropdown').classList.remove('closed');
      document.querySelector('#menu-dropdown').classList.add('opened');
		},50);
  }else {
    document.querySelector('#menu-dropdown').classList.remove('opened');
    document.querySelector('#menu-dropdown').classList.add('closed');
    setTimeout(function() {
      document.querySelector('#menu-dropdown').classList.remove('closed');
      document.querySelector('#menu-dropdown').style.display = "none";
    },200);
    dropdownIcon = 0;
    //document.getElementById("menu-dropdown").style.display="none";
  }
}

switchMenu();
if(document.getElementsByClassName("work-display-container")[0]!=null){
  showSlides();
  setInterval(function(){
    if (!paused){
      showSlides();
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1;}
    }
    paused++;
    if(paused>5){
      paused=0;
    }
  },800);
}

displayArrows();

function displayArrows(){
  if(window.location.toString().lastIndexOf("services")!=-1){
    if (slideIndex == 1){
      document.getElementsByClassName("slide-arrow")[0].style.opacity = "0.3";
    }else {
      document.getElementsByClassName("slide-arrow")[0].style.opacity = "1";
    }
    if (slideIndex == slides.length){
      document.getElementsByClassName("slide-arrow")[1].style.opacity = "0.3";
    }else{
      document.getElementsByClassName("slide-arrow")[1].style.opacity = "1";
    }
  }
}


function showSlides() {
  var i;
  for (i = 0; i< slides.length; i++){
    slides[i].style.display = "none";
  }

  for (i=0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active","");
  }

  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className += " active";
}

function changeSlide(n) {
  var i;

  if (n=='f'){
    if(slideIndex != slides.length){
      slideIndex +=1;
    }else{
      return -1;
    }
  }else if (n=='b'){
    if(slideIndex != 1){
      slideIndex -= 1;
    }else{
      return -1;
    }
  }else{
    slideIndex = n;
  }
  for (i = 0; i< slides.length; i++){
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  if(window.location.toString().lastIndexOf("services")==-1){
    for (i=0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(" active","");
    }
    dots[slideIndex-1].className += " active";
  }
  slides[slideIndex-1].style.display="block";
  paused=true;
  displayArrows();
  setTimeout(function(){paused=false;},500);
}

function nextSlide() {
  var i;
  slideIndex += 1;
  for (i = 0; i< slides.length; i++){
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i=0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active","");
  }
  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className += " active";
  paused=true;
  setTimeout(function(){paused=false;},500);
}

function donationLink () {
  window.open('https://torontofoundation.ca/listings/nachiket_childrens_literacy_foundation');
}

function switchMenu(){
  if (window.innerWidth < (1/0.9*1000)){
    if (windowSmall == false){
      menu.style.display = "none";
      document.getElementById("dropdown-icon-container").style.display = "block";
    }
    windowSmall = true;
  }else{
    if (dropdownIcon==1){
      navToggle(document.getElementById("nav-icon"));
        document.querySelector('#menu-dropdown').classList.remove('opened');
          document.querySelector('#menu-dropdown').classList.add('closed');
        setTimeout(function() {
       document.querySelector('#menu-dropdown').classList.remove('closed');
       document.querySelector('#menu-dropdown').style.display = "none";
     },200);
    }
    menu.style.display = "flex";
    document.getElementById("dropdown-icon-container").style.display = "none";
    windowSmall = false;
    dropdownIcon = 0;
  }
}

function navToggle(x) {
  x.classList.toggle("change");
}
