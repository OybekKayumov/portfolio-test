"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var container = document.querySelector('.container');
var inpTitle = document.querySelector('#title');
var inpAuthor = document.querySelector('#author');
var addBtn = document.querySelector('#btn');
var alert = document.querySelector('#alert');

var Books = /*#__PURE__*/function () {
  function Books(title, author) {
    _classCallCheck(this, Books);

    this.title = title;
    this.author = author;
    this.removeBtn = [];
    this.bookList = [];
    this.title.focus();
  }

  _createClass(Books, [{
    key: "renderBooks",
    value: function renderBooks(list) {
      var _this = this;

      var books = '';
      list.forEach(function (div) {
        books += "\n        <article class=\"display\">\n          <p>\n          ".concat(div.authorBook, " by ").concat(div.titleBook, "\n          </p>\n          <button class=\"remBtn\">Remove</button>\n        </article>\n      ");
      });
      container.innerHTML = books;
      var remBtn = document.querySelectorAll('.remBtn');
      remBtn.forEach(function (btn, i) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();

          _this.removeBook(i);
        });
      });
    }
  }, {
    key: "removeBook",
    value: function removeBook(id) {
      var _this2 = this;

      this.bookList = JSON.parse(localStorage.getItem('storageData'));
      var filterArr = this.bookList.filter(function (book) {
        return _this2.bookList.indexOf(book) !== id;
      });
      localStorage.setItem('storageData', JSON.stringify(filterArr));
      this.renderBooks(filterArr);
    }
  }, {
    key: "addBook",
    value: function addBook() {
      var _this3 = this;

      addBtn.addEventListener('click', function (e) {
        if (_this3.author.value === '' || _this3.title.value === '') {
          alert.innerHTML = 'Enter "Book Title" and "Author"';
          return;
        }

        e.preventDefault();
        var bookObj = {
          authorBook: _this3.author.value,
          titleBook: _this3.title.value
        };
        var listBooks = JSON.parse(localStorage.getItem('storageData')) || [];
        listBooks.push(bookObj);
        localStorage.setItem('storageData', JSON.stringify(listBooks));

        _this3.renderBooks(listBooks);

        _this3.title.value = '';
        _this3.author.value = '';
        alert.innerHTML = '';
      });
    }
  }]);

  return Books;
}();

var Store = new Books(inpTitle, inpAuthor);
Store.bookList = JSON.parse(localStorage.getItem('storageData')) || [];
Store.renderBooks(Store.bookList);
Store.addBook();