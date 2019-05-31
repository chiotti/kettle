<?php

class ASPRECAPTCHA_admin_menu {

    var $plugin_slug;
    var $ASPAdmin;

    function __construct() {
	$this->ASPAdmin		 = AcceptStripePayments_Admin::get_instance();
	$this->plugin_slug	 = $this->ASPAdmin->plugin_slug;
	add_action( 'admin_init', array( $this, 'register_settings' ) );
	add_action( 'asp-settings-page-after-styles', array( $this, 'after_styles' ) );
	add_action( 'asp-settings-page-after-tabs-menu', array( $this, 'after_tabs_menu' ) );
	add_action( 'asp-settings-page-after-tabs', array( $this, 'after_tabs' ) );
	add_filter( 'asp-admin-settings-addon-field-display', array( $this, 'field_display' ), 10, 2 );
	add_filter( 'apm-admin-settings-sanitize-field', array( $this, 'sanitize_settings' ), 10, 2 );
    }

    function sanitize_settings( $output, $input ) {
	$output[ 'recaptcha_enabled' ] = isset( $input[ 'recaptcha_enabled' ] ) ? 1 : 0;

	$output[ 'recaptcha_site_key' ] = sanitize_text_field( $input[ 'recaptcha_site_key' ] );

	$output[ 'recaptcha_secret_key' ] = sanitize_text_field( $input[ 'recaptcha_secret_key' ] );

	if ( $output[ 'recaptcha_enabled' ] === 1 ) {
	    if ( empty( $output[ 'recaptcha_site_key' ] ) ) {
		add_settings_error( 'AcceptStripePayments-settings', 'invalid-credentials', __( 'Please enter reCaptcha Site Key.', 'stripe-payments' ) );
	    }
	    if ( empty( $output[ 'recaptcha_secret_key' ] ) ) {
		add_settings_error( 'AcceptStripePayments-settings', 'invalid-credentials', __( 'Please enter reCaptcha Secret Key.', 'stripe-payments' ) );
	    }
	}
	return $output;
    }

    function field_display( $field, $field_value ) {
	$ret = array();
	switch ( $field ) {
	    case "recaptcha_enabled":
		$ret[ 'field' ]		 = 'checkbox';
		$ret[ 'field_name' ]	 = $field;
		break;
	}
	if ( ! empty( $ret ) ) {
	    return $ret;
	} else {
	    return $field;
	}
    }

    function register_settings() {
	add_settings_section( 'AcceptStripePayments-recaptcha-section', __( 'reCaptcha Settings', 'stripe-payments' ), null, $this->plugin_slug . '-recaptcha' );

	add_settings_field( 'recaptcha_enabled', __( 'Enable reCaptcha', 'stripe-payments' ), array( &$this->ASPAdmin, 'settings_field_callback' ), $this->plugin_slug . '-recaptcha', 'AcceptStripePayments-recaptcha-section', array( 'field'	 => 'recaptcha_enabled', 'size'	 => 10,
	    'desc'	 => __( 'Enables reCaptcha.', 'stripe_payments' ) )
	);

	add_settings_field( 'recaptcha_site_key', __( 'Site Key', 'stripe-payments' ), array( &$this->ASPAdmin, 'settings_field_callback' ), $this->plugin_slug . '-recaptcha', 'AcceptStripePayments-recaptcha-section', array( 'field'	 => 'recaptcha_site_key', 'size'	 => 50,
	    'desc'	 => __( 'Your reCaptcha Site Key.', 'stripe_payments' ) )
	);

	add_settings_field( 'recaptcha_secret_key', __( 'Secret Key', 'stripe-payments' ), array( &$this->ASPAdmin, 'settings_field_callback' ), $this->plugin_slug . '-recaptcha', 'AcceptStripePayments-recaptcha-section', array( 'field'	 => 'recaptcha_secret_key', 'size'	 => 50,
	    'desc'	 => __( 'Your reCaptcha Secret Key.', 'stripe_payments' ) )
	);
    }

    function after_styles() {
	?>

	<?php
    }

    function after_tabs_menu() {
	?>
	<a href="#recaptcha" data-tab-name="recaptcha" class="nav-tab"><?php echo __( 'reCaptcha', 'stripe-payments' ); ?></a>
	<?php
    }

    function after_tabs() {
	?>
	<div class="wp-asp-tab-container asp-recaptcha-container" data-tab-name="recaptcha">
	    <?php do_settings_sections( $this->plugin_slug . '-recaptcha' ); ?>
	</div>
	<?php
    }

}
