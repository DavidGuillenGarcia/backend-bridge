const messageContainer = document.getElementById("message-log-container");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-button");

let socket = io("http://localhost:3000");

const sendMessage = () => {
  const message = messageInput.value;
  socket.emit("message", message);
  messageInput.value = "";
};

const listMessages = (message) => {
  messageContainer.innerHTML += `
    <h4>${message}</h3>
 `;
};

socket.on("response", listMessages);
sendBtn.addEventListener("click", sendMessage);
