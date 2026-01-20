import { ArrowRight } from "lucide-react";
import ProjectCard from "../../utils/ProjectCard";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { projects } from "../../utils/ProjInfo";
const ProjPrev = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* Main Div */}
      <div className="bg-black my-10  rounded-2xl p-5 sm:p-20   ">
         <div className="text-center space-y-2 mb-10">
         <h1 className='text-white text-2xl text-primary-font sm:text-3xl md:text-4xl font-bold '>Featured Works</h1>
         <p className='text-white/60 text-sm sm:text-1xl md:text-xl '>Check Out Some of My Works</p>
      </div>
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
          auto-rows-[minmax(min-content,auto)] gap-7"
        >
         {
          projects.slice(0,3).map((project) => (
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
        <div className="text-center mt-5">
          <Button
            sx={{
              textTransform: "none",
              color: "black",
              backgroundColor: "white",
            }}
            className="cursor-pointer! px-4! text-primary-font!  font-bold!"
            onClick={() => navigate("/Projects")}
          >
            More <ArrowRight className="h-4 " />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProjPrev;
