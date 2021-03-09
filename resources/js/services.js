var canChangeSupport = true;
const supportSlides = document.getElementsByClassName('support-item');
var currentSupport = 1;
var fixedTitles = document.getElementsByClassName('fixed');
var supportDescription = document.getElementsByClassName('support-item-description');
var supportIndex=[-1,0,1,2,3];
var videoFile=[];
var vidPlayer = document.getElementById("vid-player");
var vidSource = document.createElement('source');
var vidDot = document.getElementsByClassName("vid-dot");
var hiddenVid = document.getElementsByClassName("hidden-video");
initVideoFiles();

function initVideoFiles() {
  vidPlayer.appendChild(vidSource);
  for (i =0; i< hiddenVid.length; i++){
    videoFile.push(hiddenVid[i].id);
  }
  vidSource.setAttribute('src', videoFile[0]);

    vidPlayer.load();
}

function changeVideo(n){
  for(i=0;i<vidDot.length; i++){
    vidDot[i].classList.remove("active");
  }
  vidDot[n].classList.add("active");
  vidSource.setAttribute('src', videoFile[n]);
    vidPlayer.load();
}
changeSlide('f');

function changeSupport(n){
  const numSupports = supportSlides.length;
  var i;
  if (canChangeSupport == true){
    canChangeSupport = false;

    for (i=0; i< supportIndex.length; i++){
      if (supportIndex[i]<0){
        supportIndex[i]=numSupports+supportIndex[i];
      }if (supportIndex[i]>=numSupports){
        supportIndex[i]=supportIndex[i]-numSupports;
      }
    }

    for(i=0;i<fixedTitles.length; i++){
      fixedTitles[i].style.zIndex="5";
    }

    if (n=='f'){
      supportSlides[supportIndex[4]].classList.add('off-right');
      supportSlides[supportIndex[2]].classList.remove('center');
      supportSlides[supportIndex[1]].classList.add('off-left');
      supportSlides[supportIndex[2]].classList.add('left');
      supportSlides[supportIndex[3]].classList.remove('right');
      supportSlides[supportIndex[3]].classList.add('center');
      supportSlides[supportIndex[1]].classList.remove('left');
      setTimeout(function(){
        supportSlides[supportIndex[4]].classList.remove('off-right');
        supportSlides[supportIndex[4]].classList.add('right');
        setTimeout(function(){
        for(i=0;i<fixedTitles.length; i++){
          fixedTitles[i].style.zIndex="3";
        }
          supportSlides[supportIndex[1]].classList.remove('left');
          supportSlides[supportIndex[1]].classList.remove('off-left');
          for(i=0;i<supportIndex.length;i++){
            supportIndex[i]+=1;
          }
          //supportDescription[supportIndex[2]].style.transition = "all 500ms ease-out";
          canChangeSupport = true;
        },500);
      },10);
    }else{
      supportSlides[supportIndex[0]].classList.add('off-left');
      supportSlides[supportIndex[2]].classList.remove('center');
      supportSlides[supportIndex[3]].classList.add('off-right');
      supportSlides[supportIndex[2]].classList.add('right');
      supportSlides[supportIndex[1]].classList.remove('left');
      supportSlides[supportIndex[1]].classList.add('center');
      supportSlides[supportIndex[3]].classList.remove('right');
      setTimeout(function(){
        supportSlides[supportIndex[0]].classList.remove('off-left');
        supportSlides[supportIndex[0]].classList.add('left');
        setTimeout(function(){
          supportSlides[supportIndex[3]].classList.remove('right');
          supportSlides[supportIndex[3]].classList.remove('off-right');
          for(i=0;i<supportIndex.length;i++){
            supportIndex[i]-=1;
          }
          for(i=0;i<fixedTitles.length; i++){
            fixedTitles[i].style.zIndex="3";
          }
          canChangeSupport = true;
        },500);
      },10);
    }
  }
}
