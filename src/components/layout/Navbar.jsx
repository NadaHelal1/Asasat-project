import Header from "./navs/Header"
import HeaderTop from "./navs/HeaderTop"

const Navbar = () => {
  return (
    <div className="bg-black-nav flex flex-col justify-center items-center">
     <HeaderTop />
      <Header />
    </div>
  )
}

export default Navbar
