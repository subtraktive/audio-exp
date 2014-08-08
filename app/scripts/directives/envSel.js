'use strict';

audioExp.directive('envelopeSel', [function(){
	return{
		restrict: 'A',
		link: function(scope, elm, attr){
			var sel = $(elm).find('.env');

			var updateValues = function(type, val){
				switch(type){
					case 'attack': scope.synth.setAttack(val);
					break;

					case 'decay': scope.synth.setDecay(val);
					break;

					case 'sustain': scope.synth.setSustain(val);
					break;

					case 'release': scope.synth.setRelease(val*2+.8);
					break;
				}
			}

			$(sel).bind("mousemove", function(e) {
                    var left, top, height, f, klass;
                    klass = $(this).attr('class').split(" ")[1];
                    height = $(this).height();

                    left = e.pageX - $(this).offset().left;
                    top = e.pageY - $(this).offset().top;
                    if(top >0){
                    	f = (height - top)/height;
                	}
                    $(this).find("p").css({
                        height: f*100 + "%"
                    });
                   	updateValues(klass, f)
                })
		}
	}
}])