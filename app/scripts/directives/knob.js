'use strict';

audioExp.directive('knob', ['$timeout',

    function($timeout) {
        return {
            restrict: 'A',
            scope: {
                changeType: '@'
            },
            link: function(scope, elm, attr) {
                //$timeout(function() {
                console.log("scope is", scope)
                $(elm).knob({
                    'change': function(v) {
                        if (scope.changeType == "cutoff") {
                            scope.$parent.updateCutOff(v);
                        } else if (scope.changeType = "q") {
                            scope.$parent.updateQ(v);
                        }
                    }
                });
                //}, 200)
            }
        }
    }
])