
$(document).ready(function() {
    $("#openPopup").click(function() {
        $("#loginPopup").fadeIn();
    });
    $("#closePopup").click(function() {
        $("#loginPopup").fadeOut();
    });
    $(window).click(function(event) {
        if ($(event.target).is("#loginPopup")) {
            $("#loginPopup").fadeOut();
        }
    });
});

//Slider
const $carousel = $("#carousel-track");	
const $copySection = $("#copy-container");
const $backgroundSection = $("#background-section");
const $slides = $carousel.find('.slide');
const $copys = $copySection.find('.copy');
const $backgrounds = $backgroundSection.find('.bg');
const maxSlides = $slides.length;
let currentSlide = 0;
const MoveSlide = (direction = "forwards", number = false) => {
    console.log(direction, number);
    if (number === false){
        if (direction === "forwards"){
            currentSlide = (currentSlide + 1) >= maxSlides ? 0 : currentSlide + 1;
        } else {
            currentSlide = (currentSlide <= 0) ? maxSlides - 1 : currentSlide - 1;
        }
    } else {
        currentSlide = number;
    }
    HandleAnimation(currentSlide);	
}
const HandleAnimation = (currentSlide) => {	
    $slides.each(function(i){
        if (i === currentSlide){
            $(this).addClass("active");
            $copys.eq(i).addClass("active");
            $backgrounds.eq(i).addClass("active");
        } else {
            $(this).removeClass("active");
            $copys.eq(i).removeClass("active");
            $backgrounds.eq(i).removeClass("active");
        }
    });
}
$(".carousel-controls .carousel-left").on("click", function(){
    MoveSlide("backwards");
});
$(".carousel-controls .carousel-right").on("click", function(){
    MoveSlide("forwards");
});
$slides.each(function(i){
    $(this).on("click", function(){
        MoveSlide("forwards", i);
    });
});












