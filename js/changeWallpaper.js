function changeWallpaper(url){
	$('html').css('background-image', 'url('+ url +')');
	setCookie('wallpaper', url, 90);
}