$(document).ready(function () {
    var speed = 1000;        // fade speed
    var autoswitch = true;  //automatic slide option
    var autoswitch_speed = 4000; //auto slider speed

    $('.slide').first().addClass('active');
    $('.slide').hide();

    //for visible slide
    $('.active').show();

    $('#next').on('click', nextSlide);

    $('#prev').on('click', prevSlide);
   

    if (autoswitch == true) {
        setInterval(nextSlide ,autoswitch_speed);
    };
     
    function nextSlide() {
      
            // alert("btn is clicked"); 
            $('.active').removeClass('active').addClass('oldactive');
            if ($('.oldactive').is(':last-child')) {
                $('.slide').first().addClass('active');
            }
            else {
                $('.oldactive').next().addClass("active");
            }
            $('.oldactive').removeClass('oldactive');
            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed);           
    };

    function prevSlide(){
       
            // alert("btn is clicked"); 
            $('.active').removeClass('active').addClass('oldactive');
            if ($('.oldactive').is(':first-child')) {
                $('.slide').last().addClass('active');
            }
            else {
                $('.oldactive').prev().addClass("active");
            }
            $('.oldactive').removeClass('oldactive');
            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed);        
    };

});