const baseURL = "http://localhost:8000/cities/";
let currentId;

const submitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById("name");
const countryInput = document.getElementById("country");
const updatedNameInput = document.getElementById("updated-name");
const updatedCountryInput = document.getElementById("updated-country");
const updateBtn = document.getElementById("update-btn");
const updateContainer = document.getElementById("update-city-container");
const cityList = document.getElementById("city-list");

const clearList = () => {
  cityList.innerHTML = "";
  nameInput.value = "";
  countryInput.value = "";
};

const createCity = () => {
  fetch(baseURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name: nameInput.value,
      country: countryInput.value,
    }),
  }).then(getCities);
};

const getCities = () => {
  clearList();
  fetch(baseURL)
    .then((res) => res.json())
    .then((cities) => {
      clearList();
      cities.forEach((city) => {
        cityList.innerHTML += `   <tr>
      <td class="py-1 ps-5 text-lg">${city.name}</td>
      <td class="py-1 ps-5 text-lg">${city.country}</td>
      <td class="py-1 flex justify-center gap-2"><button onClick="updateFormDisplay(${city.id})" class="edit-btn border-1 border-white rounded-md bg-yellow-400 text-black flex text-lg cursor-pointer p-2"><img src="../src/images/edit.svg"/></button><button onClick="deleteCity(${city.id})" class="delete-btn border-1 border-white rounded-md bg-red-500 text-white flex text-lg cursor-pointer p-2"><img src="../src/images/delete.svg"/></button></td>
    </tr>`;
      });
    });
};

const updateCity = () => {
  fetch(`${baseURL}${currentId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({
      name: updatedNameInput.value,
      country: updatedCountryInput.value,
    }),
  }).then(() => {
    getCities();
    updateContainer.classList.add("element-hidden");
  });
};

const updateFormDisplay = (id) => {
  updateContainer.classList.remove("element-hidden");
  currentId = id;
};

const deleteCity = (id) => {
  fetch(`${baseURL}${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  }).then(getCities);
};

submitBtn.addEventListener("click", createCity);
updateBtn.addEventListener("click", updateCity);

getCities();
