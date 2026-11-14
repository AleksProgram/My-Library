import BookCard from './BookCard.jsx'

function BookList({ books, genre }) {
  const filteredBooks = genre ? books.filter((item) => item.genre === genre) : books;
  return (
    <div className="book-grid">
      <div>
        {filteredBooks.length > 0 ? filteredBooks.map((item) => <BookCard book={item} key={item.id} />)
            : "There are no books in this genre"}
      </div>
    </div>

  )
}

export default BookList;
