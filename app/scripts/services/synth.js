'use strict';

audioExp.factory('synth', ['VCF', 'noteMap', 'as', 'Envelope', 'visualizer',

    function(VCF, noteMap, as, Envelope, Visualizer) {

        var Synth = function(context) {

            this.context = context;
            //Set notes and default f
            this.notes = noteMap;
            this.frequency = 0;
            this.osc = [];
            this.output = this.context.destination;
            this.gain = this.context.createGain();
            this.analyser = this.context.createAnalyser();
            this.analyser.fftSize = 2048;
            this.dataArray = new Uint8Array(this.analyser.frequencyBinCount)
            this.gain.connect(this.analyser);
            as.connect(this.analyser, this.output);
            this.visuals = new Visualizer(this.dataArray);
            this.oscType = "sine";
            this.filterF = 300;
            this.filterQ = 1;

            this.envSettings = {
                attack: .4,
                decay: .2,
                sustain: .8,
                release: 3
            }
        };

        //Create new oscillator for every keypress
        Synth.prototype.noteOn = function(note) {

            var frequency = this.notes[note] || 0,
                now = this.context.currentTime,
                oscillator = this.context.createOscillator(),
                filter = new VCF(this.context),
                env = new Envelope(this.context, this.envSettings);
            env.connect(this.gain.gain);
            oscillator.type = this.oscType;
            this.osc.push(oscillator);
            oscillator.frequency.setValueAtTime(frequency, now);
            filter.setFreq(this.filterF);
            filter.setQ(this.filterQ);
            oscillator.connect(filter.filter);
            filter.filter.connect(this.gain);
            env.trigger();
            oscillator.start(0);
            this.analyser.getByteTimeDomainData(this.dataArray);
            this.visuals.draw();
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

        Synth.prototype.setAttack = function(val){
            this.envSettings.attack = val;
        }

        Synth.prototype.setDecay = function(val){
            this.envSettings.decay = val;
        }

        Synth.prototype.setRelease = function(val){
            this.envSettings.release = val;
        }

        Synth.prototype.setSustain = function(val){
            this.envSettings.sustain = val;
        }

        return Synth;

    }
])