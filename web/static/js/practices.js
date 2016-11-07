$('.practice-info-body').hide();
$(function() {
	$('.action-show-practice-info').click(
			function() {
				console.log('Show practice info');
				$('.practice-info-toggle').toggle();
				$('.practice-info-body').slideDown(500)
			});
	$('.action-hide-practice-info').click(function() {
		console.log('Hide practice info');
		$('.practice-info-toggle').toggle();
		$('.practice-info-body').slideUp(500);
	});
});
