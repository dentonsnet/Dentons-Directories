<?php
/**
 * GeneratePress child theme functions and definitions.
 *
 * Add your custom PHP in this file. 
 * Only edit this file if you have direct access to it on your server (to fix errors if they happen).
 */

require_once( __DIR__ . '/includes/scripts.php');
require_once( __DIR__ . '/includes/options.php');
require_once( __DIR__ . '/includes/footer_actions.php');

function wpa54064_inspect_scripts() {
    global $wp_scripts;
    foreach( $wp_scripts->queue as $handle ) :
        echo $handle . ' | ';
    endforeach;
}
//add_action( 'wp_print_scripts', 'wpa54064_inspect_scripts' );


// echo "<script>console.log(".json_encode().");</script>";