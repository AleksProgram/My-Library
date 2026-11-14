import Card from './Card.jsx'
import AvailabilityBadge from './AvailabilityBadge.jsx'

function BookCard({ book }) {
  return (
    <Card>
      <h2>{book.title}</h2>
      <p className="book-author">{book.author}</p>
      <div className="book-meta">
        <span>{book.year}</span>
        <span>{book.genre}</span>
        <span>{book.copies} {book.copies === 1 ? 'copy' : 'copies'}</span>
      </div>
        {book.year < 2000 && <p>Classic Edition</p>}
      <AvailabilityBadge book={book} />
    </Card>
  )
}

export default BookCard
