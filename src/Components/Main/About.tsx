import  { motion } from "framer-motion"
import { techIcons } from "../../utils/techIcons"
import { pageTransition, pageVariants } from "../../utils/pageAnimations"

const About = () => {
  const language = [
    {id:0 , name:"Java",icon:techIcons.java},
    {id:1 ,name:"C",icon:techIcons.c},
    {id:2 , name:"Python",icon:techIcons.python},
  {id:3 ,name:"JavaScript",icon:techIcons.javascript},
  {id:4 ,name:"TypeScript",icon:techIcons.typescript},
]
const FTT = [
  {id:0 ,name:"HTML5",icon:techIcons.html5},
  {id:1 ,name:"CSS3",icon:techIcons.css3},
  {id:2 ,name:"React",icon:techIcons.react},
 {id:3 ,name:"Tailwindcss", icon:techIcons.tailwind}, 
 {id:4 ,name:"TypeScript",icon:techIcons.typescript},
  {id:5 ,name:"JavaScript", icon:techIcons.javascript}, 
     {id:6 ,name:"shadcn/ui", icon:techIcons.logo}, 
             {id:7,name:"MUI", icon:techIcons.mui}, 
             {id:8,name:"Figma", icon:techIcons.figma}, 

]
const DataB = [
  {id:0,name:"MySql",icon:techIcons.mysql},
]
const Cloud = [
  {id:0,name:"AWS", icon:techIcons.aws}
]
  return (
    <>
     {/* Main Div */}
     <motion.div className=" bg-black/10 backdrop-blur-md min-h-screen pt-[25%] w-full sm:pt-[10%] pb-[5%] "
     variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
     >
       {/* Heading Div */}
       <div className='text-white  pl-7    text-center relative top-1/8 space-y-3 '>
       <h1 className='text-white text-2xl font-bold text-primary-font sm:text-3xl md:text-5xl '>About</h1>
       <p className='text-white/60 text-sm sm:text-1xl md:text-xl ' >Here is a OverView of My Background and Skills </p>
    </div>
    {/* Sections for details */}
    <div className="sm:flex justify-between relative top-1/6 w-full px-4 py-10">
      {/* left */}
      <div className=" flex-1 p-4 font-bold">
         <div>
            <h1 className="text-primary-font  sm:text-2xl text-white font-normal">I am..</h1>
            <p className="text-justify hyphens-auto text-white/60 font-normal text-sm ">
            <span className="block">
               Pranay Sai Kolloju , A Full-Stack Developer and AI & ML Enthusiastic with Great Passion in Building Cool and Enterprise web applications with New and Cutting Edge Technologies . Iam a Graduate in Computer Science And Engineering with Specialization in Artificial Intelligence and Machine Learning.
            </span>
             
               <br />
               <span className="block">
                I Enjoy Building Applications or websites which solve real life Problems with background in Computer Science gave me knowledge in Algorithms and Data Structures so that i can make an Optimal Solution for a Problem
                </span>  <br />
                <span className="block">

                </span>
            </p>
         </div>
         {/* Education Details  */}
         <div className="flex flex-col gap-4 ">
            <h1 className="text-primary-font  sm:text-2xl text-white font-normal">Education</h1>
            <div className="bg-white/5 border-b border-yellow-300 rounded p-4 flex flex-col gap-10 hover:scale-[1.02] transition-all 0.15s ease-in-out">
              <div className="flex flex-col">
                 <h1 className="text-white text-primary-font font-normal">Bachelor's Degree in Computer Science and Engineering (AIML)</h1>
                 <p className="text-primary-font font-normal text-white/60 text-sm">Vaagdevi College Of Engineering</p>
              </div>
              <div className="flex justify-between">
                  <p className="text-primary-font font-normal text-white/60 text-sm">2021-2025</p>
                  <p className="text-primary-font font-normal text-white/60 text-sm">
                    Warangal , India
                  </p>

              </div>
            </div>
                <div className="bg-white/5 border-b border-yellow-300 rounded p-4 flex flex-col gap-10 hover:scale-[1.02] transition-all 0.15s ease-in-out">
              <div className="flex flex-col">
                 <h1 className="text-white text-primary-font font-normal ">Intermediate - Maths , Physics , Chemistry</h1>
                 <p className="text-primary-font font-normal text-white/60 text-sm">
                 Sri Gayathri Junior College</p>
              </div>
              <div className="flex justify-between">
                  <p className="text-primary-font font-normal text-white/60 text-sm">2019-2021</p>
                  <p className="text-primary-font font-normal text-white/60 text-sm">
                   Hyderabad , India
                  </p>

              </div>
            </div>
         </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------------------- */}
      {/* right */}
      <div className=" flex-1 p-4  font-bold">
        <div>
            <h1 className="text-primary-font font-normal sm:text-2xl text-white">Technologies Acquired</h1>
            <div className="mt-3">
               <p className="text-justify hyphens-auto text-white/60 font-normal">
              Languages
            </p>
              <div className="flex  gap-2 flex-wrap sm:flex-wrap sm:gap-2 mt-3 ">
                 {language.map((lang) => (
                  <div key={lang.id} className="flex max-w-max gap-2 bg-white/15 py-1 px-3 rounded-sm">
                     <img src={lang.icon} loading="lazy" className="w-4 aspect-square"/>
                     <p className="text-justify hyphens-auto text-white/60 font-normal text-sm">
              {lang.name}
            </p>
                  </div>
                 ))}
              </div>
            </div>
             <div className="mt-3">
               <p className="text-justify hyphens-auto text-white/60 font-normal">
              Front End Technologies
            </p>
              <div className="flex  gap-2  flex-wrap sm:gap-2 mt-3 ">
                 {FTT.map((lang) => (
                  <div key={lang.id} className="flex max-w-max gap-2 bg-white/15 py-1 px-4 rounded-sm">
                     <img src={lang.icon} loading="lazy" className="w-4 aspect-square"/>
                     <p className="text-justify hyphens-auto text-white/60 font-normal text-sm">
              {lang.name}
            </p>
                  </div>
                 ))}
              </div>
            </div>
              <div className="mt-3">
               <p className="text-justify hyphens-auto text-white/60 font-normal">
             DataBase
            </p>
              <div className="flex gap-2 flex-wrap sm:gap-2 mt-3 ">
                 {DataB.map((lang) => (
                  <div key={lang.id} className="flex max-w-max gap-2 bg-white/15 py-1 px-4 rounded-sm">
                     <img src={lang.icon} loading="lazy" className="w-4 aspect-square"/>
                     <p className="text-justify hyphens-auto text-white/60 font-normal text-sm">
              {lang.name}
            </p>
                  </div>
                 ))}
              </div>
            </div>
             <div className="mt-3">
               <p className="text-justify hyphens-auto text-white/60 font-normal">
             Cloud
            </p>
              <div className="flex gap-2 flex-wrap sm:gap-2 mt-3 ">
                 {Cloud.map((lang) => (
                  <div key={lang.id} className="flex max-w-max gap-2 bg-white/15 py-1 px-4 rounded-sm">
                     <img src={lang.icon} loading="lazy" className="w-4 aspect-square"/>
                     <p className="text-justify hyphens-auto text-white/60 font-normal text-sm">
              {lang.name}
            </p>
                  </div>
                 ))}
              </div>
            </div>
            
         </div>
      </div>
    </div>
     </motion.div>
    
    </>
      
  )
}

export default About