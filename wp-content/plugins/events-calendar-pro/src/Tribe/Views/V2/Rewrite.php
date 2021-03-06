<?php
/**
 * Handles rewrite rules added or modified by PRO Views v2.
 *
 * @since   4.7.9
 *
 * @package Tribe\Events\Pro\Views\V2
 */

namespace Tribe\Events\Pro\Views\V2;

use Tribe__Events__Organizer as Organizer;
use Tribe__Events__Rewrite as TEC_Rewrite;
use Tribe__Events__Venue as Venue;

/**
 * Class Rewrite
 *
 * @since   4.7.9
 *
 * @package Tribe\Events\Pro\Views\V2
 */
class Rewrite {
	/**
	 * Filters the base rewrite rules to add venue and organizer as translate-able pieces.
	 *
	 * @since 5.0.0
	 *
	 * @param array  $bases  Original set of bases used in TEC.
	 *
	 * @return array         Bases after adding Venue and Organizer
	 */
	public function add_base_rewrites( $bases ) {
		$bases['venue'] = [ 'venue', esc_html_x( 'venue', 'The archive for events, "/venue/" URL string component.', 'tribe-events-calendar-pro' ) ];
		$bases['organizer'] = [ 'organizer', esc_html_x( 'organizer', 'The archive for events, "/organizer/" URL string component.', 'tribe-events-calendar-pro' ) ];

		return $bases;
	}

	/**
	 * Filters the `redirect_canonical` to prevent any redirects on venue and organizer URLs.
	 *
	 * @since 5.0.0
	 *
	 * @param mixed $redirect_url URL which we will redirect to.
	 *
	 * @return string             Original URL redirect or False to prevent canonical redirect.
	 */
	public function filter_prevent_canonical_redirect( $redirect_url = null ) {
		// When dealing with admin urls bail early.
		if ( is_admin() ) {
			return $redirect_url;
		}

		$context = tribe_context();

		if ( $context->get( 'organizer_post_type', false ) ) {
			return false;
		}

		if ( $context->get( 'venue_post_type', false ) ) {
			return false;
		}

		return $redirect_url;
	}

	/**
	 * Add rewrite routes for PRO Views v2.
	 *
	 * @since 4.7.9
	 *
	 * @param TEC_Rewrite $rewrite The Events Calendar rewrite handler object.
	 */
	public function add_rewrites( TEC_Rewrite $rewrite ) {
		$rewrite->add(
			[
				'{{ venue }}',
				'([^/]+)',
				'{{ page }}',
				'(\d+)',
			],
			[
				'eventDisplay' => 'venue',
				Venue::POSTTYPE => '%1',
				'paged'=> '%2',
			]
		);
		$rewrite->add(
			[
				'{{ venue }}',
				'([^/]+)',
			],
			[
				'eventDisplay' => 'venue',
				Venue::POSTTYPE => '%1',
			]
		);

		$rewrite->add(
			[
				'{{ organizer }}',
				'([^/]+)',
				'{{ page }}',
				'(\d+)',
			],
			[
				'eventDisplay' => 'organizer',
				Organizer::POSTTYPE => '%1',
				'paged'=> '%2',
			]
		);
		$rewrite->add(
			[
				'{{ organizer }}',
				'([^/]+)',
			],
			[
				'eventDisplay' => 'organizer',
				Organizer::POSTTYPE => '%1',
			]
		);

		$rewrite->archive(
			[
				'{{ photo }}',
				'{{ page }}',
				'(\d+)',
			],
			[
				'eventDisplay' => 'photo',
				'paged'        => '%1',
			]
		);
	}

	/**
	 * Filters the geocode based rewrite rules to add rules to paginate the Map View..
	 *
	 * @since 4.7.9
	 *
	 * @param array $rules The geocode based rewrite rules.
	 *
	 * @return array The filtered geocode based rewrite rules.
	 */
	public function add_map_pagination_rules( array $rules ) {
		/*
		 * We use this "hidden" dependency here and now because that's when we're sure the object was correctly built
		 * and ready to provide the information we need.
		 */
		$tec_bases = TEC_Rewrite::instance()->bases;
		$page_base = isset( $tec_bases->page ) ? $tec_bases->page : false;

		if ( false === $page_base ) {
			return $rules;
		}

		$pagination_rules = [];
		foreach ( $rules as $regex => $rewrite ) {
			$key                      = rtrim( $regex, '/?$' ) . '/' . $page_base . '/(\\d+)/?$';
			$value                    = add_query_arg( [ 'paged' => '$matches[1]' ], $rewrite );
			$pagination_rules[ $key ] = $value;
		}

		// It's important these rules are prepended to the pagination ones, not appended.
		return $pagination_rules + $rules;
	}

	/**
	 * Filters the handled rewrite rules, the one used to parse plain links into permalinks, to add the ones
	 * managed by PRO.
	 *
	 * @since TBD
	 *
	 * @param array<string,string> $handled_rules The handled rules, as produced by The Events Calendar base code; in
	 *                                            the same format used by WordPress to store and manage rewrite rules.
	 * @param array<string,string> $all_rules     All the rewrite rules handled by WordPress.
	 *
	 * @return array<string,string> The filtered rewrite rules, including the ones handled by Events PRO; in the same
	 *                              format used by WordPress to handle rewrite rules.
	 */
	public function filter_handled_rewrite_rules( array $handled_rules = [], array $all_rules = [] ) {
		$venue_rules = array_filter( $all_rules, static function ( $rewrite ) {
			return false !== strpos( $rewrite, Venue::POSTTYPE . '=$matches' );
		} );

		$organizer_rules = array_filter( $all_rules, static function ( $rewrite ) {
			return false !== strpos( $rewrite, Organizer::POSTTYPE . '=$matches' );
		} );

		return array_unique( array_merge( $handled_rules, $venue_rules, $organizer_rules ) );
	}

	/**
	 * Filters the query vars map used by the Rewrite component to parse plain links into permalinks to add the elements
	 * needed to support PRO components.
	 *
	 * @since TBD
	 *
	 * @param array<string,string> $query_vars_map The query variables map, as produced by The Events Calendar code.
	 *                                             Shape is `[ <pattern> => <query_var> ].
	 *
	 * @return array<string,string> The query var map, filtered to add the query vars handled by PRO.
	 */
	public function filter_rewrite_query_vars_map( array $query_vars_map = [] ) {
		$query_vars_map['venue']     = Venue::POSTTYPE;
		$query_vars_map['organizer'] = Organizer::POSTTYPE;

		return $query_vars_map;
	}
}
