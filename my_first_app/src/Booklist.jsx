import './Booklist.css'

const books = [
  {
    author: 'Mel Robbins',
    title: 'The Let Them Theory',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg',
    id: 1
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2
  },
];


export const Booklist = () => {
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

const Book = (props) => {
  //Destructuring
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>by {author}</h4>
    </article>
  )
}



export default Booklist
