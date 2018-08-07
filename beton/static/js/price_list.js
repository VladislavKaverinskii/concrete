$(document).ready(function() {
		
	var now = new Date();
    $(String(now.getFullYear())).appendTo("#price_subtitle");	
	console.log(String(now.getFullYear()));
		
	$.ajax({
		url: "/get_price_list",
		type: "get",		
		success: function(data) {
			//var menuTemplate = $('#price_table_item_tmpl').template(data).appendTo(".price_table");
			price_table = "";
			url_local = location.href.split("/")[location.href.split("/").length - 1];
			for (i in data) {

				if (((url_local=="concrete_mixes")&&(i=="Раствор цементный"))|| 
					((url_local=="cement_mixes")&&(i=="Бетон")))
						continue;
				for (j in data[i]) {					

					price_table += "<table class='price_table'>"
					//console.log(i + " " + j);
					price_table += "<tr><td class='head_price' colspan=2>" + i + " " + j + "</td><tr>";
					price_table += "<tr><td class='head_price'> Класс материала </td><td class='head_price'> Цена с НДС, грн. </td><tr>";
					for (k in data[i][j]) {
						//console.log(k + " " + data[i][j][k]);
						price_table += "<tr><td class='body_price'>" + k + "</td><td class='body_price'>" + data[i][j][k] + "</td><tr>";
					}
					price_table += "</table>";
					price_table += "<div class='sp_price' colspan=2></div>";
				}
			}
			
			$(price_table).appendTo("#price_table");
			//console.log(price_table);
		}
	});
	
	
});