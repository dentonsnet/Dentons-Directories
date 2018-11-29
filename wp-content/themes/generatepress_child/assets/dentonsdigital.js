/**
 * @fileoverview Small custom front-end scripting in here.
 * @package Dentons Theme Javascript
 */


/**
 * This intercepts the natural carolsel PDF links and replaces them with the DFlip Flipbook.
 * As elementor force their scripts to be written after everything, I had to do a bit of a hack and
 * use a timeout of half a second before the script is run. 
 * @param none
 * @return none
 */
setTimeout(function(){
	jQuery(document).ready(function($){
		// loop - number of directories. Will not change.
		for(var i = 0; i < 25; i++){
			// get link for book
			var pdf_link = $("[data-swiper-slide-index='"+ i +"'] a").attr('href');
			// remove orginal link
			$("[data-swiper-slide-index='"+ i +"'] .elementor-carousel-image").unwrap();
			// re-wrap book element with DFlip link
			$("[data-swiper-slide-index='"+ i +"'] .elementor-carousel-image").wrap('<a class="_df_custom" source="'+ pdf_link +'" id="df_manual_custom"></a>');
		}
	});
}, 500);
