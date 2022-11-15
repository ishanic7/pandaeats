$(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });


$('.list .btn').click(function(){

    $(this).addClass('btn active').siblings().removeClass('active');

    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
        $('.menu .image').show(400);
    }else{
        $('.menu .image').not('.'+filter).hide(200);
        $('.menu .image').filter('.'+filter).show(400);
    }

});

});