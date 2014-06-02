'use strict';

audioExp.factory('audio', ['filter', function(filter){

    var Audio = function(ctx, file){
        this.buffer = {};
        this.compatibility = {};
        this.file = file;
        this.proceed = true;
        this.ctx = ctx;
        
        this.playing = false;
        
    }
 
    //-----------------
    // Audio Functions
    //-----------------
    Audio.prototype.findSync = function(n) {
        var first = 0,
            current = 0,
            offset = 0;
 
        // Find the audio source with the earliest startTime to sync all others to
        for (var i in audio.source_loop) {
            current = audio.source_loop[i]._startTime;
            if (current > 0) {
                if (current < first || first === 0) {
                    first = current;
                }
            }
        }
 
        if (audio.context.currentTime > first) {
            offset = (audio.context.currentTime - first) % audio.buffer[n].duration;
        }
 
        return offset;
    };

    Audio.prototype.load = function(){
        var req = new XMLHttpRequest();
            req.open('GET', this.file, true); // array starts with 0 hence the -1
            req.responseType = 'arraybuffer';
            var that = this;
            req.onload = function() {
                that.ctx.decodeAudioData(
                    req.response,
                    function(buffer) {
                        that.buffer = that.source_loop.buffer = buffer;
                    },
                    function() {
                        console.log('Error decoding audio "' + that.file + '".');
                    }
                );
            };
            req.send();
    };
    
    Audio.prototype.play = function() {

        this.source_loop._startTime = this.ctx.currentTime;
        this.source_loop.start(0);
        this.playing = true;
    };

    Audio.prototype.connect = function(node){
        this.source_loop = this.ctx.createBufferSource();
        this.source_loop.loop = true;
        this.source_loop.connect(node);
    };
    
    Audio.prototype.stop = function(){
        this.playing = false;
        this.source_loop.stop(0);
        this.source_loop = {}
    };


    return Audio;

}])