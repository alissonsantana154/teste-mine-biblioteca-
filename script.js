const booksByCategory = 
  {
    category: "Riqueza"
    books[
      {
        title: "OS segredos da mente milionária"
        author: "t. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia"
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "robert T, Kiyosaki e sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional"
    books[
      {
        title: "Você é Insubstituivel",
        author: "Augusto cury"
      },
      {
      title: "Ansiedade - como enfrentar o mal do século",
      author: "Augusto cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. covey"
      },
    ],
  },
]; 
  

const totalcategories = booksbycategory.length

console.log(totalcategories);
for(let category of booksbycategory) {
console.log('Total de livros da categorias', category.category) 
console.log(category. books.leng)
}

function countAuthors() {
  let authors = [];

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(authors.indexof(book.author == -1) {
        authors.push(book.author)
      }
    }
  }
  console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
  let book = [];

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(book.author === author) {
        books.push(book.title)
      }
    }
  }
  console.log(`Livros do autor ${author}: , ${books.join(", ")}`)
}
booksOfAuthor('Augusto cury')



