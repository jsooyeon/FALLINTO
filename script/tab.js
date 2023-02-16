$(function () {
	$('.tabcontent > div').hide();
	$('.tabnav a').click(function () {
		$('.tabcontent > div').hide().filter(this.hash).fadeIn();
		$('.tabnav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
});

$(function () {
	$('.top_left div, .top_left p').click(function () {
		$('.nav').addClass('out');
	});
	$('.close').click(function () {
		$('.nav').removeClass('out');
	});
});

$(function () {
	$('.box li').click(function () {
		$(this).addClass('w').siblings().removeClass('w');
	});
});