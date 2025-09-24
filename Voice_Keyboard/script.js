// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// // global variable to store transcripts
// const transcripts = [];
// const recordBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");
// const deleteBtn = document.getElementById("deletebtn");

// recognition.continuous = true;
// recognition.lang = 'en-US';

// // system only provides final results after finished speaking and not temporary ones
// recognition.interimResults = true;

// recognition.maxAlternatives = 1;

// const outputScreen = document.getElementById('voiceInput');
// recognition.onresult = (event) => {
//     const last = event.results.length - 1;
//     const latest_transcript = event.results[last][0].transcript;
//     // passing the transcript to an additional array to edit it later

// if (event.results[last].isFinal) {
//     transcripts.push(latest_transcript);
//     //outputScreen.textContent += latest_transcript + " ";
//     outputScreen.value += (outputScreen.value ? " " : "") + latest_transcript;
//   }
  
// };



// recordBtn.addEventListener('click', () => {
//     recognition.start();
//     console.log('ready to recieve :)');
//     recordBtn.classList.add("active");
//     recordBtn.textContent = "🎤"; // change icon

//     stopBtn.classList.remove("active");
//     stopBtn.textContent = "⏹️"; 
// });

// stopBtn.addEventListener('click', () => {    recognition.stop();
//     console.log('Speach recognition stopped');
//     stopBtn.classList.add("active");
//     stopBtn.textContent = "✋"; // change icon
//     recordBtn.classList.remove("active");
//     recordBtn.textContent = "▶️";
// });

// deleteBtn.addEventListener('click', () => {
//         outputScreen.value = "";
//         transcripts.length = 0;
// });const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Global variable to store transcripts
const transcripts = [];
const recordBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const deleteBtn = document.getElementById("deletebtn");

// Configuration
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

const outputScreen = document.getElementById('voiceInput');

// Event listener for speech recognition results
recognition.onresult = (event) => {
    const last = event.results.length - 1;
    const latest_transcript = event.results[last][0].transcript;

    if (event.results[last].isFinal) {
        transcripts.push(latest_transcript);
        outputScreen.value += (outputScreen.value ? " " : "") + latest_transcript;
    }
};

// Event listener for recognition errors
recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
};

// Event listener for the record button
recordBtn.addEventListener('click', () => {
    recognition.start();
    console.log('Speech recognition started. Ready to receive :)');
    recordBtn.classList.add("active");
    recordBtn.textContent = "🎤";

    stopBtn.classList.remove("active");
    stopBtn.textContent = "⏹️";
});

// Event listener for the stop button
stopBtn.addEventListener('click', () => {
    recognition.stop();
    console.log('Speech recognition stopped.');
    stopBtn.classList.add("active");
    stopBtn.textContent = "✋";
    recordBtn.classList.remove("active");
    recordBtn.textContent = "▶️";
});

// Event listener for the delete button
deleteBtn.addEventListener('click', () => {
    outputScreen.value = "";
    transcripts.length = 0; // Clear the stored transcripts as well
    console.log('Textarea and transcripts cleared.');
});