
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {books} from "./data/books.js";
import LibraryStats from "./components/LibraryStats.jsx";
import BookList from "./components/BookList.jsx";

function App() {

    const genres = [
        "Художественная литература",
        "Учебная литература",
        "Детская литература",
        "Публицистика",
        "Научно-популярная литература",
        "Хоррор"
    ];

  return (
      <div>
        <Header />
          <LibraryStats books={books} />
          <BookList books={books}/>
          {genres.map((genre) =>
              <section key={genre}><h2>{genre}</h2><BookList books={books} genre={genre}/> </section>
          )}
        <Footer />
      </div>
  )

}
export default App;
