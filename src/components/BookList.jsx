import BookCard from './BookCard.jsx'

function BookList({ books, genre }) {
  const filteredBooks = genre ? books.filter((item) => item.genre === genre) : books;

  if (filteredBooks.length > 0) {
      return (
          <div className="book-grid">
              <div>
                  {filteredBooks.map((item) => <BookCard book={item} key={item.id} />)}
              </div>
          </div>
      )

  }
  return (
    <div className="book-grid">
      <div>
          {"There are no books in this genre"}
      </div>
    </div>

  )
}

export default BookList;
