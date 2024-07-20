const Library = [];




let value = document.getElementById('form-body').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('user-name').value;
  const bookName = document.getElementById('book-name').value;
  const bookAuthor = document.getElementById('book-auth').value;

  const book = {
    username,
    bookName,
    bookAuthor
  };

  Library.push(book);
  console.log(Library);
  addBooksToLibrary(Library);

});
function addBooksToLibrary(Library) {
  const newBox = document.createElement('div');
  newBox.className = ' box';
  Library.forEach(user => {
    newBox.innerText = `User Name: ${user.username} \n
  Book Name: ${user.bookName}\n
  Book Author:${user.bookAuthor}\n `

  });
  document.getElementById('yb-body').appendChild(newBox);

};
