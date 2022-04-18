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
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<header id="header" class="header">
		<div class="header__logo">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                <?php the_custom_logo(); ?>
            </a>
		</div>
        <div class="header__contacts">

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
	</header>
