<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package donate
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Raleway:wght@100;300;400;500;700&display=swap" rel="stylesheet">
	<?php wp_head(); ?>
</head>
<script>
    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 500);

    }
</script>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<body class="page-{{ $page->seo->alias }}">
<div class="preloader">
    <div class="preloader__row">
        <div class="preloader__item"></div>
        <div class="preloader__item"></div>
    </div>
</div>
	<header id="header" class="header">
        <div class="header__container main-container">
            <div class="header__logo-mobile">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <img src="<?php echo get_template_directory_uri() . '/images/logo-mobile.svg'?>" class="logo-mobile">
                </a>
            </div>
            <div class="header__logo">
                <img src="<?php echo get_template_directory_uri() . '/images/logo-header-left.svg'?>" class="logo-left">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <?php the_custom_logo(); ?>
                </a>
                <img src="<?php echo get_template_directory_uri() . '/images/logo-header-right.svg'?>" class="logo-right">
            </div>
            <div class="header__phones">
                <img src="<?php echo get_template_directory_uri() . '/images/phone.svg'?>" alt="phones">
                <a href="tel:<?php echo get_field('telefon_1', 'options')?>"><?php echo get_field('telefon_1', 'options')?></a>
                <span>|</span>
                <a href="tel:<?php echo get_field('telefon_2', 'options')?>"><?php echo get_field('telefon_2', 'options')?></a>
            </div>
            <div class="header__email">
                <img src="<?php echo get_template_directory_uri() . '/images/mail.svg'?>" alt="email">
                <a href="mailto:<?php echo get_field('e-mail', 'options')?>"><?php echo get_field('e-mail', 'options')?></a>
            </div>
            <div class="header__socials">
                <?php
                if(get_field('facebook', 'options')){
                    ?>
                    <a href="<?php echo get_field('facebook', 'options')?>" target="_blank">
                        <img src="<?php echo get_template_directory_uri() . '/images/facebook.svg'?>" alt="facebook">
                    </a>
                    <?php
                }
                if(get_field('youtube', 'options')){
                    ?>
                    <a href="<?php echo get_field('youtube', 'options')?>" target="_blank">
                        <img src="<?php echo get_template_directory_uri() . '/images/youtube.svg'?>" alt="youtube">
                    </a>
                    <?php
                }
                if(get_field('telegram', 'options')){
                    ?>
                    <a href="<?php echo get_field('telegram', 'options')?>" target="_blank">
                        <img src="<?php echo get_template_directory_uri() . '/images/telegram.svg'?>" alt="telegram">
                    </a>
                    <?php
                }
                ?>

            </div>
            <!--		<nav class="header__nav">-->
            <!--			--><?php
            //			wp_nav_menu(
            //				array(
            //					'theme_location' => 'main-menu',
            //					'menu_id'        => 'main-menu',
            //				)
            //			);
            //			?>
            <!--		</nav>-->
            <?php dynamic_sidebar( 'locale' ); ?>
        </div>
	</header>
