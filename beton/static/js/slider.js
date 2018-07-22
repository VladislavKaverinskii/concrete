
$(document).ready(function() {
	
	var slider_img_list = [];
	var N = 0;
	var slider_display = $("#metaslider_container_134").css("display");
	//console.log(slider_display);
	$("#metaslider_container_134").css("display", "none");
	
	$.ajax({
		url: "/get_slider_data",
		type: "get",
		success: function(data) {
			slider_img_list = data['slider_data'];
			
			slider_update ();
		}
	});
	


	//slider_update ();	
	
	function change_image () {
		if (slider_img_list.length > 0) {
			$(".slider-image").fadeTo(100, 0.5);
			//console.log(N);
			$(".slider-image").attr("src", "static/media/" + slider_img_list[N]["img"]);
			$(".caption").text(slider_img_list[N]["name"]);
			$(".slider-link").attr("href", slider_img_list[N]["url"]);
			$(".slider-image").fadeTo(2000, 1);
		}
	}
	
	function slider_update () {
		if (slider_img_list.length > 0) {
			$("#metaslider_container_134").css("display", slider_display);
			if (N < slider_img_list.length - 1)
				N++;
			else
				N = 0;
			change_image ();
			setTimeout(slider_update, 5000);
		}
	}
	
	
	
});