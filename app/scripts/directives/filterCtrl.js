'use strict';

audioExp.directive("filterCtrl", [
    function() {
        return {
            restrict: 'A',
            link: function(scope, elm, attr) {
                var type = attr.filterCtrl;

                var setFilter = function(val) {
                    if (type == "cutoff") {
                        scope.filter.vcf.setFreq(val * 1000, scope.filter.vcf.filter.cTime);
                    }
                    if (type == "res") {
                        scope.filter.vcf.setQ(parseInt(val * 10, 10));
                    }
                }

                elm.bind("mousemove", function(e) {
                    var left, top, width, f;
                    width = $(this).width();
                    left = e.pageX - $(this).offset().left;
                    top = e.pageY - $(this).offset().top;
                    f = left / width;
                    $(this).find("span").css({
                        width: (f * 100) + "%"
                    });
                    //scope.filter.filter.frequency.value = f*10*500;
                    setFilter(f);

                    //scope.synth.setFilterFrequency(f*400);
                })


            }
        }
    }
])