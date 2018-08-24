<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
</script>






<div id="flip">

  <p><Strong>FOOT TRAFFIC</strong><p>

  <p>We are <strong>Foot Traffic</strong>, a company founded in 2010 by three passionate young men, who shared a common love for stylish footware.
    Realising that the shoes they wanted and admired were simply unaffordable, and that no other company offered the service that they were looking for,
    they took it upon themselves to find a solution. <strong>Foot Traffic</strong> was born as a result, and has continued to grow ever since.
    <br><br>
    <strong>Click to find out more</strong></p></div>

<div id="panel">

    <h1>Why <strong>Foot Traffic?</strong></h1>
    <p>We aim to achieve a very large customer base who will want to experience our amazing products and excellent customer service,
      whether it be by visiting us online or coming to one of our stores,
      to look, to buy and to wear our shoes, hence <strong>"Foot Traffic"</strong><p>

    <h1>Why Choose Us?</h1>
    <p><strong>Foot Traffic</strong> offers something that other companies fail to do: putting luxury products in the hands of everyone.<br>
       We do this by offering premium products at affordable prices.</p>

</div><br>





<div class="row">
  <div class="column">
    <img id="myImg1" src="fake-nike-mags-power-lacing-0.jpg" alt="Nike Air Mags Power Lacing" style="width:100%" height="250px" onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
  </div>
  <div class="column">
    <img id="myImg2" src="yeezy-ii-red-october_hq.jpg" alt="Yeezy II Red October" style="width:100%" height="250px" onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
  </div>
  <div class="column">
    <img id="myImg3" src="Air_Jordan_4_Retro_Carhartt_X_Eminem.jpg" alt="Air Jordan 4 Retro 'Carhartt X Eminem'" style="width:100%" height="250px" onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
  </div>
</div>

<br><br>

<div class="row">
  <div class="column">
    <img id="myImg4" src="Kendrick_Lamar_Kung_Fu_Kenny_Nike_Cortez.jpg" alt="Kendrick Lamar 'Kung Fu Kenny' Nike Cortez" style="width:100%" height="250px" onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
  </div>
  <div class="column">
    <img id="myImg5" src="The_Adidas_x_Run–DMC_25th_Anniversary_Superstar.jpg" alt="The Adidas x Run–DMC 25th Anniversary Superstar" style="width:100%" height="250px" onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
  </div>
  <div class="column">
    <img id="myImg6" src="Nike_Air_Jordan_I.jpg" alt="Nike Air Jordan I" style="width:100%" height="250px" onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
  </div>
</div>

<!-- <br><br>
<h1>Hello World!</h1> -->

<div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">

    <div class="mySlides">
      <div class="numbertext">1 / 6</div>
      <img id="myImg1" src="fake-nike-mags-power-lacing-0.jpg" alt="Nike Air Mags Power Lacing" style="width:100%" height="500px">
    </div>

    <div class="mySlides">
      <div class="numbertext">2 / 6</div>
      <img id="myImg2" src="yeezy-ii-red-october_hq.jpg" alt="Yeezy II Red October" style="width:100%" height="500px">
    </div>

    <div class="mySlides">
      <div class="numbertext">3 / 6</div>
      <img id="myImg3" src="Air_Jordan_4_Retro_Carhartt_X_Eminem.jpg" alt="Air Jordan 4 Retro 'Carhartt X Eminem'" style="width:100%" height="500px">
    </div>

    <div class="mySlides">
      <div class="numbertext">4 / 6</div>
      <img id="myImg4" src="Kendrick_Lamar_Kung_Fu_Kenny_Nike_Cortez.jpg" alt="Kendrick Lamar 'Kung Fu Kenny' Nike Cortez" style="width:100%" height="500px">
    </div>

    <div class="mySlides">
      <div class="numbertext">5 / 6</div>
      <img id="myImg5" src="The_Adidas_x_Run–DMC_25th_Anniversary_Superstar.jpg" alt="The Adidas x Run–DMC 25th Anniversary Superstar" style="width:100%" height="500px">
    </div>

    <div class="mySlides">
      <div class="numbertext">6 / 6</div>
      <img id="myImg6" src="Nike_Air_Jordan_I.jpg" alt="Nike Air Jordan I" style="width:100%" height="500px">
    </div>

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <div class="caption-container">
      <p id="caption"></p>
    </div>

    <!-- <style>

    .col-container {
      display: flex;
      width: 100%;
    }
    .col {
      flex: 1;
      padding: 16px;
    }

    </style> -->

<div class="row">
    <div class="column">
      <img class="demo cursor" src="fake-nike-mags-power-lacing-0.jpg" style="width:100%" height="100px" onclick="currentSlide(1)" alt="Nike Air Mags Power Lacing">
    </div>
    <div class="column">
      <img class="demo cursor" src="yeezy-ii-red-october_hq.jpg" style="width:100%" height="100px" onclick="currentSlide(2)" alt="Yeezy II Red October">
    </div>
    <div class="column">
      <img class="demo cursor" src="Air_Jordan_4_Retro_Carhartt_X_Eminem.jpg" style="width:100%" height="100px" onclick="currentSlide(3)" alt="Air Jordan 4 Retro 'Carhartt X Eminem'">
    </div>
    <div class="column">
      <img class="demo cursor" src="Kendrick_Lamar_Kung_Fu_Kenny_Nike_Cortez.jpg" style="width:100%" height="100px" onclick="currentSlide(4)" alt="Kendrick Lamar 'Kung Fu Kenny' Nike Cortez">
    </div>
    <div class="column">
      <img class="demo cursor" src="The_Adidas_x_Run–DMC_25th_Anniversary_Superstar.jpg" style="width:100%" height="100px" onclick="currentSlide(5)" alt="The Adidas x Run–DMC 25th Anniversary Superstar">
    </div>
    <div class="column">
      <img class="demo cursor" src="Nike_Air_Jordan_I.jpg" style="width:100%" height="100px" onclick="currentSlide(6)" alt="Nike Air Jordan I">
    </div>
  </div>













<script>
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
      </script>
