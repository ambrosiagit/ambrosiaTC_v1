
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

var windowWidth = $(window).width();
$(window).resize(function() {
    if ($(window).width() != windowWidth) {
        if ($('#hexagon').length == 0) {
            equalheight('#learning-amb .child-pages-inner h3');
            post_learning();
        }
        /* Filler hexagon removal and replacement */
        if ($('#hexagon').length > 0) {
            if ($(window).width() < 1201) {
                $('.blank-hexagon-el').remove();
            }
        }
    }
});
setTimeout(function () {
    post_learning();
},600);
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
        if ($(window).width() != windowWidth) {
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 500);
        }
    });

    function doneResizing(){
        post_display();

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
        var common_size = common_main_box / 2;
        var common_size_ipad = common_main_box / 2;
        var common_size_mobile = common_main_box;
        var post_container  = $('.post-contain-amb');

        var rotator = {
            box: $('.rotator'),
            item: $('.rotator-item'),
            left_icon : $('.v_1 .fa-backward'),
            right_icon : $('.v_1 .fa-forward')
        };

        rotator.left_icon.add(rotator.right_icon).css({
            'height' : rotator.box.outerHeight() +'px',
            'padding-top' : rotator.box.outerHeight() / 2 - 15 +'px'
        });

        if(rotator.box.width() > 768){
            common_size = common_size;
        }
        if(rotator.box.width() < 1458 && $(window).width() > 450){
            common_size = common_size_ipad;
        }if(rotator.box.width() < 450){
            common_size = common_size_mobile;
        }
        rotator.item.css({
            'width' : common_size+'px'
        });
        rotator.item.animate({
            'left': '0px'
        },500);
        equalheight('#learning-amb .child-pages-inner h3');
        equalheight('.child-amb-text');
        equalheight('.child-amb-text_2');
window.common_size = common_size;
    }
}

// Start of common addictions
var common_main_box = $(' .rotator').width();
var common_size = common_main_box / 2;
var common_size_ipad = common_main_box / 2;
var common_size_mobile = common_main_box;
var post_container  = $('.post-contain-amb');

var rotator = {
    box: $('.rotator'),
    item: $('.rotator-item'),
    left_icon : $('.v_1 .fa-backward'),
    right_icon : $('.v_1 .fa-forward')
};

$(document).ready(function () {
    rotator.left_icon.add(rotator.right_icon).css({
        'height' : rotator.box.outerHeight() +'px',
        'padding-top' : rotator.box.outerHeight() / 2 - 15 +'px'
    });
});
if(rotator.box.width() > 768){
    common_size = common_size;
}
if(rotator.box.width() < 450 && $(window).width() > 450){
    common_size = common_size_ipad;
}if(rotator.box.width() < 450){
    common_size = common_size_mobile;
}

rotator.item.css({
    'width' : common_size+'px'
});

rotator.right_icon.on('click',function(){
    if(!rotator.item.is(':animated')) {
        if (common_count >= 0 && common_count < $('.rotator-item').length - 1) {
            rotator.left_icon.removeClass('off');
            rotator.item.stop().animate({
                'position': 'relative',
                'left': '-=' + common_size + 'px'
            }, 500);
            common_count++;
        }
        if (common_count != 0 && common_count > $('.rotator-item').length - 2) {
            $(this).addClass('off');
        }
    }
});
rotator.left_icon.on('click',function(){
    if(!rotator.item.is(':animated')) {
        if (common_count != 0) {
            rotator.right_icon.removeClass('off');
            rotator.item.stop().animate({
                'position': 'relative',
                'left': '+=' + common_size + 'px'
            }, 500);
            common_count = common_count - 1;
        }

        if(common_count <= 0) {
            $(this).addClass('off');
        }
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

/* Post Script */
post_display();
function post_display() {
    var post_obj = {
        body : $('.v_1_1 .post-body'),
        inner : $('.v_1_1 .post-body-inner'),
        item : $('.v_1_1 .post-item'),
        item_count : $('.v_1_1 .post-item').length,
        rotator : $('.rotator'),
        controls : $('#post-controls'),
        right_icon : $('.v_1_1 .fa-forward '),
        left_icon : $('.v_1_1 .fa-backward '),
    };
    var count = 0;

    if ($(window).width() != windowWidth) {
        post_obj.left_icon.addClass('off');
        post_obj.right_icon.removeClass('off');
        count = 0;
    }
    if ($(window).width() != windowWidth) {
        post_obj.inner.animate({'left': '0px'},700, function () {
            count = 0;
        });
        post_obj.right_icon.removeClass('off');
        post_obj.left_icon.addClass('off');
    }
    var body_height = post_obj.rotator.outerHeight() + post_obj.controls.outerHeight();
    post_obj.body.css({'height' : body_height+'px'});

    var item_width = post_obj.body.outerWidth() / 2 - 50;
    if($(window).width() < 992){
        var item_width = post_obj.body.outerWidth() / 2 - 35;
    }
    if($(window).width() < 500){
        var item_width = post_obj.body.outerWidth() - 35;
    }
    post_obj.item.css({'width' : item_width+'px'});

    var inner_width = post_obj.item.width() * post_obj.item_count / 2 + 1000 ;
    post_obj.inner.css({'width' : inner_width +'px'});

   post_obj.body.find('h4').css({'height' : $('.v_1 .common_h4').outerHeight()+'px'});


   post_obj.right_icon.on('click',function () {
       if(!post_obj.inner.is(':animated')){
           if(count < post_obj.item_count / 2 ){
               post_obj.left_icon.removeClass('off');

               var move_left = post_obj.item.outerWidth() + 50;
               if($(window).width() < 992){
                   var move_left = post_obj.item.outerWidth() + 32;
               }
               if($(window).width() < 500){
                   var move_left = post_obj.item.outerWidth() +30;
               }
               post_obj.inner.stop().animate({'left' : '-='+move_left+'px' },700,function () {
                   count++;
               });
           }
       }

       if(count > post_obj.item_count / 2 - 1 ){
           $(this).addClass('off');
       }
   });
    post_obj.left_icon.on('click',function () {
        if(!post_obj.inner.is(':animated')) {
            if (count != 0) {
                post_obj.right_icon.removeClass('off');
                count--;
                var move_right = item_width + 50;
                if($(window).width() < 500){
                    var move_right = post_obj.item.outerWidth() +30;
                }
                post_obj.inner.stop().animate({'left': '+=' + move_right + 'px'}, 700);
            }
        }
        if(count == 0 ){
            $(this).addClass('off');
        }
    });


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
        $($el).height('auto');
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
