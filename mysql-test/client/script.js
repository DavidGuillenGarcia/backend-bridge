const baseURL = "http://localhost:8000/cities/";

const submitBtn = document.getElementById("submit");
const nameInput = document.getElementById("name");
const countryInput = document.getElementById("country");
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
  }).then();
  getCities();
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
      <td class="py-1 flex justify-center"><button onClick="deleteCity(${city.id})" class="delete-btn border-1 border-white rounded-md bg-red-500 text-white flex text-lg cursor-pointer px-2 py-1"><img src="../src/images/delete.svg"/>Delete</button></td>
    </tr>`;
      });
    });
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

getAnimals();
