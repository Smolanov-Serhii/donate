<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package donate
 */

?>

	<footer id="footer" class="footer">
        <div class="footer__container main-container">
            <div class="footer__logo-mobile">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <img src="<?php echo get_template_directory_uri() . '/images/footer-mobile.svg'?>" class="footer-mobile">
                </a>
            </div>
            <div class="footer__logo">
                <img src="<?php echo get_template_directory_uri() . '/images/logo-footer-left.svg'?>" class="logo-left">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <?php the_custom_logo(); ?>
                </a>
            </div>
            <div class="footer__phones">
                <img src="<?php echo get_template_directory_uri() . '/images/phone.svg'?>" alt="phones">
                <a href="tel:<?php echo get_field('telefon_1', 'options')?>"><?php echo get_field('telefon_1', 'options')?></a>
                <span>|</span>
                <a href="tel:<?php echo get_field('telefon_2', 'options')?>"><?php echo get_field('telefon_2', 'options')?></a>
            </div>
            <div class="footer__email">
                <img src="<?php echo get_template_directory_uri() . '/images/mail.svg'?>" alt="email">
                <a href="mailto:<?php echo get_field('e-mail', 'options')?>"><?php echo get_field('e-mail', 'options')?></a>
            </div>
            <div class="footer__socials">
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
        </div>
	</footer>
<img src="<?php echo get_template_directory_uri() . '/images/dec-bottom-right.svg'?>" class="dec-right">

<?php wp_footer(); ?>

</body>
</html>
