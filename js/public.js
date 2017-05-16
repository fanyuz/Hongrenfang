window.onload = function(){		//设置rem
	document.documentElement.style.fontSize = innerWidth/16+"px";
	onresize = function(){
		document.documentElement.style.fontSize = innerWidth/16+"px";
	}
}

$(function(){
	var show = true;
	$("#menu").click(function(){
		if (show) {
			$("#menulist").css("display","block");
			$(this).css("background","url(img/dropMenu_03.png) no-repeat");
			$(this).css("background-size","100% 100%")
			show = false;
		} else{
			$("#menulist").css("display","none");
			$(this).css("background","url(img/menu.png) no-repeat");
			$(this).css("background-size","100% 100%")
			show = true;
		}
		
	})
})

