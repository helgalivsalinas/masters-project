$(function() {
	$('#dream').waypoint(function(direction) {
		$('#nav li').removeClass('highlight');
		$('#sidebar1').toggleClass('highlight');
	});

	$('#who').waypoint(function(direction) {
		$('#nav li').removeClass('highlight');
		$('#sidebar2').toggleClass('highlight');
	});

	$('#history').waypoint(function(direction) {
		$('#nav li').removeClass('highlight');
		$('#sidebar3').toggleClass('highlight');
	});

	$('#tl').waypoint(function(direction) {
		$('#nav li').removeClass('highlight');
		$('#sidebar4').toggleClass('highlight');
	});
});