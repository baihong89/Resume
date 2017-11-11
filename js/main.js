$(function() {
    var swiper1 = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination',
        effect: 'flip',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    var swiper2 = new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        loop: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });


    autoScreen();
    window.onresize = function() {
        autoScreen();

    }

    function autoScreen() {
        if (myClient().width <= 768) {
            document.querySelector('#mycss').href = "css/phone.css";
            document.querySelector('#exp1').style.display = 'none';
            document.querySelector('#exp2').style.display = 'block';
            document.querySelector('#zuopin1').style.display = 'none';
            document.querySelector('#zuopin2').style.display = 'block';
            console.log(myClient().width);

        } else {
            document.querySelector('#mycss').href = "css/index.css";
            document.querySelector('#exp1').style.display = 'block';
            document.querySelector('#exp2').style.display = 'none';
            document.querySelector('#zuopin1').style.display = 'block';
            document.querySelector('#zuopin2').style.display = 'none';


        }
    }

    function myClient() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ||
                0,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ||
                0
        };
    }
})