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
                <img src="<?php echo get_template_directory_uri() . '/images/dec-top-right.svg'?>" alt="<?php echo get_field('zagolovok_bloka', $post_id); ?>">
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
                <div class="content__tabs-mobile">
                    <select>
                        <?php
                        if( have_rows('typ_donatov') ):
                            while( have_rows('typ_donatov') ) : the_row();
                                $tab = get_sub_field('vkladka');
                                ?>
                                <option value="<?php echo $tab;?>">
                                    <?php echo $tab;?>
                                </option>
                                <?php
                            endwhile;
                        endif;
                        ?>
                    </select>
                </div>
                <div class="content__tabs">
                    <?php
                    $count = 1;
                    $class = "";
                    if( have_rows('typ_donatov') ):
                        while( have_rows('typ_donatov') ) : the_row();
                            $tab = get_sub_field('vkladka');
                            if($count == 1){
                                $class = "active";
                            } else {
                                $class = "";
                            }
                            ?>
                                <h3 class="content__tab <?php echo $class;?>">
                                    <?php echo $tab;?>
                                </h3>
                            <?php
                            $count ++;
                        endwhile;
                    endif;
                    ?>
                </div>
                <div class="content__contents">
                    <?php
                    $count = 1;
                    $class = "";
                    if( have_rows('typ_donatov') ):
                        while( have_rows('typ_donatov') ) : the_row();
                            $content = get_sub_field('kontent');
                            $button = get_sub_field('kod_dlya_knopok');
                            if($count == 1){
                                $class = "active";
                            } else {
                                $class = "";
                            }
                            ?>
                            <div class="content__content <?php echo $class;?>">
                                <?php echo $content;?>
                                <?php
                                $pays = get_sub_field('kod_dlya_knopok');
                                if( $pays ): ?>
                                        <?php foreach( $pays as $pay ): ?>
                                        <?php
                                        if ($pay == "paypal"){
                                            ?>
                                            <form action="https://www.paypal.com/donate" method="post" target="_top">
                                                <input type="hidden" name="hosted_button_id" value="GQCMNGVFUSAZS" />
                                                <button class="content__button paypal pay-btn" name="submit">
                                                    <svg width="130" height="36" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M48.447 7.36255H41.2771C40.7865 7.36255 40.3692 7.73346 40.2927 8.23746L37.3928 27.3687C37.3352 27.7462 37.6161 28.0865 37.9841 28.0865H41.4071C41.8977 28.0865 42.315 27.7156 42.3915 27.2105L43.1736 22.0505C43.2491 21.5455 43.6674 21.1745 44.157 21.1745H46.4268C51.1498 21.1745 53.8756 18.7964 54.5874 14.0836C54.9082 12.0218 54.601 10.4018 53.6732 9.26728C52.6542 8.02146 50.8468 7.36255 48.447 7.36255ZM49.2742 14.3498C48.8821 17.0269 46.9164 17.0269 45.0156 17.0269H43.9337L44.6927 12.0273C44.7378 11.7251 44.9894 11.5025 45.283 11.5025H45.7789C47.0736 11.5025 48.295 11.5025 48.9261 12.2705C49.3025 12.7287 49.4178 13.4095 49.2742 14.3498Z" fill="#253B80"/>
                                                        <path d="M69.8792 14.2636H66.4457C66.1532 14.2636 65.9006 14.4862 65.8555 14.7884L65.7035 15.7876L65.4634 15.4255C64.7201 14.3029 63.0626 13.9276 61.4082 13.9276C57.6141 13.9276 54.3735 16.9178 53.7424 21.1124C53.4143 23.2047 53.8808 25.2055 55.0214 26.6007C56.0677 27.8836 57.5648 28.4182 59.346 28.4182C62.4031 28.4182 64.0984 26.3727 64.0984 26.3727L63.9453 27.3655C63.8877 27.7451 64.1686 28.0855 64.5345 28.0855H67.6273C68.1189 28.0855 68.5341 27.7145 68.6117 27.2095L70.4673 14.9815C70.526 14.6051 70.2461 14.2636 69.8792 14.2636ZM65.0933 21.2171C64.762 23.2582 63.2052 24.6284 61.2195 24.6284C60.2225 24.6284 59.4257 24.2956 58.9141 23.6651C58.4067 23.0389 58.2138 22.1476 58.3752 21.1549C58.6845 19.1313 60.2676 17.7164 62.2228 17.7164C63.1978 17.7164 63.9904 18.0535 64.5125 18.6895C65.0356 19.332 65.2432 20.2287 65.0933 21.2171Z" fill="#253B80"/>
                                                        <path d="M88.1652 14.2636H84.7149C84.3857 14.2636 84.0765 14.4338 83.8898 14.7185L79.1312 22.0124L77.1141 15.0033C76.9873 14.5647 76.5983 14.2636 76.158 14.2636H72.7675C72.3555 14.2636 72.0693 14.6825 72.2003 15.0862L76.0007 26.6913L72.4278 31.9396C72.1469 32.3531 72.4299 32.9215 72.9153 32.9215H76.3614C76.6885 32.9215 76.9946 32.7556 77.1802 32.4764L88.6558 15.24C88.9305 14.8276 88.6485 14.2636 88.1652 14.2636Z" fill="#253B80"/>
                                                        <path d="M99.5884 7.36255H92.4174C91.9278 7.36255 91.5106 7.73346 91.434 8.23746L88.5342 27.3687C88.4765 27.7462 88.7575 28.0865 89.1234 28.0865H92.8032C93.145 28.0865 93.4375 27.8269 93.491 27.4735L94.3139 22.0505C94.3894 21.5455 94.8077 21.1745 95.2973 21.1745H97.566C102.29 21.1745 105.015 18.7964 105.728 14.0836C106.05 12.0218 105.74 10.4018 104.812 9.26728C103.795 8.02146 101.988 7.36255 99.5884 7.36255ZM100.416 14.3498C100.025 17.0269 98.0588 17.0269 96.157 17.0269H95.0761L95.8362 12.0273C95.8813 11.7251 96.1308 11.5025 96.4254 11.5025H96.9213C98.215 11.5025 99.4374 11.5025 100.069 12.2705C100.445 12.7287 100.559 13.4095 100.416 14.3498Z" fill="#179BD7"/>
                                                        <path d="M121.02 14.2636H117.588C117.294 14.2636 117.043 14.4862 116.999 14.7884L116.847 15.7876L116.606 15.4255C115.862 14.3029 114.206 13.9276 112.552 13.9276C108.758 13.9276 105.518 16.9178 104.887 21.1124C104.56 23.2047 105.024 25.2055 106.165 26.6007C107.213 27.8836 108.708 28.4182 110.49 28.4182C113.547 28.4182 115.242 26.3727 115.242 26.3727L115.089 27.3655C115.031 27.7451 115.312 28.0855 115.68 28.0855H118.772C119.261 28.0855 119.679 27.7145 119.755 27.2095L121.612 14.9815C121.668 14.6051 121.387 14.2636 121.02 14.2636ZM116.234 21.2171C115.904 23.2582 114.345 24.6284 112.36 24.6284C111.365 24.6284 110.566 24.2956 110.054 23.6651C109.547 23.0389 109.356 22.1476 109.516 21.1549C109.827 19.1313 111.408 17.7164 113.363 17.7164C114.338 17.7164 115.131 18.0535 115.653 18.6895C116.178 19.332 116.386 20.2287 116.234 21.2171Z" fill="#179BD7"/>
                                                        <path d="M125.067 7.88728L122.125 27.3687C122.067 27.7462 122.348 28.0865 122.714 28.0865H125.672C126.164 28.0865 126.581 27.7156 126.657 27.2105L129.559 8.08037C129.616 7.70291 129.335 7.36146 128.969 7.36146H125.657C125.364 7.36255 125.112 7.58509 125.067 7.88728Z" fill="#179BD7"/>
                                                        <path d="M7.61758 31.8044L8.16589 28.1804L6.94452 28.1509H1.11234L5.1654 1.40945C5.17798 1.32872 5.21887 1.25345 5.27863 1.2C5.33839 1.14654 5.41492 1.11709 5.4946 1.11709H15.3285C18.5931 1.11709 20.8461 1.824 22.0224 3.21927C22.5739 3.87382 22.9251 4.55782 23.0949 5.31054C23.2731 6.10036 23.2763 7.044 23.1023 8.19491L23.0897 8.27891V9.01636L23.6411 9.34145C24.1056 9.59782 24.4746 9.89127 24.7577 10.2273C25.2294 10.7869 25.5345 11.4982 25.6635 12.3415C25.7966 13.2087 25.7526 14.2407 25.5345 15.4091C25.2829 16.7531 24.8761 17.9236 24.3268 18.8815C23.8214 19.764 23.1777 20.496 22.4135 21.0633C21.6838 21.6022 20.8168 22.0113 19.8365 22.2731C18.8867 22.5305 17.8037 22.6604 16.6159 22.6604H15.8506C15.3033 22.6604 14.7718 22.8655 14.3545 23.2331C13.9362 23.6084 13.6594 24.1211 13.5745 24.6818L13.5169 25.008L12.5481 31.3953L12.5041 31.6298C12.4926 31.704 12.4727 31.7411 12.4433 31.7662C12.4171 31.7891 12.3794 31.8044 12.3427 31.8044H7.61758Z" fill="#253B80"/>
                                                        <path d="M24.1632 8.364C24.1339 8.55927 24.1003 8.75891 24.0626 8.964C22.7657 15.8924 18.329 18.2858 12.6624 18.2858H9.77726C9.08428 18.2858 8.50032 18.8095 8.39234 19.5207L6.91516 29.2691L6.49686 32.0324C6.42661 32.4993 6.77258 32.9204 7.22549 32.9204H12.3427C12.9486 32.9204 13.4634 32.4622 13.5588 31.8404L13.6091 31.5698L14.5726 25.2076L14.6344 24.8585C14.7288 24.2345 15.2446 23.7764 15.8506 23.7764H16.6159C21.5737 23.7764 25.4548 21.6818 26.5892 15.6207C27.0631 13.0887 26.8177 10.9745 25.5639 9.48763C25.1844 9.03927 24.7136 8.66727 24.1632 8.364Z" fill="#179BD7"/>
                                                        <path d="M22.8066 7.80109C22.6085 7.74109 22.404 7.68655 22.1944 7.63745C21.9836 7.58945 21.7677 7.54691 21.5454 7.50982C20.7675 7.37891 19.9152 7.31673 19.002 7.31673H11.2943C11.1045 7.31673 10.9242 7.36145 10.7627 7.44218C10.4073 7.62 10.1431 7.97018 10.0792 8.39891L8.43952 19.2055L8.39234 19.5207C8.50032 18.8095 9.08427 18.2858 9.77726 18.2858H12.6624C18.3289 18.2858 22.7657 15.8913 24.0626 8.964C24.1014 8.75891 24.1339 8.55927 24.1632 8.364C23.8351 8.18291 23.4797 8.028 23.097 7.896C23.0027 7.86327 22.9052 7.83164 22.8066 7.80109Z" fill="#222D65"/>
                                                        <path d="M10.0792 8.39891C10.1431 7.97018 10.4073 7.62 10.7627 7.44327C10.9252 7.36255 11.1045 7.31782 11.2943 7.31782H19.002C19.9152 7.31782 20.7675 7.38 21.5454 7.51091C21.7677 7.548 21.9836 7.59055 22.1944 7.63855C22.404 7.68764 22.6085 7.74218 22.8066 7.80218C22.9052 7.83273 23.0027 7.86436 23.0981 7.896C23.4807 8.028 23.8361 8.184 24.1643 8.364C24.5501 5.80364 24.1611 4.06036 22.8307 2.48182C21.364 0.744 18.7169 0 15.3295 0H5.49564C4.80371 0 4.21346 0.523636 4.10653 1.236L0.0104798 28.2524C-0.070246 28.7869 0.326044 29.2691 0.843948 29.2691H6.91516L8.43951 19.2055L10.0792 8.39891Z" fill="#253B80"/>
                                                    </svg>
                                                </button>
                                                <span class="pay-btn__desc">email: donate.educado@gmail.com</span>
                                                <img class="pay-btn__qr" src="<?php echo get_template_directory_uri() . '/images/qr-pay-pal.jpg'?>" alt="">
                                            </form>
                                            <?php
                                        } elseif($pay == "fondy"){
                                            ?>
                                            <div class="content__button fondy pay-btn">
                                                <svg width="137" height="31" viewBox="0 0 137 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.3995 7.81861H43.7928V13.1304H51.1304V16.2662H43.7928V26.791H40.4988V4.68246H51.3995V7.81861Z" fill="#3D3D3D"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M57.4786 15.6718C57.4786 18.1142 58.2893 20.1214 59.9107 21.6952C61.5222 23.2687 63.3837 24.0557 65.4949 24.0557C67.7854 24.0557 69.7175 23.2547 71.2916 21.6527C72.8657 20.0306 73.6531 18.0563 73.6531 15.7298C73.6531 13.3739 72.8752 11.3996 71.3202 9.8065C69.774 8.2041 67.8606 7.40308 65.5796 7.40308C63.3082 7.40308 61.3902 8.2041 59.8256 9.8065C58.261 11.3896 57.4786 13.3453 57.4786 15.6718ZM54.1563 15.6361C54.1563 12.5246 55.2824 9.85192 57.5351 7.61835C59.7783 5.38372 62.4738 4.26694 65.6223 4.26694C68.7327 4.26694 71.4 5.39373 73.6245 7.64696C75.8585 9.89912 76.9753 12.6058 76.9753 15.7655C76.9753 18.9439 75.8535 21.6405 73.6103 23.8555C71.3576 26.0798 68.6381 27.1912 65.4525 27.1912C62.6345 27.1912 60.1038 26.2035 57.8606 24.2278C55.3908 22.0414 54.1563 19.1781 54.1563 15.6361Z" fill="#62BA46"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M106.385 23.655H107.869C109.35 23.655 110.579 23.4973 111.56 23.1822C112.54 22.8482 113.426 22.3183 114.218 21.5931C115.839 20.0944 116.649 18.1422 116.649 15.7367C116.649 13.3118 115.848 11.3457 114.246 9.83699C112.804 8.49134 110.678 7.8187 107.869 7.8187H106.385V23.655ZM103.091 26.7911V4.68256H107.672C109.868 4.68256 111.602 4.90248 112.875 5.34125C114.241 5.77073 115.481 6.5013 116.593 7.53226C118.845 9.61277 119.972 12.348 119.972 15.7367C119.972 19.1346 118.798 21.8845 116.451 23.984C115.273 25.0342 114.039 25.7641 112.747 26.175C111.541 26.5855 109.83 26.7911 107.615 26.7911H103.091Z" fill="#3D3D3D"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M126.363 17.2398L119.238 4.68274H123.027L128.018 13.5172L133.022 4.68274H136.812L129.657 17.2398V26.7909H126.363V17.2398Z" fill="#3D3D3D"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M96.0309 4.68265V20.9416L83.2324 4.68265H80.0584V26.7908H83.3528V10.5033L96.151 26.7908H99.3253V4.68265H96.0309Z" fill="#3D3D3D"/>
                                                    <mask id="mask0_921_2326" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="31">
                                                        <path d="M0.000183105 30.8932H30.1095V0.357605H0.000183105V30.8932Z" fill="white"/>
                                                    </mask>
                                                    <g mask="url(#mask0_921_2326)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9258 0.357605L14.483 0.624374L9.42705 3.689L9.033 3.94361V4.44246V9.3505L4.92583 11.834L4.51659 12.0894V12.5871V17.4955L0.409418 19.9791L0.000183105 20.234V20.7325V26.8031V27.3016L0.367047 27.5566L5.42369 30.6208L5.8474 30.884L6.28029 30.6251L10.4913 28.1441L14.6507 30.623L15.09 30.8851L15.5289 30.6219L19.6473 28.1541L23.5416 30.6116L23.9886 30.8933L24.4413 30.6212L29.6127 27.5569L30.1095 27.302V26.8031V20.7325V20.234L29.7002 19.9791L25.5931 17.4955V12.5871V12.0894L25.1838 11.834L21.0766 9.3505V4.44246V3.94361L20.5534 3.689L15.4183 0.624374L14.9258 0.357605ZM15.0543 1.37783L20.1731 4.44246V9.849L24.6895 12.5871V17.994L29.2063 20.7325V26.8031L24.0539 29.8674L19.6858 27.1293L15.1013 29.8674L10.4973 27.1293L5.91661 29.8674L0.903394 26.8031V20.7325L5.41945 17.994V12.5871L9.93586 9.849V4.44246L15.0543 1.37783Z" fill="#3D3D3D"/>
                                                    </g>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9689 9.88984L15.0542 12.3026L11.1405 9.88984V5.06547L15.0542 2.65311L18.9689 5.06547V9.88984Z" fill="#5AC341"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9689 26.1798L15.0542 28.5925L11.1405 26.1798V21.3554L15.0542 18.9431L18.9689 21.3554V26.1798Z" fill="#3D3D3D"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0018 26.1798L24.0874 28.5925L20.1733 26.1798V21.3554L24.0874 18.9431L28.0018 21.3554V26.1798Z" fill="#3D3D3D"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.93593 26.1798L5.87112 28.5925L1.80667 26.1798V21.3554L5.87112 18.9431L9.93593 21.3554V26.1798Z" fill="#3D3D3D"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4525 18.0354L10.5385 20.4474L6.62408 18.0354V13.2103L10.5385 10.7979L14.4525 13.2103V18.0354Z" fill="#3D3D3D"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4853 18.0354L19.5713 20.4474L15.6569 18.0354V13.2103L19.5713 10.7979L23.4853 13.2103V18.0354Z" fill="#3D3D3D"/>
                                                </svg>

                                            </div>
                                            <?php
                                        };
                                        ?>
                                        <?php endforeach; ?>
                                <?php endif; ?>
                            </div>
                            <?php
                            $count ++;
                        endwhile;
                    endif;
                    ?>

                </div>
            </div>
        </section>
    </article>
    <div class="popup" style="display: none">
        <div class="popup__container">
            <div class="popup__close">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.00012207" y="1.41431" width="2" height="20" transform="rotate(-45 0.00012207 1.41431)" fill="#161616"/>
                    <rect x="1.41418" y="15.5564" width="2" height="20" transform="rotate(-135 1.41418 15.5564)" fill="#161616"/>
                </svg>
            </div>
            <div class="popup__bg">
                <img src="<?php echo get_template_directory_uri() . '/images/popup-fon.svg'?>" alt=" <?php echo get_field('zagolovok_popapa', $post_id); ?>">
            </div>
            <h2 class="popup__title">
                <?php echo get_field('zagolovok_popapa', $post_id); ?>
            </h2>
            <div class="popup__content">
                <?php echo get_field('opysanye_popapa', $post_id); ?>
            </div>
        </div>
    </div>
</main>
<?php

get_footer();
