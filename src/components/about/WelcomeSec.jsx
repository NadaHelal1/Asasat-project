import { Link } from "react-router-dom";
import aboutImg from "../../assets/imgs/about1.png";
import WelcomeCard from "./WelcomeCard";
const WelcomeSec = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-start  md:max-h-[983px]">
      <div className="md:w-[43%] w-full relative bg-[#F4F4F4]">
        <div className="w-full py-32  px-10">
          <div className="flex w-full flex-col gap-3 justify-center items-center md:items-end">
            <img alt="about" src={aboutImg} />
            <div className="max-w-[400px] gap-2 flex w-full flex-col">
              <h2 className="text-[30px] font-semibold text-wrap max-w-[400px] leading-9">
                We’re Ready To Grow Your Business With Us
              </h2>
              <p className="font-normal text-lg font-serif text-[#7D7D7D]">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. thinking to further the overall value
                proposition.
              </p>
              <Link
                to="/about"
                className="mt-3 text-lg font-semibold font-serif border-b w-fit border-black"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[57%] w-full">
        <div className="flex flex-col gap-8 md:max-w-[673px] justify-start items-start pt-32 px-12 pb-12">
          <div className="flex-col flex">
            <p className="font-medium font-serif text-lg">
              <span
                className={`inline-block mr-2 w-[12px] h-[12px] bg-[#40DDB6]`}
              ></span>
              Welcome Whitecollar
            </p>
            <h2 className="font-bold text-[40px]  max-w-[413px] font-serif">
            We Care About Your
Business Plan. 
            </h2>
            <p className="text-lg font-normal font-serif text-[#7D7D7D]">
            Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking to further the overal.
            </p>
            <br />
            <p className="text-lg font-normal font-serif text-[#7D7D7D]">
            Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy             </p>
          </div>
          <WelcomeCard title={'Our Vision'} content={'Capitalize on low hanging fruit to identify a ballpark value added activity to beta clickthroughs.'} />
          <WelcomeCard title={'Our Mision'} content={'Podcasting operational change management inside of workflows to establish a framework.'} />
          <div>
            <button className="py-5 px-9 bg-[#E36036] text-white">
            More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSec;
