/*! Created by Will Ye | 2020.04.03 */

var styleElm = document.getElementById("theme")
var status = localStorage.getItem('status') || 'dark'
if (status) {
	styleElm.href = `/media/css/theme-${status}.css`
}
function handleChangeTheme() {
	if (/theme-dark.css$/.test(styleElm.href)) {
		styleElm.href = `/media/css/theme-light.css`
		window.localStorage.setItem("status", "light") 
	} else {
		styleElm.href = `/media/css/theme-dark.css`
		window.localStorage.setItem("status", "dark") 
	}
}

$(function(){
	
	// 当前页面导航高亮
	var myNav = $("header .nav a"),i;
	for(i=0;i<myNav.length;i++){
		var links = myNav.eq(i).attr("href"),myURL = document.URL;
		if(myURL.indexOf(links) != -1) {
			myNav.eq(i).attr('class','on');
		}
		// if(myURL.indexOf("post") != -1){
		// 	$("header .nav li:nth-child(2) a").attr('class','on');
		// } // 检查地址中是否包含“post”，有的话则给第二个导航加上on
	}


	// $(window).scroll(function(){
	// 	var scrollTop = $(this).scrollTop();
	// 	var viewH = $(document).height();

	// 	if(viewH - scrollTop - $(this).height() < 1){
	// 		$("footer .more").text("↑ 返回顶部");
	// 		$("footer .more").addClass("backTop");
	// 	}else{
	// 		$("footer .more").text("↓ 向下滑动查看更多");
	// 		$("footer .more").removeClass("backTop");
	// 	}
	// });
	$(document).on("click","footer .more",function(){
		$("html,body").animate({scrollTop:0},500);
	});

})