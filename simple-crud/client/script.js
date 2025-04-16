const submitBtn = document.getElementById("submit");
const nameInput = document.getElementById("name");
const strengthInput = document.getElementById("strength");

const createAnimal = () => {
  fetch("http://localhost:5376/animals", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name: nameInput.value,
      strength: strengthInput.value,
    }),
  }).then();
};

submitBtn.addEventListener("click", createAnimal);
