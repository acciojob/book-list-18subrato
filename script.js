
const submitButton = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submitButton.addEventListener("click", () => {

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
        return;
    }


    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete btn btn-danger btn-sm">Clear</button></td>
    `;


    bookList.appendChild(row);


    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});


bookList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove(); 
    }
});
