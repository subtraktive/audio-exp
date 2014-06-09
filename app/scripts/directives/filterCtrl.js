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
				scope.filter.filter.frequency.value = f*10*500;
				scope.filter.setFreq(f*10*500, scope.filter.filter.cTime);
			})
		}
	}
}])