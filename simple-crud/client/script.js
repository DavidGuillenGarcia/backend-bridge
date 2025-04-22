const submitBtn = document.getElementById("submit");
const nameInput = document.getElementById("name");
const strengthInput = document.getElementById("strength");
const animalsList = document.getElementById("animal-list");
let currentId;

const clearList = () => {
  animalsList.innerHTML = "";
  nameInput.value = "";
  strengthInput.value = "";
};

const createAnimal = () => {
  fetch("http://localhost:5376", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      id: currentId + 1,
      name: nameInput.value,
      strength: Number(strengthInput.value),
    }),
  }).then();
  getAnimals();
};

const getAnimals = () => {
  clearList();
  fetch("http://localhost:5376")
    .then((res) => res.json())
    .then((animals) => {
      clearList();
      animals.forEach((animal) => {
        animalsList.innerHTML += `   <tr>
      <td class="py-1 ps-5 text-lg">${animal.name}</td>
      <td class="py-1 ps-5 text-lg">${animal.strength}</td>
      <td class="py-1 flex justify-center"><button onClick="deleteAnimal(${animal.id})" class="delete-btn border-1 border-white rounded-md bg-red-500 text-white flex text-lg cursor-pointer px-2 py-1"><img src="../src/images/delete.svg"/>Delete</button></td>
    </tr>`;
        currentId = animal.id;
      });
    });
};

const deleteAnimal = (id) => {
  fetch(`http://localhost:5376/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  }).then(getAnimals);
};

submitBtn.addEventListener("click", createAnimal);

getAnimals();
