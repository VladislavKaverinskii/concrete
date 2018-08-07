$(document).ready(function() {
		
	var now = new Date();
    $(String(now.getFullYear())).appendTo("#price_subtitle");	
	console.log(String(now.getFullYear()));
		
	$.ajax({
		url: "/get_reinforced_price_list",
		type: "get",		
		success: function(data) {
			//var menuTemplate = $('#price_table_item_tmpl').template(data).appendTo(".price_table");
			var price_table = "";
			for (i in data) {
				//console.log(i);
				price_table += "<table class='price_table'>";
				price_table += "<tr><td class='head_price' colspan=3>" + i + "</td><tr>";
				price_table += "<tr><td class='head_price'> Наименование изделия </td><td class='head_price'> Объём 1шт м/3 </td> <td class='head_price'> Цена 1шт з ПДВ, грн </td> <tr>";
				for (j in data[i]) {					
					price_table += "<tr><td class='body_price'>" + data[i][j]["name"] + "</td><td class='body_price'>" + data[i][j]["volume"] + "</td><td class='body_price'>" + data[i][j]["price"] + "</td><tr>";
				}
				price_table += "</table>";
				price_table += "<div class='sp_price' colspan=2></div>";
				$(price_table).appendTo("." + data[i][0]["js_class"]);
				price_table = "";
			}
			
			//console.log(price_table);
		}
	});
	
	
});