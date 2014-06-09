'use strict';

audioExp.directive("filterCtrl", [function(){
	return{
		restrict:'A',
		link: function(scope, elm, attr){
			elm.bind("mousemove", function(e){
				var left, top, width, f;
				width = $(this).width();
				left = e.pageX - $(this).offset().left;
				top = e.pageY - $(this).offset().top;
				f = left/width;
				console.log("top left", top, left, scope.filter);
				//scope.filter.filter.frequency.value = f*10*500;
				scope.filter.vcf.setFreq(f*1000, scope.filter.vcf.filter.cTime);
				//scope.synth.setFilterFrequency(f*400);
			})
		}
	}
}])