/* global jQuery, FLBuilder */

( function( $, FLBuilder ) {
	// On DOM ready
	$( document ).ready( function() {
		$( '[data-event="togglePagePerf"]' ).click( () => {
			window.dispatchEvent( new Event( 'toggleGDPagePerfEvent' ) );
			FLBuilder.MainMenu.hide();
		} );
	} );
}( jQuery, FLBuilder ) );
