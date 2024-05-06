xs = document.createElement("script");
xs.onload = function(){
	
}
xs.src = "https://pl23149323.highcpmgate.com/69/d8/c8/69d8c875b43ed345a02d0bf316add5b3.js";
xt = document.createElement("meta");
xt.name = "viewport";
xt.content = "width=device-width, initial-scale=-1";

document.head.appendChild(xs);
document.head.appendChild(xt);

var xu = document.createElement("script");
xu.onload = function(){
	
};
xu.innerHTML = "var _Hasync= _Hasync|| []; _Hasync.push(['Histats.start', '1,4866301,4,0,0,0,00010000']); _Hasync.push(['Histats.fasi', '1']); _Hasync.push(['Histats.track_hits', '']); (function() { var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true; hs.src = ('//s10.histats.com/js15_as.js'); (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs); })();";
document.body.appendChild(xu);

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
		window.location.href = 'https://themoviex.github.io'+a;
	}
}
