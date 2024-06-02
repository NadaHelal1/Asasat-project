/* eslint-disable react/prop-types */
import True from '../../assets/imgs/true.png';

const WelcomeCard = ({title , content}) => {
  return (
    <div className='flex p-5 border border-[#E3E3E3] w-full pt-7 pr-5 pb-7 pl-9 flex-col gap-1'>
        <div className='flex items-start gap-3 w-full  font-serif   '>
            <img src={True} alt='true' className='mt-0'/>
            <div>
            <p className='text-[20px] font-semibold'>
                {title}
            </p>
            <p className='text-[#7D7D7D]  text-wrap leading-6 max-w-[550px] font-serif mt-4 font-normal'>
                {content}
            </p>
            </div>
        </div>
    </div>
  )
}

export default WelcomeCard
