
$(document).ready(function() {
    console.log('file path: /inc/scripts2');
    if($(window).width() < 1201){
        $('.blank-hexagon-el').remove();
    }
    window.count_POSTS_1 = 0;
    window.count_POSTS_2 = 0;
    window.common_count = 0;
    post_learning();
    equalheight('#learning-amb .child-pages-inner h3');
    equalheight('.child-amb-text');
    equalheight('.child-amb-text_2');

    $('#learning-amb #block-1-fa .fa,#learning-amb #block-2-fa .fa').on('click',function(){

        var par_id = $(this).parent().attr('class');
        post_learning_action($(this).attr('class'),par_id);
    });

    if($('#hexagon').length > 0) {
        /* Filler hexagon removal and replacement */
        window.hex_filler = $('.blank-hex-el').clone();
        if ($(window).width() < 1201) {
            $('.blank-hex-el').remove();
        }
    }

});
$(window).resize(function() {
if($('#hexagon').length == 0) {
    equalheight('#learning-amb .child-pages-inner h3');
    post_learning();
}
/* Filler hexagon removal and replacement */
if($('#hexagon').length > 0) {
    if ($(window).width() < 1201) {
        $('.blank-hexagon-el').remove();
    }
}

});

// Set up posts function
function post_learning(){
var post_container  = $('.post-contain-amb');
var post_inside_con = $('.post-item-amb');
var contain_size 	= post_container.width() / 2 + -39;
var main_container  = $('#learning-amb');
var btn_rt		    = $('.post-contain-amb .fa-arrow-circle-right');
var post_inner		= $('.post-contain-amb-inner');
var height_adjust = post_inside_con.outerHeight() + 200;
window.win = $(window).width();

switch(true){
    case (win > 1900) :
        window.main_con_hight	= post_container.height() * 2 - 230;
        break;
    case (win < 1500 && win > 1200) :
        window.main_con_hight	= post_container.height() * 2 ;
        break;
    case (win < 1200 && win > 768) :
        window.main_con_hight	= post_container.height()* 2;
        break;
}

/** Call Post function 1 */

if($('#hexagon').length == 0){
    if($(window).width() > 768){
        post_inside_con.css({
            'width' : contain_size+'px',
            'margin-right' : '40px'
        });


        post_inner.css({
            'height' : height_adjust+'px'
        })
        if($('#hexagon').length == 0) {
            $('#learning-amb .page-container-amb').css({
                'height': main_con_hight + 'px'
            });
        }

    }else{
        post_inside_con.css({
            'width' : post_container.width()+'px'
        });
    }
}


if($(window).width() < 600){
    post_inside_con = post_inside_con.outerHeight() +100;
    post_container.css({
        'height' : post_inside_con+'px'
    })
}
var resizeId;
$(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 500);
});

function doneResizing(){
    var post_container  = $('.post-contain-amb');
    var post_inside_con = $('.post-item-amb');
    var contain_size 	= post_container.width() / 2 - 39;
    var main_container  = $('#learning-amb');
    var btn_rt		    = $('.post-contain-amb .fa-arrow-circle-right');
    var post_inner		= $('.post-contain-amb-inner');
    var height_adjust = post_inside_con.outerHeight() + 200;

    if($(window).width() > 1028){
        main_con_hight = $('.side-bar-amb-learn').outerHeight() + 300;
        if($('#hexagon').length == 0) {
            $('#learning-amb .page-container-amb').css({
                'height': main_con_hight + 'px'
            });
        }
        var inner_hi = $('.post-item-amb').height() +100;
        post_inner.css({
            'height' : inner_hi+'px'
        })
    }

    if($(window).width() < 1028){
        main_con_hight_var = ($('.post-contain-amb-inner').outerHeight() * 2) + $('.side-bar-amb-learn').outerHeight() + 200;
        if($('#hexagon').length == 0) {
            $('#learning-amb .page-container-amb').css({
                'height': main_con_hight_var + 'px'
            });
        }
    }
    if($(window).width() > 600){
        post_inside_con.css({
            'width' : contain_size+'px',
            'margin-right' : '40px'
        });

    }else{
        if($('#hexagon').length == 0) {
            $('#learning-amb .page-container-amb').css({
                'height': 'auto'
            });
        }
        post_inside_con.css({
            'width' : post_container.width()+'px'
        });
    }
    // Set Items Back
    count_POSTS_1 = 0;
    count_POSTS_2 = 0;
    common_count = 0
    post_inside_con.animate({
        'left': '0px'
    },500);

    // Start of common addictions
    var common_main_box = $(' .rotator').width();
    var common_size = common_main_box / 4;
    var common_size_ipad = common_main_box / 2;
    var common_size_mobile = common_main_box;
    var post_container  = $('.post-contain-amb');

    if($(window).width() > 768){
        common_size = common_size;
    }
    if($(window).width() < 1458 && $(window).width() > 450){
        common_size = common_size_ipad;
    }if($(window).width() < 450){
        common_size = common_size_mobile;
    }

    $('.rotator-item').css({
        'width' : common_size+'px'
    });
    $('.rotator-item').animate({
        'left': '0px'
    },500);
    equalheight('#learning-amb .child-pages-inner h3');
    equalheight('.child-amb-text');
    equalheight('.child-amb-text_2');

}
if($(window).width() < 1015){

}
}


// Start of common addictions
var common_main_box = $(' .rotator').width();
var common_size = common_main_box / 4;
var common_size_ipad = common_main_box / 2;
var common_size_mobile = common_main_box;
var post_container  = $('.post-contain-amb');

if($(window).width() > 768){
common_size = common_size;
}
if($(window).width() < 1458 && $(window).width() > 450){
common_size = common_size_ipad;
}if($(window).width() < 450){
common_size = common_size_mobile;
}

$('.rotator-item').css({
'width' : common_size+'px'
});

$('.fa-chevron-right').on('click',function(){
if(common_count >= 0 && common_count < $('.rotator-item').length - 1){
    $('.rotator-item').stop().animate({
        'position':'relative',
        'left': '-='+common_size+'px'
    },500);
    common_count++;
}
});
$('.fa-chevron-left').on('click',function(){
if(common_count != 0){
    $('.rotator-item').stop().animate({
        'position':'relative',
        'left': '+='+common_size+'px'
    },500);
    common_count = common_count - 1;
}
});

// End of common addictions
function post_learning_action(click_val,par_id){

// Function variables
var post_container  = $('.post-contain-amb');
var post_inside_con = $('.post-item-amb');
var contain_size 	= post_container.width() / 2;
var main_container  = $('#learning-amb');
var qty_1			= $('.post-item-amb.post-item-1-move').length;
var qty_2			= $('.post-item-amb.post-item-2-move').length;
var btn_rt		    = $('.post-contain-amb .fa-arrow-circle-right');

qty_out(qty_2);

function qty_out(qty_val){
    if( qty_val % 2 === 0){
        qty_val = qty_val;
        return 	qty_val;
    }else{
        qty_val = qty_val - 1;
        return 	qty_val;
    }
}

if($(window).width()<768){
    contain_size 	= post_container.width();
}

// If clicked to go right
if(click_val === 'fa fa-arrow-circle-right'){

    if(par_id === 'post-item-1-move' && count_POSTS_1 != qty_out(qty_1)){
        $('.'+par_id).animate({
            'left': '-='+contain_size+'px'
        },500);
        count_POSTS_1++;
    }
    if(par_id === 'post-item-2-move' && count_POSTS_2 != qty_out(qty_2)){
        $('.'+par_id).animate({
            'left': '-='+contain_size+'px'
        },500);
        count_POSTS_2++
    }
}

// If clicked to go left
if(click_val === 'fa fa-arrow-circle-left'){

    if(par_id === 'post-item-1-move' && count_POSTS_1 != 0){
        $('.'+par_id).animate({
            'left': '+='+contain_size+'px'
        },500);
        count_POSTS_1 = count_POSTS_1 - 1;

    }
    if(par_id === 'post-item-2-move' && count_POSTS_2 != 0){
        $('.'+par_id).animate({
            'left': '+='+contain_size+'px'
        },500);
        count_POSTS_2 = count_POSTS_2 - 1;

    }
}


}

//Equal Heights
equalheight = function(container){

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}
