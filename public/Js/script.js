$(document).ready(function(){
    $('.carousel-container').slick({
        infinite: true,
        slidesToShow: 4, // Cambia este valor según cuántos elementos quieras mostrar a la vez
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Velocidad de cambio de diapositivas en milisegundos
        prevArrow: '<button type="button" id="slick-prev" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" id ="slick-next" class="slick-next">Nexts</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});