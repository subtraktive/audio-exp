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

            //Create oscillator, filter and gain note
            //this.vcf = new VCF(this.context);
            // this.portamento = .1;
            // this.analyser = context.createAnalyser();
            // this.analyser.fftSize = 2048;

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

            //this.gain.gain.setValueAtTime(0, now);

        }

        Synth.prototype.noteSlide = function(note) {

            var now = this.context.currentTime,
                frequency = this.notes[note] || 0;

            this.oscillator.frequency.linearRampToValueAtTime(frequency, now + this.portamento);
        }

        Synth.prototype.setFilterFrequency = function(value) {

            var now = this.context.currentTime,
                min = 40,
                max = this.context.sampleRate / 2,
                noOfOctaves = Math.log(max / min) / Math.LN2,
                multiplier = Math.pow(2, noOfOctaves * (value - 1.0)),
                filterF = max * multiplier;
            this.vcf.filter.frequency.value = value;
            //this.vcf.setFreq( max * multiplier, now);

            //return filterF;
        }

        Synth.prototype.setFilterQ = function(value) {

            var now = this.context.currentTime;

            this.filter1.setQ(value * 30, now);

            return value * 30;

        }

        Synth.prototype.setType = function(type) {
            this.oscType = type;
        }

        return Synth;

    }
])