<!doctype html>
<html lang="en">

  <head>
    <link href="./resources/css/index.css" type="text/css" rel="stylesheet"></link>
    <link href="./resources/css/about.css" type="text/css" rel="stylesheet"></link>
    <link href=".\resources\css\gallery.css" type="text/css" rel="stylesheet"></link>
    <title>Nachiket Children's Libraries | Gallery</title>
    <link rel="icon" href=".\resources\icons\flavicon.png">
  </head>

  <body onresize="arrangeShowcase()">
  <div id="modal">
    <span id="close">&times;</span>
    <div id="modal-content-caption">
      <img id="modal-content">
      <div id="caption"></div>
    </div>
  </div>

    <?php require "header.html"?>

    <div id="image-container">
      <img id="aboutImage" src=".\resources\images\Banners\Scan32_Complete.jpg" style="object-position: center top; object-fit: cover;">
      <div id="about-title-container">
        <div id="about-title">
          Image Gallery
        </div>
      </div>
    </div>

    <div class="content-container">
      <div class="content">
        <div id="gallery-showcase">
          <?php
          $folder_dir = 'resources/images/Organized';

          if (is_dir($folder_dir)){
           if ($dhf = opendir($folder_dir)){
            $folder_count = 1;
            // Read files
            while (($folder = readdir($dhf)) !== false){
             if($folder != '' && $folder != '.' && $folder != '..'){
              // Image path
              $folder_path = $folder_dir . "/" . $folder;
              // Check its not folder and it is image file
              if(is_dir($folder_path)){
           ?>
          <div class="showcase-image-container" onclick='<?php echo "showGallery(" . $folder_count - 1 . ");"?>'>
            <img src='<?php echo $folder_path . "/" . $folder . ".jpg" ?>' style="width:100%">
            <div class="blog-image-caption-container">
              <p><?php echo $folder ?></p>
            </div>
          </div>
          <?php
        $folder_count++;}}}?>
        <?php
        closedir($dhf);}}
           ?>
          <?php
          if (is_dir($folder_dir)){
           if ($dhf = opendir($folder_dir)){
            $folder_count = 1;
            // Read files
            while (($folder = readdir($dhf)) !== false){
             if($folder != '' && $folder != '.' && $folder != '..'){
              // Image path
              $folder_path = $folder_dir . "/" . $folder;
              // Check its not folder and it is image file
              if(is_dir($folder_path)){

                  /*echo '<script language="javascript">';
                                echo "alert('$folder')";
                                echo '</script>';*/
           ?>

          <div class="hidden-gallery hidden" id= '<?php echo $folder . "-gallery"?>'>
            <div class="gallery-triangle">
              <img src=".\resources\icons\triangle.png" style="width:100%;height:auto;">
            </div>
            <div class="gallery-container" id= '<?php echo $folder . "-gallery-container"?>'>
              <a id='<?php echo $folder?>'></a>
              <?php
               // Image extensions
               $image_extensions = array("png","jpg","jpeg","gif", "JPG");
               // Target directory
               $dir = $folder_dir . '/' . $folder . '/Icons';
               if (is_dir($dir)){

                if ($dh = opendir($dir)){
                 $count = 1;
                 // Read files
                 while (($file = readdir($dh)) !== false){
                  if($file != '' && $file != '.' && $file != '..'){
                   // Image path
                   $image_path = $dir . "/" . $file;
                   $image_ext = pathinfo($image_path, PATHINFO_EXTENSION);
                   // Check its not folder and it is image file
                   if(!is_dir($image_path) &&
                      in_array($image_ext,$image_extensions)){
                ?>
                    <!-- Image -->
                    <div class="gallery-image-container">
                      <img id= '<?php echo $file?>' onclick="openModal('<?php echo $file; ?>');" src='<?php echo $image_path; ?>' class='<?php echo "gallery-image " . $folder . "-gallery-image"?>'>
                      <div class="blog-image-caption-container">
                        <p>Nachiket</p>
                      </div>
                    </div>
                    <!-- --- -->
                    <?php
                    $count++;
                   }
                  }

                 }
                 closedir($dh);
                }
              }?>
            </div>
          </div><?php
              }
              $folder_count++;
             }

            }
           }
          }
          closedir($dhf);
              ?>
        </div>
      </div>
    </div>

    <?php require "footer.html"?>
      <script src="./resources/js/gallery.js"></script>
      <script src="./resources/js/index.js"></script>
  </body>
</html>
