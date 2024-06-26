
    $(document).ready(function(){
        $('.carousel-container').slick({
            infinite: true,
            slidesToShow: 2, // Cambia este valor según cuántos elementos quieras mostrar a la vez
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000, // Velocidad de cambio de diapositivas en milisegundos
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
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

