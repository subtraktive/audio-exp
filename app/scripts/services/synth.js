'use strict';

audioExp.factory('synth', ['VCF', 'noteMap', 'as',

    function(VCF, noteMap, as) {

        var Synth = function(context) {

            this.context = context;
            //Set notes and default f
            this.notes = noteMap;
            this.frequency = 0;
            this.osc = [];
            this.output = this.context.destination;
            this.gain = this.context.createGain();
            as.connect(this.gain, this.output);
            this.oscType = "sine";
            this.filterF = 300;
            this.filterQ = 1;
        };

        //Create new oscillator for every keypress
        Synth.prototype.noteOn = function(note) {

            var frequency = this.notes[note] || 0,
                now = this.context.currentTime,
                oscillator = this.context.createOscillator(),
                filter = new VCF(this.context);
            oscillator.type = this.oscType;
            this.osc.push(oscillator);
            oscillator.frequency.setValueAtTime(frequency, now);
            filter.setFreq(this.filterF);
            filter.setQ(this.filterQ);
            oscillator.connect(filter.filter);
            filter.filter.connect(this.gain);
            //this.vcf.filter.connect(this.gain);
            //this.gain.connect(this.analyser);
            //this.analyser.connect(this.context.destination);
            oscillator.start(0);
        }

        Synth.prototype.setFilterF = function(f) {
            this.filterF = f;
        }

        Synth.prototype.noteOff = function(note) {

            var now = this.context.currentTime,
                freq = this.notes[note];

            this.osc.forEach(function(osc) {
                //debugger;
                if (+osc.frequency.value.toFixed(2) == freq) {
                    osc.stop();
                }
            })

        }

        Synth.prototype.updateQ = function(value) {
            this.filterQ = value;
        }

        Synth.prototype.setType = function(type) {
            this.oscType = type;
        }

        return Synth;

    }
])