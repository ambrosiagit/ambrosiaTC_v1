<?php
/**
 * Template Name: Learning Center
 *
 * Author: Michael Giammattei
 */
$sidebar_style = TRUE;
$learning_center = TRUE;
$page_css = 'learning-center';
get_header(); ?> <?php
$feature_bg = get_field('header_background_image');
if(!$feature_bg){$feature_bg = "/wp-content/uploads/layout/learing-center-bg-amb.jpg";}
$page_thumbnail = get_field('default_thumbnail');
if(!$page_thumbnail){$page_thumbnail = "/wp-content/uploads/2015/12/photo-coming-soon.jpg";}
$block_one_title = get_field('block_one_title');
$block_two_title = get_field('block_two_title');
$block_three_title = get_field('block_three_title');

$learning_center = TRUE;
?><hr class="hr-shadow-aaa"><div class="fluid-container" id="learning-amb"><div class="row"><div class="col-lg-10 col-lg-offset-1"><h1><?php echo get_the_title();?></h1><div class="site-bar-white"></div></div><div class="page-container-amb" style="background-image:url(<?php echo $feature_bg; ?>);"><div class="col-lg-10 col-lg-offset-1 child-pages-boxed"><div class="row pad-20"><div class="col-md-8"><div class="row"><div class="post-contain-amb"><ul id="hexagon"><li class="hexagon"><a class="hexagonIn" href="/addiction/family-resources/"><div class="hexagon-hover"></div><div class="hexagon-bg green-hexagon"><div class="hexagon-bg-inner"><h3>Family resources</h3><p>Everything loved ones need to know</p></div></div></a></li><li class="hexagon blank-hexagon-el"><a class="hexagonIn"><div class="hexagon-bg locations-hexagon"></div></a></li><li class="hexagon"><a class="hexagonIn" href="/addiction/news/"><div class="hexagon-hover"></div><div class="hexagon-bg gray-hexagon"><h3>Company News</h3><p>Keep up-to-date as we fight to end addiction</p></div></a></li><li class="hexagon"><div class="hexagon-hover"></div><a class="hexagonIn" href="/we-do-recover/"><div class="hexagon-hover"></div><div class="hexagon-bg green-hexagon"><h3>We Do Recovery</h3><p>Hear stories of hope and inspiration</p></div></a></li><li class="hexagon"><div class="hexagon-hover"></div><a class="hexagonIn" href="/we-do-recover/corporate-program/"><div class="hexagon-hover"></div><div class="hexagon-bg gray-hexagon"><h3>For Corporations</h3><p>Addiction is costing you money</p></div></a></li><li class="hexagon blank-hexagon-el"><a class="hexagonIn"><div class="hexagon-bg clipboard-hexagon"></div></a></li><li class="hexagon mobile-hd"><a class="hexagonIn" href="/rehab/"><div class="hexagon-hover"></div><div class="hexagon-bg gray-hexagon"><h3>Getting Started</h3><p>Find out how the process works</p></div></a></li></ul></div></div><div class="clearfix"></div></div><div class="col-md-4"> <?php get_sidebar(); ?></div></div></div></div></div><div class="row" id="types-of-addiction"><div class="col-lg-10 col-lg-offset-1"><div class="row"><div class="col-md-4 v_1 text-center"><h4 class="common_h4"><?php echo $block_three_title; ?></h4><div class="rotator"><div class="rotator-inner"><i class="fa fa-backward off"></i> <?php
                            $query = new WP_Query(array(
                            'post_type' => 'drug_types',
                            'post_status' => 'publish',
                            'posts_per_page' => -1
                            ));

                            while ($query->have_posts()) :
                            $query->the_post();
                            $post_id = get_the_ID();
                            ?><div class="rotator-item"><div class="img-box-amb"> <a href="<?php the_permalink(); ?>"><?php if(has_post_thumbnail ()){
                                        echo get_the_post_thumbnail();
                                        }else{
                                        echo '<img src="'.$page_thumbnail.'" alt="Learning Center">';
                                        }
                                        ?></a></div><h4><a href="<?php the_permalink(); ?>"><?php echo the_title(); ?></a></h4></div> <?php
                            endwhile;
                            ?><i class="fa fa-forward"></i></div></div></div> <?php
                function recentPosts2() {
                    $rPosts = new WP_Query();
                    $rPosts->query('post_type=post&posts_per_page=12&orderby=date&order=DESC');

                    while ($rPosts->have_posts()) : $rPosts->the_post(); ?><div class="post-item"><div class="row"><div class="col-xs-3"> <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php if ( has_post_thumbnail() ){
                                            $thumb_id = get_post_thumbnail_id();
                                            $thumb_url = wp_get_attachment_image_src($thumb_id,'thumbnail', true);
                                        }else{
                                            $thumb_url = '/wp-content/uploads/2016/05/road-220058_960_720-150x150.jpg';
                                        } if(!is_array($thumb_url)){$thumb_url_val = $thumb_url;}else{ $thumb_url_val = $thumb_url[0];} ?><div class="profile-img" style="background-image: url('<?php echo $thumb_url_val; ?>');"></div></a></div><div class="col-xs-9"><div class="link-text"> <?php
                                            $the_title = preg_replace('/(We Do Recover|Read more)/', '', get_the_title());
                                            $the_title = preg_replace('/>/',"", $the_title);
                                            $the_content = preg_replace('/(We Do Recover|Read more)/', '', get_the_excerpt());
                                            $the_content = preg_replace('/>/',"", $the_content);
                                        ?> <b><a href="<?php the_permalink(); ?>"><?php echo strip_tags(wp_trim_words( $the_title, 10, '...' ));?></a></b><br> <a href="<?php the_permalink(); ?>"><?php echo strip_tags(wp_trim_words( $the_content, 50, '...' ));?></a></div></div></div></div> <?php endwhile;
                    wp_reset_query();

                }  ?><div class="col-md-8 v_1_1" id="sidebar-2"><div class="row"><div class="post-body"><div class="row" id="post-controls"><div class="col-xs-6"><h4 class="common_h4">Latest Articles</h4></div><div class="col-xs-6"><i class="fa fa-forward "></i><i class="fa fa-backward off"></i></div></div><div class="row"><div class="col-md-12"><div class="post-body-inner"> <?php recentPosts2(); ?></div></div></div></div></div><div class="side-bar-amb-learn"><div class="row"><div class="col-md-12"><div class="side-content-amb white"><div class="entry"></div></div></div></div></div></div></div></div></div> <?php /* ### Block 2 updated ###
    <div class="row" id="types-of-addiction">
        <div class="col-lg-10 col-lg-offset-1">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 col-md-12">
                    <h3><?php echo $block_three_title; ?></h3><div class="rotator"><div class="rotator-inner"><i class="fa fa-chevron-left"></i> <?php
                                $query = new WP_Query(array(
                                    'post_type' => 'drug_types',
                                    'post_status' => 'publish',
                                    'posts_per_page' => -1
                                ));

                                while ($query->have_posts()) :
                                    $query->the_post();
                                    $post_id = get_the_ID();
                                    ?><div class="rotator-item"><div class="img-box-amb"> <a href="<?php the_permalink(); ?>"><?php if(has_post_thumbnail ()){
                                            echo get_the_post_thumbnail();
                                        }else{
                                            echo '<img src="'.$page_thumbnail.'" alt="Learning Center">';
                                        }
                                        ?></a></div><h4><a href="<?php the_permalink(); ?>"><?php echo the_title(); ?></a></h4></div> <?php
                                endwhile;
                                ?><i class="fa fa-chevron-right"></i></div></div></div></div></div></div> */ ?></div><div class="clearfix"></div><div id="learning-amb"><div class="sub-footer-amb"><div class="row"><div class="col-lg-10 col-lg-offset-1"><div class="row"><div class="col-md-5"></div><div class="col-md-7"><div class="sub-foot-box"><h4>Never Give Up Hope</h4><p>"The first step toward getting something is to decide that you are not going to stay where you are."</p></div></div></div></div></div></div><div class="container"><div class="row" id="insurance-foot-block"><div class="col-md-6"> <img src="/images/insurance/insuranceBanner1.gif" alt="Insurance"></div><div class="col-md-6"> <img src="/images/insurance/insuranceBanner2.gif" alt="Insurance"></div></div></div></div> <?php
get_footer();
?>