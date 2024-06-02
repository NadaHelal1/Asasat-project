import Logo from '../../assets/imgs/logo-footer.png'
import Location from '../../assets/imgs/locatoion-blue.png'
import Call from '../../assets/imgs/call.svg';
import Mail from '../../assets/imgs/mail.svg';

const Footer = () => {
  return (
    <div className="bg-black-nav w-full md:h-[703px] flex justify-center items-center">
        <div className="max-w-[1220px]">
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-between items-center flex-col md:flex-row gap-24 border-b border-[#6C6D72] pb-3">
                    <div>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                        <div className='flex self-start justify-start  gap-2 items-center'>
                            <div className='flex  justify-center items-center w-[55px] h-[55px] rounded-full bg-[#4C4D52]'>
                            <img src={Call} alt='phone' />
                            </div>
                            <div> 
                            <h4 className='font-serif font-semibold text-[20px] text-white '>
                                Call Us
                                </h4>
                                <p className='font-normal font-serif text-white text-lg'>
                                    01158409358
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-start gap-2 items-center'>
                            <div className='flex justify-center items-center w-[55px] h-[55px] rounded-full bg-[#4C4D52]'>
                            <img src={Mail} alt='E-Mail' />
                            </div>
                            <div> 
                            <h4 className='font-serif font-semibold text-[20px] text-white '>
                                Mail Us
                                </h4>
                                <p className='font-normal font-serif text-white text-lg'>
                                Info@Example.com
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-start gap-2 items-center'>
                            <div className='flex justify-center items-center w-[55px] h-[55px] rounded-full bg-[#4C4D52]'>
                            <img src={Location} alt='Address' />
                            </div>
                            <div> 
                            <h4 className='font-serif font-semibold text-[20px] text-white '>
                                Location
                                </h4>
                                <p className='font-normal font-serif text-white text-lg'>
                                Amsterdam, 109-74
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
