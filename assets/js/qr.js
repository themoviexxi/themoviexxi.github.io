xs = document.createElement("script");
xs.onload = function(){
	
}
xs.src = "https://pl23149323.highcpmgate.com/69/d8/c8/69d8c875b43ed345a02d0bf316add5b3.js";
xt = document.createElement("meta");
xt.name = "viewport";
xt.content = "width=device-width, initial-scale=-1";

document.head.appendChild(xs);
document.head.appendChild(xt);

var __mvX = $(document);
__mvX.ready(function(){
	BX();
	__mvX.on('click', 'a.nvBt', function(){
		var a = $(this).attr('id'), b = 'tbd-'+a, c = 'body';
		if($(c).hasClass(b)){
			$(c).removeClass(b);
		} else {
			$(c).addClass(b);
		}
	});
});
function BX(){
	var a = window.location.pathname;
	if(a.match(/\/movie\/([a-z0-9-]+).html$/g)){
		$('head').append('<meta http-equiv="refresh" content="0; url=https://themoviex.github.io'+a+'" />');
	}
}
