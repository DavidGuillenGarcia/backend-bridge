const baseURL = "http://localhost:8000/books/";
let currentId;

const submitBtn = document.getElementById("submit-btn");
const bookTitleInput = document.getElementById("book-title");
const bookAuthorInput = document.getElementById("book-author");
const bookDescriptionInput = document.getElementById("book-description");
const bookTitleUpdatedInput = document.getElementById("book-title-updated");
const bookAuthorUpdatedInput = document.getElementById("book-author-updated");
const bookDescriptionUpdatedInput = document.getElementById(
  "book-description-updated"
);
const updateBtn = document.getElementById("update-btn");
const updateContainer = document.getElementById("update-book-container");
const bookList = document.getElementById("book-list");

const clearList = () => {
  bookList.innerHTML = "";
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookDescriptionInput.value = "";
};

const createBook = () => {
  fetch(baseURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      title: bookTitleInput.value,
      author: bookAuthorInput.value,
      description: bookDescriptionInput.value,
    }),
  }).then(getBooks);
};

const getBooks = () => {
  clearList();
  fetch(baseURL)
    .then((res) => res.json())
    .then((books) => {
      clearList();
      books.forEach((book) => {
        bookList.innerHTML += `   <tr>
      <td class="py-1 px-2 text-lg">${book.title}</td>
      <td class="py-1 px-2 text-lg">${book.author}</td>
      <td class="py-1 px-2 text-lg">${book.description}</td>
      <td class="py-1 px-2 flex justify-center gap-2"><button onClick="updateFormDisplay(${book.id})" class="edit-btn border-1 border-white rounded-md bg-yellow-400 text-black flex text-lg cursor-pointer p-2"><img src="../src/images/edit.svg"/></button><button onClick="deleteBook(${book.id})" class="delete-btn border-1 border-white rounded-md bg-red-500 text-white flex text-lg cursor-pointer p-2"><img src="../src/images/delete.svg"/></button></td>
    </tr>`;
      });
    });
};

const updateBook = () => {
  fetch(`${baseURL}${currentId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({
      title: bookTitleUpdatedInput.value,
      author: bookAuthorUpdatedInput.value,
      description: bookDescriptionUpdatedInput.value,
    }),
  }).then(() => {
    getBooks();
    updateContainer.classList.add("element-hidden");
  });
};

const updateFormDisplay = (id) => {
  updateContainer.classList.remove("element-hidden");
  currentId = id;
};

const deleteBook = (id) => {
  fetch(`${baseURL}${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  }).then(getBooks);
};

submitBtn.addEventListener("click", createBook);
updateBtn.addEventListener("click", updateBook);

getBooks();
