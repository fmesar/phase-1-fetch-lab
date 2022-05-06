function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  let file = fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(books => renderBooks(books));
  
  return file
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
