const messageContainer = document.getElementById("message-log-container");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-buttons");

let socket = io("http://localhost:3000");

const sendMessage = () => {
  socket.emit();
};

sendBtn.addEventListener("click", sendMessage);
