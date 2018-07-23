
$(document).ready(function() {
		
	$.ajax({
		url: "/get_slider_data",
		type: "get",
		success: function(data) {
			var menuTemplate = $('#menu_item_tmpl').template(data).appendTo(".menu_list");
		}
	});
	
	
});