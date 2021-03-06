function renderStarRating(e, r) {
    for (var t = 1; 5 >= t; t++) jQuery(r).find("#rr_star_" + t).removeClass("glyphicon-star"), jQuery(r).find("#rr_star_" + t).removeClass("glyphicon-star-empty"), jQuery(r).find("#rr_star_" + t).addClass(e >= t ? "glyphicon-star" : "glyphicon-star-empty")
}

function initExcerpt(e, r, t, n) {
    if (reviewText = jQuery(e).text(), reviewLength = n, reviewText.length > reviewLength) {
        if (" " != reviewText.charAt(reviewLength))
            for (;
                " " != reviewText.charAt(reviewLength) && "" != reviewText.charAt(reviewLength);) reviewLength++;
        if ("" == reviewText.charAt(reviewLength + 1)) return;
        var i = reviewText.substr(0, reviewLength),
            s = reviewText.substr(reviewLength);
        jQuery(e).html(i + '<span class="ellipses">... </span><span class="more_text" style="display:none;">' + s + "</span>"), jQuery(e).parent().append(function() {
            return '</br><a href="#" class="read_more">' + r + '</a><a href="#" class="show_less" style="display:none;">' + t + "</a>"
        }), setTimeout(function() {
            jQuery(e).parent().find("a.read_more").click(function(e) {
                e.preventDefault(), jQuery(e.target).hide(), jQuery(e.target).parents(".rr_review_text").find("span.ellipses").hide(), jQuery(e.target).parents(".rr_review_text").find(".more_text").show(), jQuery(e.target).parents(".rr_review_text").find("a.show_less").show()
            }), jQuery(e).parent().find("a.show_less").click(function(e) {
                e.preventDefault(), jQuery(e.target).hide(), jQuery(e.target).parents(".rr_review_text").find(".ellipses").show(), jQuery(e.target).parents(".rr_review_text").find(".more_text").hide(), jQuery(e.target).parents(".rr_review_text").find("a.read_more").show()
            })
        }, 300)
    }
}
jQuery(function() {
    ("undefined" == typeof moreText || "" === moreText) && (moreText = "Read More"), ("undefined" == typeof lessText || "" === lessText) && (lessText = "Show Less"), jQuery(".rr_review_text").each(function() {
        max_length = "number" == typeof excerptLength && excerptLength > 50 ? excerptLength : 150, review_text_element = jQuery(this).find('span[itemprop="reviewBody"]'), review_text_element.text().length > max_length && initExcerpt(review_text_element, moreText, lessText, max_length)
    }), jQuery(".rr_review_form").each(function() {
        jQuery(this).find(".rr_star").hover(function() {
            renderStarRating(parseInt(jQuery(this).attr("id").charAt(8)), jQuery(this).parent())
        }, function() {
            renderStarRating(parseInt(jQuery(this).parent().closest("form").find("#rRating").val()), jQuery(this).parent())
        }), jQuery(this).find(".rr_star").click(function(e) {
            thing = jQuery(this).closest("form").find("#rRating"), thing.val(jQuery(this).attr("id").charAt(8))
        })
    })
});