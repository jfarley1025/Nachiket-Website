<!doctype html>
<html lang="en">

  <head>
    <link href="./resources/css/index.css" type="text/css" rel="stylesheet"></link>
    <title>Nachiket Children's Libraries | Home</title>
    <link rel="icon" href=".\resources\icons\flavicon.png">
  </head>

  <body>

    <?php require "header.html"?>

    <div id="slideshow-container">
      <div class="slide fade" style="max-width: calc(max(25vw, 70vh)/2*3); display: block;">
        <img class="slide-image" src= "./resources/images/Slides/IMG_0297.JPG">
        <div class="slide-text-container one">
          <div class="slide-text">Nachiket Children's Libraries</div>
          <a href="./about.php"><div class="slide-button" style="background-color: #F9992F;">
            <h2>About Us</h2>
          </div></a>
        </div>
      </div>

      <div class="slide fade" style="max-width: calc(1.4*max(25vw,70vh)/2*3); min-width: 800px;">
        <img class="slide-image" src= "./resources/images/Slides/DSCF0868.JPG" style="object-position: right bottom">
        <div class="slide-text-container two">
          <div class="slide-text" style="text-align: center;">Reinventing Libraries</div>
          <a href = "services.php"><div class="slide-button" style= "background-color: #428A19";>
            <h2>Our Work</h2>
          </div></a>
        </div>
      </div>

      <div class="slide fade">
        <img class="slide-image" src= "./resources/images/Slides/IMG_0208.JPG" style="object-position: left center;">
        <div class="slide-text-container three">
          <div class="slide-text" style="text-align: left;">Creating Infinite Possibilities</div>
          <a href = "gallery.php#Readers"><div class="slide-button" style= "background-color: #15368A";>
            <h2>The Children</h2>
          </div></a>
        </div>
      </div>

      <div class="slide fade">
        <img class="slide-image" src= "./resources/images/Slides/IMG_0585.JPG">
        <div class="slide-text-container four">
          <div class="slide-text" style="text-align: left;">Improving lives through literacy</div>
          <a href = "gallery.php#Community"><div class="slide-button" style= "background-color: #F9992F";>
            <h2>Our Community</h2>
          </div></a>
        </div>
      </div>

      <div class="slide fade">
        <img class="slide-image" src= "./resources/images/Slides/artwork.jpg" style="object-position: left bottom; object-fit: cover;">
        <div class="slide-text-container five">
          <div class="slide-text" style="text-align: center;">Developing children's talents</div>
          <a href="gallery.php#Artwork"><div class="slide-button" style= "background-color: #428A19";>
            <h2>Their Artwork</h2>
          </div></a>
        </div>
      </div>

      <div class="slide fade">
        <img class="slide-image" src= "./resources/images/Slides/DSCN1536 (2).JPG" style="object-position: left top; object-fit: cover;">
        <div class="slide-text-container six">
          <div class="slide-text" style="text-align: center;">Volunteer at Nachiket</div>
          <a href="volunteer.php"><div class="slide-button" style= "background-color: var(--blue);";>
            <h2>Join Us</h2>
          </div></a>
        </div>
      </div>

      <div style="text-align:center">
          <span class="dot" onclick="changeSlide(1)"></span>
          <span class="dot" onclick="changeSlide(2)"></span>
          <span class="dot" onclick="changeSlide(3)"></span>
          <span class="dot" onclick="changeSlide(4)"></span>
          <span class="dot" onclick="changeSlide(5)"></span>
          <span class="dot" onclick="changeSlide(6)"></span>
      </div>

    </div>


    <div class="content-container" style="background: #F6F5F2;">
      <div class="content">
        <h2 class="content-title">OUR MISSION</h2><br>
        <p style="text-align: center">Instilling and supporting a love of reading in order to improve the
          learning capabilities and the quality of education for disadvantaged
          children.</p><br>
      </div>
    </div>

    <div class="content-container" style="background: #f9f9f9;">
      <div class="content">
        <h2 class = "content-title" style="border-color: #418919">WHAT WE DO</h2><br>
        <div class="work-display-container">
          <div class="work-display">
            <div class="work-item big" style="background-image: url('./resources/images/Work/IMG_2928.JPG');">
              <div class="work-text" style= "--work-text-expand-height: 190px">
                <h1>Inspiring a love of reading</h1>
                <p class="work-text-paragraph">An encouraging literary environment
                  is crucial for a child’s future. Only with easy access to interesting
                  and engaging reading material, will children be able to achieve
                  and sustain the complex literacy level demanded by today’s rapidly
                  changing, information-based world.</p>
              </div>
            </div>

            <div class="work-display">
              <div class="work-item writing-work-item" style="">
                <div class="work-text" style= "--work-text-expand-height: 150px">
                  <h1>Writing workshops</h1>
                  <p class="work-text-paragraph">Writing is a foundational skill
                    that allows children to develop their full potential.</p>
                </div>
              </div>

              <div class="work-item small" style="background-image: url('./resources/images/Work/DSCN1515.JPG');">
                <div class="work-text">
                  <h1>Starting at the beginning</h1>
                  <p class = "work-text-paragraph">Nachiket reaches out to the youngest
                    readers through a reading program for children from infants
                    to age five.</p>
                </div>
              </div>
            </div>

            <div class="work-display">
              <div class="work-item artwork-work-item">
                <div class="work-text" style= "--work-text-expand-height: 220px">
                  <h1>Holistic literacy through art</h1>
                  <p class = "work-text-paragraph">An easy availability of books
                    and avenues to develop their talents (dance, drama, public
                    speaking etc) is producing wonderful results.</p>
                </div>
              </div>

              <div class="work-item science-work-item">
                <div class="work-text" style= "--work-text-expand-height: 220px">
                  <h1>Interactive science programs</h1>
                  <p class = "work-text-paragraph">Recently the libraries have
                    started a program explaining science concepts with the help
                    of hands-on experiments.</p>
                </div>
              </div>
            </div>

            <div class="work-item big" style="background-image: url('./resources/images/Work/IMG_0690.JPG'); background-position: left top;">
              <div class="work-text" style= "--work-text-expand-height: 170px">
                <h1>Brighter futures through education</h1>
                <p class = "work-text-paragraph">Nourishing learning capacity is
                  the incredible path to every child’s future. The children are
                  winning competitions in schools, are publishing articles in
                  Amravati newspapers, and are developing a wide interest for
                  information about the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-container" style="background: #E4E4E4;">
      <div class="content" style="display: flex; flex-direction: row; justify-content: space-around;">
        <div class="number-item-container" style="width: 17%;">
          <div class="number-item">
            <div class="number">
              <script type="text/javascript">document.write( new Date().getFullYear()-2004 );</script>
            </div>
            <div class="number-text">
              YEARS
            </div>
          </div>
        </div>
        <div class="number-item-container" style="width:24%">
          <div class="number-item">
            <div class="number">
              20
            </div>
            <div class="number-text">
              LIBRARIES
            </div>
          </div>
        </div>
        <div class="number-item-container" style="width:30%">
          <div class="number-item">
            <div class="number">
              5000
            </div>
            <div class="number-text">
              CHILDREN
            </div>
          </div>
        </div>
        <div class="number-item-container" style="width:29%">
          <div class="number-item">
            <div class="number">
              27000
            </div>
            <div class="number-text">
              BOOKS
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php require "footer.html"?>


    <script src="./resources/js/gallery.js"></script>
    <script src="./resources/js/index.js"></script>

  </body>

</html>
