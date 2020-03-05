$(function(){
    
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
    });

    $('.works__gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
    });
    
    $('.about__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        fade: true,
        asNavFor: '.about__icons'
      });
      $('.about__icons').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.about__carousel',
        infinite: true, 
        dots: false,
        variableWidth: true,
        focusOnSelect: true,
      });

});