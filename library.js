//new book constructor function
function book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
  this.info = function () {
    return `The ${this.title} by ${this.author}, ${this.page} pages, ${this.read}`;
  };
}

let library = [];
// this function create new book and add it to the library when called
function addToLibrary(title, author, page, read) {
  const newBook = new book(title, author, page, read);
  library.push(newBook);
}
addToLibrary("Hibiscus", "Odera", 25 + " " + "pages", "read");
addToLibrary("Half Of a Yellow Sun", "kingsley", 50 + " " + "pages", "read");
addToLibrary("Diary Of a Dead African", "Ani", 100 + " " + "pages", "read");
addToLibrary("Partner", "Chisom", 125 + " " + "pages", "not read yet");

const display = document.querySelector("#display");
const heading = document.createElement("h2");
heading.textContent = "Library Books";
display.appendChild(heading);
// this function loops through the book in the library and display them when called
function displayBook() {
  library.forEach((bk) => {
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = bk.title;
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author: ${bk.author}`;
    const bookPages = document.createElement("p");
    bookPages.textContent = bk.page;
    const bookRead = document.createElement("p");
    bookRead.textContent = bk.read;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete book";

    display.appendChild(bookTitle);
    display.appendChild(bookAuthor);
    display.appendChild(bookPages);
    display.appendChild(bookRead);
    display.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      display.removeChild(bookTitle);
      display.removeChild(bookAuthor);
      display.removeChild(bookPages);
      display.removeChild(bookRead);
      display.removeChild(deleteBtn);
    });
  });
}
displayBook();

const displayBtn = document.createElement("div");
displayBtn.style.marginTop = "30px";
displayBtn.style.marginBottom = "20px";
const NewBookbtn = document.createElement("button");
const body = document.querySelector("body");
NewBookbtn.textContent = "New Book";
displayBtn.appendChild(NewBookbtn);

body.appendChild(displayBtn);

NewBookbtn.addEventListener("click", function addNewBook() {
  const form = document.createElement("form");
  form.style.height = "200px";
  form.style.border = "2px solid red";
  // the close form button
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  form.appendChild(closeBtn);
  //form heading
  const NewBook = document.createElement("h2");
  NewBook.textContent = "Creat A New Book";
  NewBook.style.display = "flex";
  NewBook.style.justifyContent = "center";
  form.appendChild(NewBook);
  //this contain contain the form divs
  const divContainer = document.createElement("div");
  divContainer.style.marginLeft = "10px";
  divContainer.style.marginTop = "20px";
  divContainer.style.display = "flex";
  //the form divs
  const divTitle = document.createElement("div");
  const divAuthor = document.createElement("div");
  const divPage = document.createElement("div");
  const divRead = document.createElement("div");
  divContainer.appendChild(divTitle);
  divContainer.appendChild(divAuthor);
  divContainer.appendChild(divPage);
  divContainer.appendChild(divRead);
  form.appendChild(divContainer);
  //data input space
  const inputTitle = document.createElement("input");
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Book Title:";
  divTitle.appendChild(titleLabel);
  divTitle.appendChild(inputTitle);

  const inputAuthor = document.createElement("input");
  const authorLabel = document.createElement("label");
  authorLabel.textContent = "Book Author:";
  divAuthor.appendChild(authorLabel);
  divAuthor.appendChild(inputAuthor);
  const inputPages = document.createElement("input");
  const pagesLabel = document.createElement("label");
  pagesLabel.textContent = "Book Page:";
  divPage.appendChild(pagesLabel);
  divPage.appendChild(inputPages);

  const inputRead = document.createElement("input");
  const readLabel = document.createElement("label");
  readLabel.textContent = "Read Status:";
  divRead.appendChild(readLabel);
  divRead.appendChild(inputRead);
  // form submit button
  const submit = document.createElement("button");
  const divSubmit = document.createElement("div");
  divSubmit.style.display = "flex";
  divSubmit.style.justifyContent = "center";
  divSubmit.style.marginTop = "20px";
  submit.textContent = "Submit";
  divSubmit.appendChild(submit);
  form.appendChild(divSubmit);

  submit.addEventListener("click", addBook);
  function addBook(e) {
    addToLibrary(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      inputRead.value
    );

    const bookTitle = document.createElement("h1");
    bookTitle.textContent = inputTitle.value;
    inputTitle.value = "";
    display.appendChild(bookTitle);
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = inputAuthor.value;
    inputAuthor.value = "";
    display.appendChild(bookAuthor);
    const bookPages = document.createElement("p");
    bookPages.textContent = inputPages.value;
    inputPages.value = "";
    display.appendChild(bookPages);
    const bookRead = document.createElement("p");
    bookRead.textContent = inputRead.value;
    inputRead.value = "";
    display.appendChild(bookRead);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    display.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      display.removeChild(bookTitle);
      display.removeChild(bookAuthor);
      display.removeChild(bookPages);
      display.removeChild(bookRead);
      display.removeChild(deleteBtn);
    });

    e.preventDefault();
  }

  // this function closes the form that was created
  closeBtn.addEventListener("click", close);

  function close(e) {
    displayBtn.removeChild(form);
    e.preventDefault();
    NewBookbtn.addEventListener("click", addNewBook);
  }

  displayBtn.appendChild(form);
  NewBookbtn.removeEventListener("click", arguments.callee);
});
