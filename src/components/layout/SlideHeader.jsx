/* eslint-disable react/prop-types */
const SlideHeader = ({title='' , background='' , supTitle='' , content=''}) => {

  return (
    <div
      className="w-full h-[458px] max-h-[458px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex w-full md:flex-row justify-end md:justify-start flex-col h-full bg-[#C4C4C4]/50">
        <div className="h-[40%] flex relative flex-col justify-center items-center text-white md:w-[43%] w-full md:h-full bg-black-nav bg-opacity-91">
          <div className="flex flex-col justify-center w-fit max-w-[482px] flex-wrap text-wrap items-center">
            <p className="text-lg font-semibold font-serif self-start">
              <span className={`inline-block mr-2 w-[11px] h-[11px] bg-[#40DDB6]`}></span>
              {title}
            </p>
            <h2 className="text-[60px] font-bold font-serif self-start">
              {supTitle}
            </h2>
            <p className="text-lg flex font-medium text-wrap max-w-[482px] flex-wrap font-serif self-start">
             
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideHeader;
