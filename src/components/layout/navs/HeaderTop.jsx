import Location from '../../../assets/imgs/location.svg';
import Email from '../../../assets/imgs/email.svg';
import Insta from '../../../assets/imgs/insta.svg';
import Facebook from '../../../assets/imgs/facebook.png';
import Pent from '../../../assets/imgs/pent.png';
import Twiter from '../../../assets/imgs/twiter.png';

const HeaderTop = () => {
  return (
    <div className="max-h-[60px] my-2 h-fit max-w-[1216px] w-full text-white">
    <div className="max-w-[1216px] h-fit flex justify-around items-center py-2">
      <div className="flex justify-center gap-5 w-full items-center">
        {/* left side */}
        <div className='flex items-center gap-2 justify-center'>
          <img src={Location} alt='location' width={15} height={22} />
          <p className='text-white text-sm font-normal'>
          24 Olive Street, Prairie, NY 53590
          </p>
        </div>
        <div className='flex items-center gap-2 mb-0 justify-center'>
          <img src={Email} alt='location' width={20} height={15} />
          <p className='text-white text-sm font-normal'>
          whitecollar@gmail.com
                        </p>
        </div>
      </div>
      <div className='flex  w-full justify-end gap-12 items-center'>
      <p className='text-white text-sm font-normal'>
        English
          </p>
          <div className='flex justify-center items-center gap-3'>
              <img src={Insta} alt='icons' />
              <img src={Facebook} alt='icons' />
              <img src={Pent} alt='icons' />
              <img src={Twiter} alt='icons' />

          </div>
      </div>
    </div>
  </div>
  )
}

export default HeaderTop
