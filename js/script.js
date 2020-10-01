// scroll
var oldOffset=0
var newOffset=0
window.addEventListener("scroll", function () {
    oldOffset=newOffset
    newOffset=window.pageYOffset;
    if (newOffset>oldOffset){
        document.querySelector('#arrow').style.visibility="visible";
    }else if (newOffset<oldOffset&& newOffset===0){
        document.querySelector('#arrow').style.visibility="hidden";
    }

});
// menobar
$(document).ready(function () {

    $('#nav li').hover(
        function () {
            $('ul', this).slideDown(100);
        },
        function () {
            $('ul', this).slideUp(100);
        }
    );

});

// slideshow
$(document).ready(function () {
    var imgItems=$('.slider li').length;
    var imgPos=1;



    for (i=1; i <= imgItems; i++) {
        $('.pagination').append('<li><span class="fas fa-circle"></span></li>');
    }


    $('.slider li').hide();
    $('.slider li:first').show();
    $('.pagination li:first').css({'color':'#cd6e2e'});

    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);

    setInterval(function () {
        nextSlider()
    },4000)

    function  pagination() {
        var paginationPos=$(this).index() + 1;


        $('.slider li').hide();
        $('.slider li:nth-child('+ paginationPos +')').fadeIn();


        $('.pagination li').css({'color':'#858585'});
        $(this).css({'color':'#cd6e2e'});

        imgPos=paginationPos;

    }

    function nextSlider() {
        if (imgPos >= imgItems){imgPos = 1;}
        else {imgPos++;}

        $('.pagination li').css({'color':'#858585'});
        $('.pagination li:nth-child('+ imgPos +')').css({'color':'#cd6e2e'});



        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos  +')').fadeIn();


    }

    function prevSlider() {
        if (imgPos <= 1){imgPos = imgItems;}
        else {imgPos--;}

        $('.pagination li').css({'color':'#858585'});
        $('.pagination li:nth-child('+ imgPos +')').css({'color':'#cd6e2e'});



        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos  +')').fadeIn();


    }
});
// time
setInterval(()=>{

    const time= document.querySelector("#time");
    let date = new Date();
    let hours= date.getHours();
    let minutes= date.getMinutes();
    let seconds= date.getSeconds();
    let day_night ="AM";
    if (hours >12){
        day_night ="PM";
        hours=hours - 12;
    }

    if (hours < 10){
        hours= "0" + hours;
    }


    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds= "0" + seconds;
    }

    time.textContent=hours + ":"+ minutes+":" + seconds +"" + day_night;

});



