(function ($) {
	$.fn.isYouTube = function () {
		var regExpr = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
		var curVal = $(this).val();
		return (curVal.match(regExpr)) ? RegExp.$1 : false;
	}
})(jQuery);
$(document).ready(function () {
	$('form[name=yt]').submit(function () {
		var ytId = $('input[name=yturl]').isYouTube();
		if (ytId !== false) {
			$iframe = $('<iframe>');
			$iframe.attr({ src: 'https://www.yt-download.org/@api/button/mp3/' + ytId, frameBorder: 0 });
			$iframe.css({ width: '100%', height: '100%', scrolling: 'no'  });
			//Remove iframe if one exists (on second url some will exists)
			$('#converter-wrapper').find('iframe').remove()
			$('#converter-wrapper').append($iframe);
		} else {alert("Please enter a valid youtube url");}
		return false;
	});
});