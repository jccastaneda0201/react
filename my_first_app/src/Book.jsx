
const Book = (props) => {
  //Destructuring
  const { img, title, author } = props
  // console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>by {author}</h4>
    </article>
  )
}



export default Book
