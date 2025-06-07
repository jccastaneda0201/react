import './Booklist.css'


const firstBook = {
  author: 'Mel Robbins',
  title: 'The Let Them Theory',
  img: 'https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg',
};
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
};

export const Booklist = () => {
  return (
    <section className='booklist'>
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
    </section>
  )
}

const Book = ({ img, title, author }) => {
  //Destructuring
  // const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>by {author}</h4>
    </article>
  )
}



export default Booklist
