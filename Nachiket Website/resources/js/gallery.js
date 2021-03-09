/*
  0 - artwork
*/
var galleryImages = [];
var galleryNames = [];
var galleryContainer = document.getElementsByClassName("gallery-container");
var hiddenGallery = document.getElementsByClassName("hidden-gallery");

var triangle = document.getElementsByClassName("gallery-triangle");
var showGal = true;
var openGalleryNumber = -1;
var galleryHeight = [3558,3558,2007,3042, 1834, 2352];
var navToGalleryNo = -1;
var showcaseImageContainer = document.getElementsByClassName("showcase-image-container");


var modal = document.getElementById ("modal");
var modalImg = document.getElementById("modal-content");
var captionText = document.getElementById("caption");

var img = document.getElementsByClassName("gallery-image");

var openModalNo = -1;
var openModalName;
var span = document.getElementById("close");

if(window.location.toString().lastIndexOf("gallery")!=-1){
  arrangeShowcase();
  initGalleryImages();

  span.onclick = function(){
    closeModal();
  };
}

function initGalleryImages (){
  var galleries = document.getElementsByClassName ("hidden-gallery");
  for (i=0; i< galleries.length; i++){
    var galleryName = galleries[i].id.substring(0, galleries[i].id.length-8);
    galleryNames.push(galleryName);
    var images = galleries[i].getElementsByClassName(galleryName.concat("-gallery-image"));
      galleryImages.push([])
      for (j=0; j<images.length;j++){
          galleryImages[i].push(images[j]);
      }
  }
}

function openModal (img_path) {
  openModalName = img_path;
  modal.style.display = "block";
  modalImg.src = "resources/images/Organized/"+galleryNames[openGalleryNumber]+"/Images/" +img_path;
  for (i=0; i< galleryImages[openGalleryNumber].length; i++){
    if (galleryImages[openGalleryNumber][i].src.split(/(\\|\/)/g).pop() === openModalName){
      openModalNo = i;
    }
  }

  //captionText[imgNo].innerHTML = imgRfc.alt;
  setTimeout(function(){
    modalImg.classList.add("zoom");
    setTimeout(function(){
      //captionText.classList.add("zoom");
    },100);
  },100);
}

function openAboutModal (img_path, dh) {
  openModalName = img_path;
  modal.style.display = "block";
  modalImg.src = dh + img_path;
  openModalNo = 1;
  //captionText[imgNo].innerHTML = imgRfc.alt;
  setTimeout(function(){
    modalImg.classList.add("zoom");
    setTimeout(function(){
      //captionText.classList.add("zoom");
    },100);
  },100);
}

function nextModal (){
  if (openModalNo < galleryImages[openGalleryNumber].length){
    openModal(galleryImages[openGalleryNumber][openModalNo+1].src.split(/(\\|\/)/g).pop());
  }
}

function prevModal (){
  if (openModalNo > 0){
    openModal(galleryImages[openGalleryNumber][openModalNo-1].src.split(/(\\|\/)/g).pop());
  }
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (openModalNo != -1) {
    if (evt.keyCode == 27) {
        closeModal();
    }else if (evt.keyCode == 39){
      nextModal(evt.keyCode, 0, openModalName);
    }else if (evt.keyCode == 37){
      prevModal();
    }
  }
}


function closeModal() {
  setTimeout(function(){
    //captionText.classList.remove("zoom");
    setTimeout(function(){
      modalImg.classList.remove("zoom");
      setTimeout(function(){
        modal.style.display="none";
        openModalNo = -1;
      },400);
    },100);
  },100);
}

window.onload = (event) => {
  if (window.location.href.toString().includes("#")){
    var galPreview = window.location.href.toString().split('#')[1];
    var element_to_scroll_to = document.getElementById(galPreview);
    showGallery(galleryNames.indexOf(galPreview));
    setTimeout(function(){
      element_to_scroll_to.scrollIntoView();
    }, 500);
  }
};


function showGallery (galNo){
  if (showGal){
    showGal = false;
    if(openGalleryNumber != galNo){
      openGallery (galNo);
    }else {
      closeGallery(galNo);
    }
    setTimeout(function(){
      showGal = true;
    },800);
  }
}

function openGallery (galNo){
  gal = document.getElementsByClassName("hidden-gallery")[galNo];
  var timeoutDuration = 0;
  if (openGalleryNumber != -1){
    setTimeout(closeGallery(openGalleryNumber),10);
    timeoutDuration=800;
  }
  if (galNo % 2 ==0){
    triangle [galNo].classList.add("left-triangle");
    triangle [galNo].classList.remove("right-triangle");
  }else{
    triangle [galNo].classList.remove("left-triangle");
    triangle [galNo].classList.add("right-triangle");
  }
  setTimeout(function(){
    openGalleryNumber=galNo;
    if (window.innerWidth<800){
      document.getElementById("gallery-showcase").style.gridTemplateRows="auto auto auto auto auto auto auto";
      document.getElementById("gallery-showcase").style.gridTemplateColumns="auto";
      gal.style.gridColumnStart="1";
      gal.style.gridColumnEnd="1";
      gal.style.gridRowStart= (galNo+2).toString();
      gal.style.gridRowEnd=(galNo+2).toString();
    }else{
      document.getElementById("gallery-showcase").style.gridAutoFlow="row";
      document.getElementById("gallery-showcase").style.gridTemplateColumns="auto auto";
      gal.style.gridColumnStart="1";
      gal.style.gridColumnEnd="3";
        gal.style.gridRowStart=Math.ceil((galNo+1)/2+1).toString();
        gal.style.gridRowEnd=Math.ceil((galNo+1)/2+1).toString();
    }
    setTimeout(function(){
      gal.classList.add('shown');
      gal.classList.remove('hidden');
      setTimeout(function(){
        gal.style.marginBottom=galleryHeight[galNo]+"px";
        setTimeout(function(){
          triangle[galNo].classList.toggle("triangle-open");
          setTimeout(function(){
            gal.style.transitionProperty = "none"
            gal.style.height="auto";
            gal.style.marginBottom="0";
            setTimeout(
              function(){
                gal.style.transitionProperty = "margin";
                galleryContainer[galNo].classList.toggle("gallery-container-open");
                galleryHeight[galNo]=gal.offsetHeight;
              },100);
            },100);
        },200)
      },10);
    },10);
  },timeoutDuration);
}

function arrangeShowcase (){
  if (window.innerWidth<800){
    if(openGalleryNumber==-1){
      document.getElementById("gallery-showcase").style.gridTemplateRows="auto auto auto auto";
      document.getElementById("gallery-showcase").style.gridTemplateColumns="auto";
    }else{
      document.getElementById("gallery-showcase").style.gridTemplateRows="auto auto auto auto auto";
      document.getElementById("gallery-showcase").style.gridTemplateColumns="auto";
      hiddenGallery[openGalleryNumber].style.gridColumnStart="1";
      hiddenGallery[openGalleryNumber].style.gridColumnEnd="2";
      hiddenGallery[openGalleryNumber].style.gridRowStart= (openGalleryNumber+2).toString();
      hiddenGallery[openGalleryNumber].style.gridRowEnd=(openGalleryNumber+2).toString();
      triangle [openGalleryNumber].classList.remove("left-triangle");
      triangle [openGalleryNumber].classList.remove("right-triangle");
      triangle [openGalleryNumber].classList.add("center-triangle");
    }
  }else{
    if (openGalleryNumber == -1){
      document.getElementById("gallery-showcase").style.gridTemplateRows="auto auto";
      document.getElementById("gallery-showcase").style.gridTemplateColumns="auto auto";
    }else{
      document.getElementById("gallery-showcase").style.gridTemplateRows="auto auto auto";
      document.getElementById("gallery-showcase").style.gridTemplateColumns="auto auto";
      hiddenGallery[openGalleryNumber].style.gridRowStart= (Math.floor(openGalleryNumber/2)+2).toString();
      hiddenGallery[openGalleryNumber].style.gridRowEnd=(Math.floor(openGalleryNumber/2)+2).toString();
      hiddenGallery[openGalleryNumber].style.gridColumnStart="1";
      hiddenGallery[openGalleryNumber].style.gridColumnEnd="3";
      triangle [openGalleryNumber].classList.remove("center-triangle");
      if (openGalleryNumber % 2 ==0){
        triangle [openGalleryNumber].classList.add("left-triangle");
        triangle [openGalleryNumber].classList.remove("right-triangle");
      }else{
        triangle [openGalleryNumber].classList.remove("left-triangle");
        triangle [openGalleryNumber].classList.add("right-triangle");
      }
    }
  }
}

function closeGallery (galNo){
  openGalleryNumber=-1;
  hiddenGallery[galNo].style.transitionProperty = "none"
  hiddenGallery[galNo].style.height="0";
  hiddenGallery[galNo].style.marginBottom=galleryHeight[galNo]+"px";
  setTimeout(
    function(){
      hiddenGallery[galNo].style.transitionProperty = "margin";
      galleryContainer[galNo].classList.toggle("gallery-container-open");
      setTimeout(
        function(){
          triangle[galNo].classList.toggle("triangle-open");
          setTimeout(function(){
            hiddenGallery[galNo].style.marginBottom="0%";
            setTimeout(function(){
              hiddenGallery[galNo].classList.remove('shown');
              if (window.innerWidth<800){
                document.getElementById("gallery-showcase").style.gridTemplateRows="auto auto auto auto auto auto";
                document.getElementById("gallery-showcase").style.gridTemplateColumns="auto";
              }else{
                document.getElementById("gallery-showcase").style.gridTemplateRows="auto auto auto";
                document.getElementById("gallery-showcase").style.gridTemplateColumns="auto auto";
              }
            },300)
          }, 0);
        },370);
    }
  ,10);

}
