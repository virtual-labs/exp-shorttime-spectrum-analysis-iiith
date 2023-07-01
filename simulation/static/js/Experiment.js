// This function defines the wavesurfer waveform and its related information
var wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#176696",
  barHeight: 2,
  barGap: 1,
  height: 200,
  backgroundColor: "#f5f5f5",
  normalize: "true",
});

function clearcontent(element) {
  element.value = "";
}

// The function handling the play and pause button event

function playButton() {
  wavesurfer.playPause();
}

// This functions handle the main container whenver any change is brought to the audio file option
function generateSpectrum() {
  document.getElementById("windowformtype").selectedIndex = 0;
  changeSpectrum("rectangular");
  document.getElementById("nfftvalue").selectedIndex = 0;
  changefft(64);
  document.getElementById("main-container").style.visibility = "visible";
}

// This function handles windowed waveform
function changeSpectrum(elem) {
  var source = document.getElementById("windowedspecturms");
  var clone = source.cloneNode(true);
  clone.setAttribute(
    "src",
    "graphs/windowed/line-" +
      document.getElementById("audionum").value +
      "-" +
      elem +
      ".html"
  );
  source.parentNode.replaceChild(clone, source);
}

// This functions handle Log spectrum
function changefft(elem) {
  var source = document.getElementById("nfftspectrum");
  var clone = source.cloneNode(true);
  clone.setAttribute(
    "src",
    "graphs/logspectrum/stft-wav" +
      document.getElementById("audionum").value +
      "-nfft" +
      elem +
      ".html"
  );
  source.parentNode.replaceChild(clone, source);
}

// This function Loads audio on startup of the page.
function LoadAudio(elem) {
  document.getElementById("audionum").value = elem.value;
  document.getElementById("windowformtype").selectedIndex = 0;
  document.getElementById("main-container").style.visibility = "hidden";
  var source = document.getElementById("windowedspecturms");
  var clone = source.cloneNode(true);
  clone.setAttribute("src", "");
  source.parentNode.replaceChild(clone, source);

  var source = document.getElementById("nfftspectrum");
  var clone = source.cloneNode(true);
  clone.setAttribute("src", "");
  source.parentNode.replaceChild(clone, source);

  if (elem.value == 1 || elem.value == 2) {
    wavesurfer.load("static/wav/audio" + elem.value + ".wav");
    console.log(elem.value);
  } else {
    //wavesurfer.load("static/wav/audio2.wav");
    console.log(elem.value);
  }
}
