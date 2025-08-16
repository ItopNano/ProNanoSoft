
// var chatbox = document.getElementById('chatbox');
// var inp_ms = document.getElementById("inp_ms");

// function btn(){

//     var ms = document.createElement('p');
//     text = "You: "+inp_ms.value;
//     ms.innerHTML = text;
//     ms.style.textAlign = "right";
//     chatbox.appendChild(ms);
//     reply(inp_ms.value);

// }

// function reply(msg){
//     console.log(msg);
//     msg = msg.toLowerCase();

//     if(msg.includes("hello") || msg.includes("hi")){
//         var ms = document.createElement('p');
//         text = "Picaso: Hello";
//         ms.innerHTML = text;
//         ms.style.textAlign = "left";
//         chatbox.appendChild(ms);
//     }
// }



// var dictionary = {
//     "hello": "Hi there! 👋",
//     "how are you": "I'm just a bot, but I'm doing fine!",
//     "bye": "Goodbye! Have a nice day!",
//     "help": "You can say 'hello', 'how are you', or 'bye'."
// };

// var chatbox = document.getElementById("chatbox");
// var input = document.getElementById("inp_ms");
// var button = document.getElementById("sendBtn");

// function addMessage(sender, text) {
//     const messageDiv = document.createElement("div");
//     messageDiv.className = `message ${sender}`;
//     messageDiv.innerText = text;
//     chatbox.appendChild(messageDiv);
//     chatbox.scrollTop = chatbox.scrollHeight;
// }

// function getBotResponse(message) {
//     message = message.toLowerCase();
//     for (let key in dictionary) {
//       if (message.includes(key)) {
//         return dictionary[key];
//       }
//     }
//     return "Sorry, I didn't understand that.";
// }

// button.addEventListener("click", () => {
//     const userText = input.value.trim();
//     if (userText) {
//       addMessage("user", userText);
//       const botReply = getBotResponse(userText);
//       setTimeout(() => addMessage("bot", botReply), 300); // Bot replies after a short delay
//       input.value = "";
//     }
// });

// input.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") button.click();
// });





var dictionary = {
  "hello": "Hi there!",
  "how are you": "I'm just a bot, but I'm doing fine!",
  "bye": "Goodbye! Have a nice day!",
  "help": "You can say 'hello', 'how are you', or 'bye'."
};

var chatbox = document.getElementById("chatbox");
var input = document.getElementById("inp_ms");
var button = document.getElementById("sendBtn");

function addMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.innerText = text;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(message) {
  message = message.toLowerCase();
  for (let key in dictionary) {
    if (message.includes(key)) {
      return dictionary[key];
    }
  }
  return "Sorry, I didn't understand that.";
}

function reply(message) {
  const botReply = getBotResponse(message);
  addMessage("bot", botReply);
  speak(botReply);
}

function speak(text) {
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  speechSynthesis.speak(utterance);
}

function delayedSend() {
  const userText = input.value.trim();
  if (userText !== "") {
    addMessage("user", userText);
    input.value = "";
    setTimeout(() => reply(userText), 500);
  }
}

button.addEventListener("click", delayedSend);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") delayedSend();
});


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

function startRec() {
  recognition.start();
}

recognition.onresult = function (event) {
  const transcript = event.results[0][0].transcript;
  input.value = transcript;
  delayedSend();
};

recognition.onend = function () {
  input.focus();
};

recognition.onerror = function (event) {
  console.error("Speech recognition error:", event.error);
};
