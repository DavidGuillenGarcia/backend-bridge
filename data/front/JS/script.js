const characterName = document.getElementById("name");
const characterKi = document.getElementById("ki");

fetch(`http://localhost:8080`).then((res) =>
  res.json().then((data) => {
    characterName.innerText = data.name;
    characterKi.innerText = data.ki;
  })
);
