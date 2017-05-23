/*jshint esversion: 6 */
import $ from 'jquery';

class PozdravnaCrta {
	constructor() {
		this.crtapf = $(".pozdravna-stran__crta-pf");
		this.crtazf = $(".pozdravna-stran__crta-zf");
		this.crtalp = $(".pozdravna-stran__crta-lp");
		this.potujociLinki = $('.potujoci-linki');
		this.zazeni(this.crtapf, 2000, "pf");
		this.zazeni(this.crtazf, 3000, "zf");
		this.zazeni(this.crtalp, 2500, "lp");
	}

	zazeni(element, zamik, oznaka) {
		var that = this;
		// console.log(that);
		setTimeout(function() {
			// console.log(that);
			element.addClass("pozdravna-stran__crta-" + oznaka + "--raztegnjena");
			setTimeout(function(){
				$('.potujoci-linki__' + oznaka).addClass("potujoci-linki__" + oznaka + "--nalozi");

			}, 300);

			setTimeout(function(){
				element.removeClass("pozdravna-stran__crta-" + oznaka + "--raztegnjena");
				that.poskrijPL();
			}, 2000);
		}, zamik);

	}

	poskrijPL () {
		var that = this;
		setTimeout(function() {
			that.potujociLinki.addClass('potujoci-linki__skrito');
		}, 5000);
	}


}

export default PozdravnaCrta;