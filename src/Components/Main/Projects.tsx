import ProjectCard from "../../utils/ProjectCard"
import { projects } from "../../utils/ProjInfo"
// import { Sas, SasDesc, EML, EmlDesc, tsp, tspDesc } from "../../utils/ProjInfo"

const Projects = () => {
  return (
   <>
     <title>Pranay Sai Kolloju - Projects</title>
    <div className="bg-black/10 backdrop-blur-md min-h-screen pt-[25%] w-full sm:pt-[8%] pb-[5%]"> 
         <div className='text-white  pl-7    text-center relative top-1/8 space-y-3 '>
       <h1 className='text-white text-2xl font-bold text-primary-font sm:text-3xl md:text-5xl '>Projects</h1>
       <p className='text-white/60 text-sm sm:text-1xl md:text-xl ' >Check Out All My Works</p>
    </div>
        <div className="
        grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
          auto-rows-[minmax(min-content,auto)] gap-7 p-5 sm:p-20 lg:grid-cols-3">
            {
          projects.map((project) => (
            <ProjectCard 
              key={project.id}
            image={project.image}
            title={project.title}
            desc={project.desc}
            tech={project.tech}
            cardDes={project.cardDes}
            />
          ))
         }
        </div>
    </div>
   </>
  )
}

export default Projects