'use strict';

audioExp.factory('changeBg', [
    function() {

        var ChangeBg = function() {
            this.colors = ['#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#f39c12', '#ecf0f1']
        }

        ChangeBg.prototype.changeColor = function() {
            //document.body.setAttribute('style', 'background: '+_.sample(this.colors)+'');
        }

        return new ChangeBg();
    }
])