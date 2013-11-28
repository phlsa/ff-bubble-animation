var transitionType = "type-1";
var sloMoFactor = 1;

$( document ).ready( function() {

	$('.bubble-button').click(function( e ) {
		e.stopPropagation();
		var bubble = $(e.currentTarget).find('.bubble');

		// Custom stuff for type 4 which is more complicated
		if ( transitionType==='type-4' ) {
			if ( !bubble.hasClass('collapsed') && !bubble.hasClass('collapsed-special') ) {
				bubble.addClass('collapsed-special');
				_.delay(function() {
					bubble.removeClass('collapsed-special').addClass('collapsed')
				}, 250*sloMoFactor);
			} else {
				bubble.removeClass('collapsed collapsed-special');
			}
		} else {
			_.defer(function() { bubble.toggleClass('collapsed') });
		}
	});

	$('.browser-window').click(function( e ) {
		var bubble = $('.bubble');
		bubble.addClass('collapsed');
		if ( transitionType==='type-4' ) {
			bubble.addClass('collapsed-special');
			_.delay(function() {
				bubble.removeClass('collapsed-special').addClass('collapsed')
			}, 250*sloMoFactor);
		}
	});

	$('li').click(function( e ) {
		$('.browser-window').removeClass(transitionType);

		$('li').removeClass('selected');
		$(e.currentTarget).addClass('selected');
		transitionType = $(e.currentTarget).attr('id');

		$('.browser-window').addClass(transitionType);
	});

	$('.slo-mo').change(function( e ) {
		var elem = $(e.currentTarget);
		if ( elem.is(':checked') ) {
			sloMoFactor = 10;
			$('.bubble').css({'transition-duration': '2.5s'});
		} else {
			sloMoFactor = 1;
			$('.bubble').css({'transition-duration': '.25s'});
		}
	});

});