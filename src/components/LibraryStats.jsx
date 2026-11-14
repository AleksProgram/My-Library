
function LibraryStats( {books} ) {
    const bookCount = books.length;
    const bookAvailable = books.filter((book) => book.copies > 0).length;

    return (
        <div>
        <p>Total sum of books in the catalogue: {bookCount}</p>
        <p>Available for you: {bookAvailable}</p>
        </div>
    )
}

export default LibraryStats;