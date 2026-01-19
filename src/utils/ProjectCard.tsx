import { ArrowRight } from 'lucide-react'
import React from 'react'

interface TechItem {
  id: number;
  name: string;
}
interface TechDes{
  id:number ; 
  des:string ;
}
interface Data{
  image: string;
  title: string;
  desc: string;
  tech: TechItem[];
  cardDes : TechDes[]
}

const ProjectCard:React.FC<Data> = ({title,tech,image,desc,cardDes}) => {
  return (
     <>
      <div className="w-full  bg-white/10 border border-yellow-300 sm:border-none rounded-xl object-cover  ">
            <div className="object-cover overflow-hidden pt-5">
              <img
                src={image}
                alt="Smart Attendance System using facial Recognition"
                className="w-full aspect-video hover:scale-[1.02] transition-all 0.15s ease-in-out"
              />
            </div>
            {/* info */}
            <div className="text-center mt-3 hyphens-auto space-y-2 p-3">
              <h1 className="text-white text-xs sm:text-sm">
               {title}
              </h1>
              <p className="text-white/60 text-xs sm:text-sm font-normal">
                {desc}
              </p>
              <ul className="flex flex-wrap gap-2 justify-center mt-2">
                {tech.map((item) => (
                  <li
                    key={item.id}
                    className="text-xs text-white/70 bg-white/10 px-2 py-1 rounded-md"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 space-y-3">
                {cardDes.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 items-start text-white/60 text-xs text-justify hyphens-auto"
          >
            <ArrowRight className="h-4! mt-0.5 shrink-0" />
            <span>{item.des}</span>
          </div>
        ))}
            </div>
          </div>
     </>
  )
}

export default ProjectCard