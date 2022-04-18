<?php /* Template Name: Main-Page */
get_header();
$post_id = get_the_ID();
?>
<main id="main" class="main">
    <article class="article">
        <section class="banner">
            <div class="banner__bg">
                <img src="<?php echo get_field('fon_bloka', $post_id); ?>" alt="<?php echo get_field('zagolovok_bloka', $post_id); ?>">
            </div>
            <div class="banner__dec">
                <img src="<?php echo get_template_directory_uri() . '/images/dec-top-right.svg'?>" alt="">
            </div>
            <div class="banner__container main-container">
                <h1 class="main-title banner__title">
                    <?php echo get_field('zagolovok_bloka', $post_id); ?>
                </h1>
                <div class="banner__content">
                    <?php echo get_field('banner_content', $post_id); ?>
                </div>
                <div class="banner__donate">
                    <div class="banner__donate-btn button button-donate">
                        <?php echo get_field('knopka_donat_nadpis_na_knopke', $post_id); ?>
                    </div>
                </div>
                <div class="banner__popup">
                    <div class="main-container">
                        <div class="banner__popup-btn js-popup">
                            <?php echo get_field('nadpis_na_knopku_pochemu_donat', $post_id); ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="content__container main-container">

            </div>
        </section>
    </article>
</main>
<?php

get_footer();
