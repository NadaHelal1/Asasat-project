/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const cntnt = 'Leverage agile frameworks provide synopsishigh level overviews value proposition.'

const WorkCard = ({bGround='bg-orange' , title='Make Appointment' , content=cntnt , icon}) => {
  return (
    <div className="sm:max-w-[350px] rounded sm:rounded-none sm:w-96 h-80 w-full flex flex-col py-14 px-10 bg-[#F4F4F4] relative">
      <div className={`w-[72px] flex justify-center items-center h-[72px] rounded-full absolute top-[-10%] left-[45%] sm:left-[40%] mx-auto ${bGround}`}>
            {icon}
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="max-w-[245px] font-semibold text-[25px] leading-7 font-serif">
        {title}
        </h2>
        <p className="sm:max-w-[300px] sm:w-[300px] font-normal font-serif leading-5 text-lg text-[#7D7D7D]">
            {content}
        </p>
        <Link className="font-serif font-semibold text-[#6B77E5] text-lg leading-5 mt-10">
        Testimonials
        </Link>
      </div>
    </div>
  )
}

export default WorkCard
