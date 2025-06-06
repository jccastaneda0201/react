import React from 'react'
import './App.css'

// function Greating() {
//   return (
//     <h1>My first component</h1>
//   )
// }

// function Greating() {
//   return React.createElement('h1', {}, 'Hello World')
// }

// function Greating() {
//   return (
//     <>
//       <div className='someValue'>
//         <h3>My first component</h3>
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//         </ul>
//       </div>
//       <h2>Hello World</h2>
//       <input type="text" name='' id='' />
//     </>
//   )
// }

// function Greating() {
//   return (
//     <h2>Hello World</h2>
//   )
// }


// function Greating() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>Juan Carlos</h2>;
// const Message = () => {
//   return <h3>My first component</h3>;
// }

// export default Greating



//Componentes libros de Amazon


export const Booklist = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

export const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg" alt="Book Let Them" />
const Title = () => <h2>The Let Them Theory</h2>
const Author = () => {
  return (
    <h4>by Mel Robbins</h4>
  )
}


export default Booklist
