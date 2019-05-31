<?php
/**
 * Plugin Name: Stripe Payments Recaptcha Addon
 * Plugin URI: https://s-plugins.com/
 * Description: reCaptcha Addon for Stripe Payments plugin.
 * Version: 1.2.0
 * Author: Tips and Tricks HQ, alexanderfoxc
 * Author URI: https://s-plugins.com/
 * License: GPL2
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; //Exit if accessed directly
}

class ASPRECAPTCHA_main {

    var $ASPMain;

    function __construct() {
	add_action( 'plugins_loaded', array( $this, 'plugins_loaded' ) );
	register_activation_hook( __FILE__, array( "ASPRECAPTCHA_main", 'activate' ) );
    }

    function settings_link( $links, $file ) {
	if ( $file === plugin_basename( __FILE__ ) ) {
	    $settings_link = '<a href="edit.php?post_type=asp-products&page=stripe-payments-settings#recaptcha">' . __( 'Settings', 'stripe-payments' ) . '</a>';
	    array_unshift( $links, $settings_link );
	}
	return $links;
    }

    static function activate() {
	// set default settings if needed
	$opt		 = get_option( 'AcceptStripePayments-settings' );
	$defaults	 = array(
	    'recaptcha_enabled'	 => 0,
	    'recaptcha_site_key'	 => '',
	    'recaptcha_secret_key'	 => '',
	);
	$new_opt	 = array_merge( $defaults, $opt );
	// unregister setting to prevent main plugin from sanitizing our new values
	unregister_setting( 'AcceptStripePayments-settings-group', 'AcceptStripePayments-settings' );
	update_option( 'AcceptStripePayments-settings', $new_opt );
    }

    function plugins_loaded() {
	if ( class_exists( 'AcceptStripePayments' ) ) {
	    $this->ASPMain = AcceptStripePayments::get_instance();

	    if ( ! is_admin() ) {
		if ( $this->ASPMain->get_setting( 'recaptcha_enabled' ) === 1 ) {
		    add_filter( 'asp-button-output-data-ready', array( $this, 'data_ready' ), 10, 2 );
		    add_filter( 'asp-button-output-additional-styles', array( $this, 'output_styles' ) );
		    add_action( 'asp-button-output-register-script', array( $this, 'register_script' ) );
		    add_action( 'asp-button-output-enqueue-script', array( $this, 'enqueue_script' ) );
		    add_filter( 'asp-button-output-after-button', array( $this, 'after_button' ), 10, 3 );
		    add_filter( 'asp_before_payment_processing', array( $this, 'before_payment_processing' ), 10, 2 );
		}
	    } else {
		include_once(plugin_dir_path( __FILE__ ) . 'admin/asp-recaptcha-admin-menu.php');
		$ASPRECAPTCHA_admin_menu = new ASPRECAPTCHA_admin_menu();
		//add Settings link to plugins page
		add_filter( 'plugin_action_links', array( $this, 'settings_link' ), 10, 2 );
		//update checker
		include_once(plugin_dir_path( __FILE__ ) . 'lib/plugin-update-checker/plugin-update-checker.php');
		$myUpdateChecker	 = Puc_v4_Factory::buildUpdateChecker(
		'https://s-plugins.com/updates/?action=get_metadata&slug=stripe-payments-recaptcha', __FILE__, 'stripe-payments-recaptcha' );
	    }
	}
    }

    function before_payment_processing( $ret, $post ) {
	if ( ! isset( $post[ 'recaptchaKey' ] ) || empty( $post[ 'recaptchaKey' ] ) ) {
	    $ret[ 'error' ] = 'reCaptcha: missing user response data.';
	    return $ret;
	}
	$key	 = sanitize_text_field( $post[ 'recaptchaKey' ] );
	$res	 = wp_remote_post( 'https://www.google.com/recaptcha/api/siteverify', array( 'body' => array(
		'secret'	 => $this->ASPMain->get_setting( 'recaptcha_secret_key' ),
		'response'	 => $key,
	    ) ) );
	if ( is_wp_error( $res ) ) {
	    $ret[ 'error' ] = 'reCaptcha: error occured during API request. ' . $res->get_error_message();
	    return $ret;
	}

	if ( $res[ 'response' ][ 'code' ] !== 200 ) {
	    $ret[ 'error' ] = 'reCaptcha: error occured during API request. HTTP Error code: ' . $res[ 'response' ][ 'code' ];
	    return $ret;
	}

	$response = json_decode( $res[ 'body' ], true );

	if ( is_null( $response ) ) {
	    $ret[ 'error' ] = 'reCaptcha: error occured parsing API response, invalid JSON data.';
	    return $ret;
	}

	if ( $response[ 'success' ] !== true ) {
	    $err_codes_str = '';
	    if ( is_array( $response[ 'error-codes' ] ) ) {
		foreach ( $response[ 'error-codes' ] as $error_code ) {
		    switch ( $error_code ) {
			case 'invalid-input-response':
			    $err_codes_str	 .= "The response parameter is invalid or malformed. ";
			    break;
			case 'missing-input-secret':
			    $err_codes_str	 .= 'Secret key is missing.';
			    break;
			case 'invalid-input-secret':
			    $err_codes_str	 .= 'Secret key is invalid or malformed.';
			    break;
			case 'missing-input-response':
			    $err_codes_str	 .= 'The response parameter is missing.';
			    break;
			default:
			    $err_codes_str	 .= $error_code;
			    break;
		    }
		}
	    }
	    $ret[ 'error' ] = 'reCaptcha: check failed. Following error(s) occured: ' . $err_codes_str;
	    return $ret;
	}

	return $ret;
    }

    function output_styles( $output ) {
	ob_start();
	?>
	<style>
	    .asp-recaptcha-modal {
		display: none;
		max-width: 350px !important;
		min-width: 314px;
	    }
	    .asp-recaptcha-container {
		height: 100px;
		margin: 0 auto;
		margin-top: 15px;
		width: auto;
		padding: 0 5px;
	    }
	    .asp-recaptcha-container div {
		margin: 0 auto;
		height: 78px;
	    }
	    div.asp-recaptcha-modal div.iziModal-header {
		background: #3795cb none repeat scroll 0% 0% !important;
	    }
	</style>
	<?php
	$output .= ob_get_clean();
	return $output;
    }

    function after_button( $output, $data, $class ) {
	ob_start();
	?>
	<div id="asp-recaptcha-modal-<?php echo $data[ 'uniq_id' ]; ?>" class="asp-recaptcha-modal"><div id="asp-recaptcha-container-<?php echo $data[ 'uniq_id' ]; ?>" class="asp-recaptcha-container"></div></div>
	<?php
	$output .= ob_get_clean();
	return $output;
    }

    function data_ready( $data, $atts ) {
	array_push( $data[ 'addonHooks' ], 'recaptcha' );
	$data[ 'recaptchaSiteKey' ] = $this->ASPMain->get_setting( 'recaptcha_site_key' );

	return $data;
    }

    function register_script() {
	wp_register_script( 'asp-recaptcha-recaptcha', 'https://www.google.com/recaptcha/api.js?render=explicit', array(), null, true );
	wp_register_script( 'asp-recaptcha-handler', plugins_url( '', __FILE__ ) . '/public/js/asp-recaptcha-script.js', array( 'asp-recaptcha-recaptcha', 'jquery' ), WP_ASP_PLUGIN_VERSION, true );
	wp_register_script( 'aspapm-iziModal', plugins_url( '', __FILE__ ) . '/public/js/iziModal.min.js', 'jquery', WP_ASP_PLUGIN_VERSION, true );
	wp_register_style( 'aspapm-iziModal-css', plugins_url( '', __FILE__ ) . '/public/css/iziModal.min.css', null, WP_ASP_PLUGIN_VERSION );
    }

    function enqueue_script() {
	wp_enqueue_script( 'asp-recaptcha-recaptcha' );
	wp_enqueue_script( 'asp-recaptcha-handler' );
	wp_enqueue_script( 'aspapm-iziModal' );
	wp_enqueue_style( 'aspapm-iziModal-css' );
    }

}

$ASPRECAPTCHA_main = new ASPRECAPTCHA_main();
