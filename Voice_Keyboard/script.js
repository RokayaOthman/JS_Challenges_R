const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// global variable to store transcripts
let transcripts = [];
const recordBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const deleteBtn = document.getElementById("deletebtn");

recognition.continuous = true;
recognition.lang = 'en-US';

// system only provides final results after finished speaking and not temporary ones
recognition.interimResults = true;

recognition.maxAlternatives = 1;

const outputScreen = document.getElementById('output');
recognition.onresult = (event) => {
    const last = event.results.length - 1;
    const latest_transcript = event.results[last][0].transcript;
    // passing the transcript to an additional array to edit it later

if (event.results[last].isFinal) {
    transcripts.push(latest_transcript);
    outputScreen.textContent += latest_transcript + " ";
  }
  recognition.addEventListener('end', recognition.start);
  recognition.start();
};


recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
};


function record(){
    recognition.start();
    console.log('ready to recieve :)');
    recordBtn.classList.add("active");
    recordBtn.textContent = "🎤"; // change icon

    stopBtn.classList.remove("active");
    stopBtn.textContent = "⏹️"; 
}

function stop(){
    recognition.stop();
    console.log('Speach recognition stopped');
    stopBtn.classList.add("active");
    stopBtn.textContent = "✋"; // change icon

    recordBtn.classList.remove("active");
    recordBtn.textContent = "▶️";
}

function deletetext(){
    outputScreen.textContent = "";
    
}
