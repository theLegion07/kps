import { Button } from "@mui/material";
import { ArrowRight } from "lucide-react";
import sas from "../../assets/Images/SAS.png";
import EMl from "../../assets/Images/EML.png";
import sp from "../../assets/Images/SP.png";
import ProjectCard from "../../utils/ProjectCard";
import { useNavigate } from "react-router-dom";

const ProjPrev = () => {
  const navigate = useNavigate()
  const Sas = [
    { id: 0, name: "Python" },
    { id: 1, name: "OpenCV" },
    { id: 2, name: "Face Recognition" },
    { id: 3, name: "Numpy" },
  ];
  const SasDesc = [
    {id:0 , des:"Automation & Technology: This system leverages Python, OpenCV, and facial recognition to identify individuals via live video and automate the attendance marking process."} ,
    {id:1,des:"Accurate Real-Time Logging & Efficiency: Instantly records confirmed matches with timestamps in date-based CSV files, improving accuracy and significantly reducing administrative effort."}
  ]
  const EmlDesc = [
    {id:0 , des:"Web spoofing attacks pose a serious risk by deceiving users through fake websites, and existing server-side defenses are reactive and often insufficient."} ,
    {id:1,des:"PHISH CATCHER proposes a proactive, client-side machine learning solution that analyzes web page features in real time to accurately detect and prevent spoofed websites."}
  ]
  const tspDesc = [
    {id:0 , des:"Sponsor Portal Handles The List of Sponsors which are Related to One Particular Entertainment Event Like Racing , Cricket , Boxing , etc . It basically an Internal Application Where it is handled By only the People of That Entertainment Domain People"} ,
   
  ]
  const EML = [
    { id: 0, name: "Python" },
    { id: 1, name: "XGBOOST" },
    { id: 2, name: "Random Forest" },
    { id: 3, name: "SVM" },
  ];
  const tsp = [
    { id: 0, name: "React.js" },
    { id: 1, name: "tailwindcss" },
    { id: 2, name: "TypeScript" },
  ];
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
          {/* card 1 */}
          <ProjectCard 
           image={sas}
  title="Smart Attendance System"
  desc="A real-time facial recognition attendance system that logs data into CSV files."
  tech={Sas}
  cardDes={SasDesc}
          />
          {/* Card 2 */}
         <ProjectCard 
           image={EMl}
  title="Ensemble Machine Learning Model For Intrusion Detection"
  desc="Classifying URL's and Preventing phishing Attacks By Designing A Chrome Extension"
  tech={EML}
  cardDes={EmlDesc}
          />
          {/* Card 3 */}
         <ProjectCard 
           image={sp}
  title="Sponsor Portal"
  desc="Handles Sponsors For any Entertainment Domain like Racing , Cricket , etc"
  tech={tsp}
  cardDes={tspDesc}
          />
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
