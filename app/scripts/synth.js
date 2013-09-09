
// window.onload = function(){

// 	var audiocontext = new webkitAudioContext(),
// 	synth = new Synth(audiocontext);

// 	synth.oscillator.type = 2;

// 	//Attaching events to the sliders
// 	var keyboard = document.getElementById('keyboard'),
// 	keys = keyboard.querySelectorAll('.key'),
// 	waveType = document.getElementById('wavetype'),
// 	filterF = document.getElementById('cutoff-freq'),
// 	filterQ = document.getElementById('filter-q');

// 	waveType.onchange = function(e){
// 		var wave = e.target.value;
// 		synth.oscillator.type = parseInt(wave);
// 	}

// 	filterF.onchange = function(e){
// 		synth.setFilterFrequency(e.target.value)
// 	}

// 	filterQ.onchange = function(e){
// 		synth.setFilterQ(e.target.value);
// 	}

// 	var colorKeys = function(elm){
// 		var val1 = parseInt(255*Math.random()),
// 		val2 = parseInt(255*Math.random()),
// 		val3 = parseInt(255*Math.random()),
// 		val4 = 1*Math.random();
// 		elm.setAttribute("style", "background-color:rgba("+val1+","+val2+","+val3+", 1);color:rgba("+val1+","+val2+","+val3+", 1)");
// 		window.setTimeout(function(){
// 			elm.removeAttribute("style");
// 		}, 300)
// 	}

// 	var animateNotes = function(note, elm){
// 		var noteNode = document.createElement('div');
// 		noteNode.classList.add('note');
// 		noteNode.innerHTML = note;
// 		if(!elm.contains(noteNode)){
// 			elm.appendChild(noteNode);
// 			// elm.classList.remove('color');
// 		}
// 		window.setTimeout(function(){
// 			elm.removeChild(noteNode);
// 		}, 2000)
// 	}

// 	Array.prototype.slice.call(keys).forEach(function(key){
		
// 		key.onmousedown = function(event){
// 			event.stopPropagation();
// 			var note = this.dataset.note + 5; //parseInt(8*Math.random());
// 			synth.noteOn(note);
// 			animateNotes(note, event.target);
// 			colorKeys(event.target);
// 		}

// 		key.onmouseup = function(event){
// 			event.stopPropagation();
// 			var note = this.dataset.note + 5; // parseInt(8*Math.random());
// 			synth.noteOff();
// 		}

// 		key.onmousemove = function(event){
// 			event.stopPropagation();
// 			var element = document.elementFromPoint(event.x, event.y);

// 			if(element.dataset.note){
// 				var note = element.dataset.note + parseInt(8*Math.random());
// 				synth.noteSlide(note);
// 			}
// 		}
// 	})
// }