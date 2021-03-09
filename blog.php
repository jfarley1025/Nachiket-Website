<!doctype html>
<html lang="en">

<head>
  <link href="./resources/css/index.css" type="text/css" rel="stylesheet"></link>
  <link href="./resources/css/about.css" type="text/css" rel="stylesheet"></link>
  <link href="./resources/css/blog.css" type="text/css" rel="stylesheet"></link>
  <title>Nachiket Children's Libraries | Blog</title>
  <link rel="icon" href=".\resources\icons\flavicon.png">
</head>

<a name="top"></a>

<?php require "header.html"?>

<div id="image-container">
  <img id="aboutImage" src=".\resources\images\Organized\Readers\Images\IMG_2910-banner.JPG" style="object-position: center top; object-fit: cover;">
  <div id="about-title-container">
    <div id="about-title">
      The Blog
    </div>
  </div>
</div>
<?php
$dir = 'Blogs';
$blog_extensions = array("html");
$blog_list = array();
$blog_list_unsorted = array();
$year_list = array();
$month_list = array();
if (is_dir($dir)){

  if ($dhy = opendir($dir)){
    while(($year = readdir($dhy)) !== false){
      if($year != '' && $year != '.' && $year != '..'){
        $year_dir = $dir . "/" . $year;
        if(is_dir($year_dir)){
          array_push($year_list, $year);
          $month_list_year = array();
          $blog_list_year = array();
          if ($dhm = opendir($year_dir)){
            while(($month = readdir($dhm)) !== false){
              if($month != '' && $month != '.' && $month != '..'){
                $month_dir = $year_dir . "/" . $month;

                if(is_dir($month_dir)){
                  array_push($month_list_year, $month);
                  if($dh = opendir($month_dir)){
                    $blog_list_month = array();
                    while (($blog = readdir($dh)) !== false){
                      if($blog != '' && $blog != '.' && $blog != '..'){
                        // Image path
                        $blog_path = $month_dir . "/" . $blog;
                        $blog_ext = pathinfo($blog_path, PATHINFO_EXTENSION);
                        // Check its not folder and it is image file
                        if(!is_dir($blog_path) &&
                        in_array($blog_ext,$blog_extensions)){
                          array_push($blog_list_month, $blog_path);
                          array_push($blog_list_unsorted, $blog_path);
                        }
                      }
                    }
                    rsort($blog_list_month);
                    array_push($blog_list_year, $blog_list_month);
                    closedir($dh);
                  }
                }
              }
            }
            usort($month_list_year, "compare_months");
            array_push($month_list, $month_list_year);
            closedir($dhm);
          }
          rsort($blog_list_year);
          array_push ($blog_list, $blog_list_year);
        }
      }
    }
    closedir($dhy);
    // Read files
  }
}
rsort($blog_list);
function compare_months($a, $b) {
  $monthA = date_parse($a);
  $monthB = date_parse($b);

  return $monthA["month"] - $monthB["month"];
}
?>

<div class="content-container" style="background-color: #f8f8ff;">
  <div class="content">
    <div class="blogs-and-index-container">
      <div class="blogs-container">
        <?php
        function compare_blogs($a, $b) {
          $BlogA = explode('/', $a);
          $BlogA = array_pop($BlogA);
          $BlogB = explode('/', $b);
          $BlogB = array_pop($BlogB);
          echo '<script language="javascript">';
//echo "alert('$BlogA')";
echo '</script>';
          if ($BlogA == $BlogB) {
              return 0;
          }
          return ($BlogA < $BlogB) ? +1 : -1;
        }
        $year_counter = 0;
        unset($blog);
        usort($blog_list_unsorted, "compare_blogs");
        foreach($blog_list_unsorted as &$blog){
              require $blog;
            }
        ?>
      </div>
      <div id="index-container">
        <h2 class="index-title">BLOG ARCHIVE</h2>
        <ul>
          <?php
          $year_counter = 0;
          $caret_counter = 0;
          foreach($year_list as &$blog_year){
            $month_counter = 0;
            ?>
            <li><a href="javascript: void(0);" onclick="toggleCaret(<?php echo $caret_counter; $caret_counter++;?>);" class="toggle"><span class="caret">►</span>
              <?php echo $blog_year ?></a><ul class="collapsed-list" id='<?php echo $blog_year ?>'><?php
              foreach($month_list[$year_counter] as &$blog_month){
                ?><li><a href="javascript: void(0);" onclick="toggleCaret(<?php echo $caret_counter; $caret_counter++; ?>);" class="toggle"><span class="caret">►</span>
                  <?php echo $blog_month ?></a><ul class="collapsed-list" id='<?php echo $blog_month ?>'><?php
                  unset($blog_path);
                  foreach($blog_list[$year_counter][$month_counter] as $blog_path){
                    $blog_title = substr($blog_path, strpos($blog_path,"--")+2);
                    $blog_title = strstr($blog_title, ".html", true);
                    ?>
                    <li><a onclick="setTimeout(function(){window.scrollBy(0, -100);}, 0);"href="#<?php echo $blog_title ?>"><?php
                    echo $blog_title ?></a></li>
                    <?php
                  }
                  unset($blog_path);
                  $month_counter++;
                  ?></ul></li><?php

                }
                unset($blog_month);
                $year_counter++;
                ?></ul></li><?php
              }
              unset($blog_year);
              ?>
            </ul>
          </div>
        </div>
      </div>
    </div>





    <div class="content-container">
      <div class="content">
        <a href="#top" style="color: #2845AB; text-decoration: underline;">Return to top of page</a>
      </div>
    </div>

    <?php require "footer.html"?>

    <script src="./resources/js/index.js"></script>
    <script src="./resources/js/blog.js"></script>
  </body>
  </html>
