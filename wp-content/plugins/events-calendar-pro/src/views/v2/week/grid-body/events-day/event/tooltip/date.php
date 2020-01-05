<?php
/**
 * View: Week View - Event Tooltip Date
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events-pro/views/v2/week/grid-body/events-day/event/tooltip/date.php
 *
 * See more documentation about our views templating system.
 *
 * @link {INSERT_ARTCILE_LINK_HERE}
 *
 * @version 4.7.10
 *
 * @var WP_Post $event        The event post object with properties added by the `tribe_get_event` function.
 * @var obj     $date_formats Object containing the date formats.
 *
 * @see tribe_get_event() For the format of the event object.
 *
 */

$display_end_date = $event->dates->start_display->format( 'H:i' ) !== $event->dates->end_display->format( 'H:i' );
?>

<div class="tribe-events-pro-week-grid__event-tooltip-datetime">
	<?php if ( ! empty( $event->featured ) ) : ?>
		<em
			class="tribe-events-pro-week-grid__event-tooltip-datetime-featured-icon tribe-common-svgicon tribe-common-svgicon--featured"
			aria-label="<?php esc_attr_e( 'Featured', 'tribe-events-calendar-pro' ) ?>"
			title="<?php esc_attr_e( 'Featured', 'tribe-events-calendar-pro' ) ?>"
		>
		</em>
	<?php endif; ?>
	<time datetime="<?php echo $event->dates->start_display->format( 'H:i' ); ?>">
		<?php echo $event->dates->start_display->format( 'g:i a' ); ?>
	</time>
	<?php if ( $display_end_date ) : ?>
		<span class="tribe-events-pro-week-grid__event-tooltip-datetime-separator"><?php echo esc_html( $date_formats->time_range_separator ); ?></span>
		<time datetime="<?php echo $event->dates->end_display->format( 'H:i' ); ?>">
			<?php echo $event->dates->end_display->format( 'g:i a' ); ?>
		</time>
	<?php endif; ?>
	<?php if ( ! empty( $event->recurring ) ) : ?>
		<a
			href="<?php echo esc_url( $event->permalink_all ); ?>"
			class="tribe-events-pro-week-grid__event-tooltip-datetime-recurring-link"
		>
			<em
				class="tribe-events-pro-week-grid__event-tooltip-datetime-recurring-icon tribe-common-svgicon tribe-common-svgicon--recurring"
				aria-label="<?php esc_attr_e( 'Recurring', 'tribe-events-calendar-pro' ); ?>"
				title="<?php esc_attr_e( 'Recurring', 'tribe-events-calendar-pro' ); ?>"
			>
			</em>
		</a>
	<?php endif; ?>
</div>
