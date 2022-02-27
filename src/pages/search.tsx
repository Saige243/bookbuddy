import Booksearch from '../components/Booksearch'
import Navbar from '../components/Navbar'



export default function search() : JSX.Element {
  return (
    <div className = "booksearch" >
      <Navbar/>
      <Booksearch/>
    </div>
  )
}