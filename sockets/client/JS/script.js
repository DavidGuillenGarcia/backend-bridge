const messageContainer = document.getElementById("message-log-container");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-button");

let socket = io("http://localhost:3000");
let username = "David";

const sendMessage = () => {
  const message = { username: username, message: messageInput.value };
  socket.emit("message", message);
  messageInput.value = "";
};

const listMessages = (response) => {
  if (response.username == username) {
    messageContainer.innerHTML += `
  <div class="d-flex justify-content-start">
    <div class="card " style="width: 18rem;">
      <div class="card-body">
        <span class="card-title text-primary fs-6">${response.username}</span>
        <p class="card-text text-white"> ${response.message}</p>
      </div>
    </div>
  </div>
 `;
  } else {
    messageContainer.innerHTML += `
     <div class="d-flex justify-content-end">
      <div class="card " style="width: 18rem;">
        <div class="card-body">
          <span class="card-title text-primary fs-6">${response.username}</span>
          <p class="card-text text-white"> ${response.message}</p>
        </div>
      </div>
    </div>
 `;
  }
};

socket.on("response", listMessages);
sendBtn.addEventListener("click", sendMessage);
