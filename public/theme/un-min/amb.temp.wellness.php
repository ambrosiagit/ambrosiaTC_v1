<?php
/**
 * Template Name:  AMB Wellness
 *
 * @author         Mike Giammatei
 */
/* Page Boolean */
$page_css = "wellness";
if(isset($_GET['test'])){
    $show_errors = TRUE;
}
get_header();
$year_range = 1;
$since_date = strtotime('now');
$until_date = strtotime("+8 week");
// unix timestamp years
$since_unix_timestamp = $since_date;
$until_unix_timestamp = $until_date;
$ambrosia_alumni_event_fields="id,name,description,timezone,start_time";
$access_token = "EAACZA0mf9oWQBAOLysHL1jVAA692vscDG7feODfPqZCjY5SKyWeZAZBjZCerkN3nZCE4YOe3TFauhnZAmhLMMjE02MkRkug71dIxAN7RmviQdnFcRzMufTS4UKClb6I6L8xBTaiWC7lt0HQRsUSFfXI";
/* Script for Alumni event data */
$fb_page_id_alumni = "382816741740214";
$ambrosia_alumni_event_json_link = "https://graph.facebook.com/{$fb_page_id_alumni}/events/?fields={$ambrosia_alumni_event_fields}&access_token={$access_token}&since={$since_unix_timestamp}&until={$until_unix_timestamp}";
$json_alumni = file_get_contents($ambrosia_alumni_event_json_link);
$ambrosia_alumni_event_obj = json_decode($json_alumni, true, 512, JSON_BIGINT_AS_STRING);

/* Script for Family event data */
$ambrosia_main_event_fields="id,name,description,place,timezone,start_time,cover";
$access_token = "EAACZA0mf9oWQBAERAGWBKkM9iK8Kjt7cp4JZAnZAe9mfiZC3BrJ3bsvZCZBQ5WFdTnoxTwRKfzHPY1eTkxwIhLq5BBifZCZAxyTZBmkmWF0nUwgM6Uayl1UX7kvvZCH8YJCU5RpN7UXZAAPxl7HfCW4R4ZBZAHEePjvBZCLkIGm3EI6NqkUgZDZD";
$fb_page_id = "177253956574";
$ambrosia_main_event_json_link = "https://graph.facebook.com/{$fb_page_id}/events/attending/?fields={$ambrosia_main_event_fields}&access_token={$access_token}&since={$since_unix_timestamp}&until={$until_unix_timestamp}";
$json = file_get_contents($ambrosia_main_event_json_link);
$ambrosia_main_event_obj = json_decode($json, true, 512, JSON_BIGINT_AS_STRING);
?>
    <div id="wellness">
        <section class="row amb-header-bg">
            <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                <div class="row head-box">
                    <div class="col-sm-9">
                        <h1 class="amb-subpage-title ">24/7 Free, Personal Support & Resources</h1>
                    </div>
                    <div class="col-sm-3">
                        <div class="call-btn">
                            <a href="tel:+18884920489">888.492.0489</a>
                            DIRECT LINE TO WELLNESS
                        </div>
                    </div>
                </div>
                <div class="row head-box2">
                    <div class="col-sm-3">
                        <p class="sub-head">You are not alone</p>
                    </div>
                    <div class="col-sm-9">
                        <div class="filler-line">
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <p>Addiction can be very isolating, for both the addict and loved ones. It’s hard not knowing what to do or who to turn to. That’s where the Wellness team can help. Staffed with both licensed counselors and trained life coaches with years of personal experience in recovery, you always have support from someone who understands and will keep you accountable.</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="amb-top-effect"></div>
    </div>
    <div id="wellness">
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                <div class="row">
                    <div class="col-md-12">
                        <div class="content-amb">
                            <h2>Family Wellness</h2>
                        </div>
                        <div class="logins">
                            <div class="col-xs-6">
                                <a class="therapy-amb-btn" href="/etherapy-live">E-therapy</a>
                                <a class="therapy-amb-btn" href="/addiction">Learning Center</a>
                            </div>
                            <div class="col-xs-6">
                                <a class="therapy-login" href="http://iambrosia.com">Alumni Wellness</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-8">
                                <div class="main-left-con">
                                    <p>Whether looking for help to get your loved one to treatment, information on what to expect during treatment, or advice for suspected relapse, your dedicated Wellness team member will be there to help you support recovery, not addiction.</p>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="md-box-amb">
                                                <img src="/images/24hour.png" alt="24 hour help" />
                                                <p>24/7 Text, Call & Email Personal Support</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="md-box-amb">
                                                <img src="/images/free-wifi.png" alt="Free Wifi" />
                                                <p>E-Therapy Sessions with Licensed Professionals</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="md-box-amb">
                                                <img src="/images/conference.png" alt="Family Conference" />
                                                <p>Family Conference Calls to Mediate Issues</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="md-box-amb">
                                                <img src="/images/peer-to-peer.png" alt="Peer to Peer" />
                                                <p>Local Group, Sponsor & Therapist Matching</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="md-box-amb">
                                                <img src="/images/amb-support.png" alt="Support" />
                                                <p>Personalized, Timely Education Articles</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="md-box-amb">
                                                <img src="/images/bi-weekly.png" alt="Bi Weekly Support" />
                                                <p>Bi-weekly Support Groups & Lectures</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="main-right-con">
                                    <p>Research shows the chances of a client’s recovery increases with loved ones actively involved. However, some co-dependency behaviors can actually help sustain addiction. </p><p>The Family Wellness Program helps answer questions, such as:</p>
                                    <ul>
                                        <li>How do I support without enabling?</li>
                                        <li>How do I encourage without triggering?</li>
                                        <li>How do I communicate without my loved one becoming defensive?</li>
                                        <li>How can I support myself and deal with my own emotions?</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <?php /*
                        <div class="family-events">
                            <div class="row">
                                <div class="content-amb">
                                    <h2>Family Support Groups</h2>
                                    <?php
                                    $ambrosia_main_event_obj_reverse = array_reverse($ambrosia_main_event_obj['data']);
                                    foreach($ambrosia_main_event_obj_reverse as $family_event): ;
                                        // set timezone
                                        date_default_timezone_set($family_event['timezone']);
                                        ?>
                                        <div class="col-sm-6 equal-event" id="even-count">
                                            <div class="row event-amb">
                                                <div class="col-xs-2 sm-text">
                                                    <?php
                                                    $ts = strtotime($family_event['start_time']);
                                                    ?>
                                                    <p><?php echo date('j', $ts); ?></p>
                                                    <p><?php echo date('M', $ts); ?></p>
                                                    <a href="https://www.facebook.com/events/<?php echo $family_event['id'] ?>" class="link-facebook" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i> </a>
                                                </div>
                                                <div class="col-xs-10">
                                                    <p class="blue-txt"><?php echo $family_event['name']; ?></p>
                                                    <p class="gray-txt"><?php echo $family_event['place']['name']; ?></p>
                                                </div>
                                            </div>
                                        </div>
                                    <?php	endforeach; ?>
                                </div>
                            </div>
                        </div>
                        */ ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" id="wellness-fold-2">
            <div class="wellness-testi-box">
                <div class="row">
                    <div class="col-lg-10 col-lg-offset-1 col-md-12">
                        <?php echo do_shortcode('[Ambrosia_testimonial tags="Wellness" version="2 column" heading="Hear From Other Families" top_color="#006493" style="2"]'); ?>
                    </div>
                </div>
            </div>
        </div><br><br>
        <div class="row" id="wellness-fold-3">
            <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                <h2>Alumni  Wellness</h2>
                <div class="col-sm-6">
                    <p>Even after treatment, you always have someone in your corner that understands and is dedicated to your sobriety.</p>

                    <ul>
                        <li>24/7 personal support and advice</li>
                        <li>Finding local meetings or support</li>
                        <li>Sponsorship coordination</li>
                        <li>Fun monthly events</li>
                        <li>Bi-weekly support groups and lectures</li>
                </div>
                <div class="col-sm-6">
                    <div class="row" id="alumni">
                        <div class="col-sm-3">
                            <img src="/images/joe-wellness-program.jpg" alt="Alumni Coordinator">
                        </div>
                        <div class="col-sm-9">
                            <p class="center-sm">Joe A  <i class="fa fa-circle sm-dot" aria-hidden="true"></i>Alumni Coordinator</p>
                            <p>Being an alumni myself, I know how important it is to stay engaged and have fun without drugs or alcohol. I am proud to be a "success story" and a resource for those just out of treatment. Having continued accountability from people who truly understand is crucial." </p>
                            <p>3/10/2016 <i class="fa fa-circle sm-dot" aria-hidden="true"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">

                    <div class="alumni-events">
                        <div class="row">
                            <div class="content-amb amb-white-bg">
                                <h2>Alumni Events</h2>
                                <?php
                                $ambrosia_alumni_event_obj_reverse = array_reverse($ambrosia_alumni_event_obj['data']);
                                foreach($ambrosia_alumni_event_obj_reverse as $alumni_event): ;
                                    // set timezone
                                    date_default_timezone_set($alumni_event['timezone']);
                                    ?>
                                    <div class="col-sm-6 equal-event" id="even-count">
                                        <div class="row event-amb">
                                            <div class="col-xs-2 sm-text">
                                                <?php
                                                $ts1 = strtotime($alumni_event['start_time']);
                                                ?>
                                                <p><?php echo date('j', $ts1); ?></p>
                                                <p><?php echo date('M', $ts1); ?></p>
                                                <a href="https://www.facebook.com/events/<?php echo $alumni_event['id'] ?>" class="link-facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                            </div>
                                            <div class="col-xs-10">
                                                <p class="blue-txt"><?php echo $alumni_event['name']; ?></p>
                                                <p class="gray-txt"><?php echo wp_trim_words($alumni_event['description'], 15, '...' ); ?></p>
                                            </div>
                                        </div>
                                    </div>
                                <?php	endforeach;
                                ?>
                                <div class="pixel-fix-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php get_footer(); ?>