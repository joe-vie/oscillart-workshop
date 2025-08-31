const input = document.getElementById("Input");

// create web audio api elements
const audioCtx = new AudioContext(); // AudioContext is responsible for playing/pausing computa speaker >:3
const gainNode = audioCtx.createGain(); // gainNode controls the vol of AudioContext

// create Oscillator node
const oscillator = audioCtx.createOscillator();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
oscillator.type = "sine";

oscillator.start();
gainNode.gain.value = 0; // allows for us to start and silence our volumen :3

function frequency(pitch) {
  gainNode.gain.setValueAtTime(100, audioCtx.currentTime); // sets vol to 100%
  oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime); // set the frequency to the pitch parameter we placed onto the function
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 1); // sets the vol back to 0%
}

// cuz of autoplay rules, im afraid we gotta start the oscillator before the users does ANYTHING
audioCtx.resume(); // resumes the sound when user clicky butón but keeps the thingie quiet
gainNode.gain.value = 0;

function handle() {
  frequency(input.value);
}
