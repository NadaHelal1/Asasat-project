import { CalendarDaysIcon ,PuzzlePieceIcon, ShieldCheckIcon } from "@heroicons/react/16/solid"
import WorkCard from "./WorkCard"

const WorkProcess = () => {
  return (
    <div className="py-32 flex flex-col gap-10 justify-center items-center">
      <div className="flex items-center justify-center flex-col">
      <p className="font-medium font-serif text-lg">
              <span
                className={`inline-block mr-2 w-[12px] h-[12px] bg-[#40DDB6]`}
              ></span>
              Welcome Whitecollar
            </p>
            <h2 className="font-bold text-[40px]  max-w-[413px] font-serif">
            How We Work
            </h2>
      </div>
      <div className="gap-12 flex justify-center w-full text-center relative pt-5 max-w-[1220px] items-center flex-wrap">
        <WorkCard 
            bGround="bg-[#E36036]" 
            title="Make Appointment" 
            content="Leverage agile frameworks provide synopsishigh level overviews value proposition. "
            icon={<CalendarDaysIcon className="w-10 text-white" />}

        />
         <WorkCard 
            bGround="bg-[#6B77E5]" 
            title="Consultation" 
            content="Leverage agile frameworks provide
            synopsishigh level overviews
            value proposition."
            icon={<PuzzlePieceIcon className="w-10 text-white" />}
        />
         <WorkCard 
            bGround="bg-[#E36036]"
            title="Enjoy the Service" 
            content="Leverage agile frameworks provide synopsishigh level overviews value proposition. "
            icon={<ShieldCheckIcon className="w-10 text-white" />}

        />
      </div>
    </div>
  )
}

export default WorkProcess
