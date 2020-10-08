$(document).ready(function(){
			
			$("a").on ('click', function(event) {

			if (this.hash !== "") {
				event.preventDefault();

				var hash = this.hash;

				$('html, body').animate(
					{ scrollTop: $(hash).offset().top }, 3000, function()
				
				{ window.location.hash = hash; } );
									}
			});
			});

			$(function () {
				$(document).scroll(function () {
				  var $navbar = $(".navbar-fixed-top");
				  $navbar.toggleClass('scrolled', $(this).scrollTop() > $navbar.height());
				});
			  });