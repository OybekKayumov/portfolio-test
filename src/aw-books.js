const container = document.querySelector('.container');
const inpTitle = document.querySelector('#title');
const inpAuthor = document.querySelector('#author');
const addBtn = document.querySelector('#btn');
const alert = document.querySelector('#alert');

class Books {
  constructor(title, author) {
    this.title = title;
    this.author =author;
    this.removeBtn = [];
    this.bookList = [];
    this.title.focus();
  }
  
  renderBooks(list) {
    let books = '';
    list.forEach((div) => {
      books += `
        <article class="display">
          <p>
          ${div.authorBook} by ${div.titleBook}
          </p>
          <button class="remBtn">Remove</button>
        </article>
      `;
    })
    container.innerHTML = books;
    const remBtn = document.querySelectorAll('.remBtn');
    remBtn.forEach((btn, i) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.removeBook(i)
      })
    })
  }

  removeBook(id) {
    this.bookList = JSON.parse(localStorage.getItem('storageData'));
    const filterArr = this.bookList.filter((book) => this.bookList.indexOf(book) !== id);
    localStorage.setItem('storageData', JSON.stringify(filterArr));
    this.renderBooks(filterArr);
  }

  addBook() {
    addBtn.addEventListener('click', (e) => {
      if (this.author.value === '' || this.title.value === '') {
        alert.innerHTML = 'Enter "Book Title" and "Author"';        
        return
      }
      e.preventDefault();
      const bookObj = {
        authorBook: this.author.value,
        titleBook: this.title.value,
      };

      const listBooks = JSON.parse(localStorage.getItem('storageData')) || [];
      listBooks.push(bookObj);
      
      localStorage.setItem('storageData', JSON.stringify(listBooks));
      this.renderBooks(listBooks);
      
      this.title.value ='';
      this.author.value = '';
      alert.innerHTML = '';
    })
  }
}

const Store = new Books(inpTitle, inpAuthor);
Store.bookList = JSON.parse(localStorage.getItem('storageData')) || [];
Store.renderBooks(Store.bookList);
Store.addBook();
