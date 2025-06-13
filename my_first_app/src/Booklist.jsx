import Book from "./Book";
import { books } from './books';

const Booklist = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book {...book} key={book.id} />
        )
      })}
    </section>
  )
}

export default Booklist;