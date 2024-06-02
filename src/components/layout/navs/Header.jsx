import { Link } from 'react-router-dom'
import Logo from '../../../assets/imgs/logo.png'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import User from '../../../assets/imgs/user.png'
const Header = () => {
  return (
   <div className="bg-white w-full  gap-5 flex justify-between items-center ">
        <div className='p-2 w-[30%] flex justify-end '>
            <img src={Logo} alt='logo' className='w-[172px] h-[115px]' />
        </div>
        <div className=' w-[60%] flex  justify-end'>
               <div className='flex gap-10 justify-center items-center'>
               <Link to='/' className='text-lg hover:text-orange font-serif text-[#37393F] text-center font-normal'>
                    Home
               </Link>
               <Link to='about' className='text-lg hover:text-orange font-serif text-[#37393F] text-center font-normal'>
                    About Us
               </Link>
               <Link to='/' className='text-lg hover:text-orange font-serif flex gap-1 text-[#37393F] text-center font-normal'>
                    Pages
                    <ChevronDownIcon className='w-5' />
               </Link>
               <Link to='/' className='text-lg hover:text-orange font-serif text-[#37393F] text-center font-normal'>
                    Services
               </Link>
               <Link to='/' className='text-lg hover:text-orange font-serif text-[#37393F] text-center font-normal'>
                    Blog
               </Link>
               <Link to='/' className='text-lg hover:text-orange font-serif text-[#37393F] text-center font-normal'>
                    Contact Us
               </Link>
                <button className='p-6 bg-orange rounded font-semibold text-white text-lg'>
                    Sign In
                </button>
                <div></div>
               </div>
        </div>
        <div className='w-[20%] gap-2 cursor-pointer hover:text-orange-600 user flex justify-start items-center'>
            <div className='w-[48px] h-[48px] rounded-full'>
                <img alt='profile' src={User} />
            </div>
            <div className=''>
                User
            </div>
        </div>
   </div>
  )
}

export default Header
