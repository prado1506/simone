var $ = jQuery.noConflict();



// Progress Bar

$(document).ready(function ($) {
    "use strict";

    $('.skill-shortcode').appear(function () {
        $('.progress').each(function () {
            $('.progress-bar').css('width',  function () { return ($(this).attr('data-percentage') + '%')});
        });
    }, {accY: -100});


});

clickMenu = function(menu,element,cname) {
	var getEls = document.getElementById(menu).getElementsByTagName(element);

	for (var i=0; i<getEls.length; i++) {
			getEls[i].onclick=function() {
			if ((this.className.indexOf(cname))!=-1)
			{
			if ((this.className.indexOf('click'))!=-1) {
				this.className=this.className.replace("click", "");;
				}
				else {
				this.className+=" click";
				}
			}
		}
	}
}
