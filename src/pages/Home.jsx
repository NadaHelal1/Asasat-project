import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Link className="text-red-500 bg-black " to='about'>
                About
        </Link>
    </div>
  )
}

export default Home
