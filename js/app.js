var transitionType = "type-1";

$( document ).ready( function() {

	$('.bubble-button').click(function( e ) {
		e.stopPropagation();
		$(e.currentTarget).find('.bubble').toggleClass('collapsed-' + transitionType);
	});

	$('.browser-window').click(function( e ) {
		$('.bubble').addClass('collapsed-' + transitionType);
	});

	$('li').click(function( e ) {
		$('.bubble').removeClass('collapsed-' + transitionType);

		$('li').removeClass('selected');
		$(e.currentTarget).addClass('selected');
		transitionType = $(e.currentTarget).attr('id');

		$('.bubble').addClass('collapsed-' + transitionType);
	});

	$('.slo-mo').change(function( e ) {
		var elem = $(e.currentTarget);
		if ( elem.is(':checked') ) {
			$('.bubble').css({'transition-duration': '2s'});
		} else {
			$('.bubble').css({'transition-duration': '.25s'});
		}
	});

});