import { useState } from "react"
import { techIcons } from "../../utils/techIcons"
import { motion, } from "framer-motion"
import { containerVariants, itemVariants } from "../../utils/pageAnimations"

const Technical = () => {
  const [techType,setTechType] = useState<string>("Languages")
 



  const section = [
    {id:0,name:"Languages",sectionType:"Languages"},
    {id:1,name:"Front-End", sectionType:"Front-End"},
    {id:2,name:"DataBase",sectionType:"DataBase"},
    {id:3,name:"Cloud",sectionType:"Cloud"},
  ]
   const language = [
      {id:0 , name:"Java",icon:techIcons.java},
      {id:1 ,name:"C",icon:techIcons.c},
      {id:2 , name:"Python",icon:techIcons.python},
    {id:3 ,name:"JavaScript",icon:techIcons.javascript},
    {id:4 ,name:"TypeScript",icon:techIcons.typescript},
  ]
  const FrontEnd = [
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
  const cloud = [
    {id:0,name:"AWS", icon:techIcons.aws}
  ]
  const techMap:any = {
    Languages : language,
    "Front-End" : FrontEnd ,
    DataBase : DataB,
    Cloud : cloud ,
  }
  return (
   <>
    <div className=' bg-black my-10  rounded-2xl  flex flex-col justify-center items-center   p-5 sm:p-24 lg:mx-10 gap-10'>
      <div className="text-center space-y-3">
         <h1 className='text-white text-2xl text-primary-font sm:text-3xl md:text-4xl font-bold '>Technological Brilliance</h1>
         <p className='text-white/60 text-sm sm:text-1xl md:text-xl '>Demonstrated proficiency in a broad spectrum of technologies and tools.</p>
      </div>
      <div className="flex flex-col gap-10 justify-center w-full items-center p-4">
         <ul className="flex rounded-xl gap-5  text-primary-font p-2 bg-white/15 ">
        {section.map((item)=>(
          <li key={item.id} onClick={() => setTechType(item.sectionType)} className={`rounded-sm py-1 px-3 text-xs sm:text-[1em] cursor-pointer transition-all duration-200 whitespace-nowrap
  ${
    techType === item.sectionType
      ? "bg-white text-black"
      : "text-white hover:bg-white/20"
  }`}
>
             {item.name}
          </li> 
        ))}
      </ul>
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={techType}
        className="flex gap-2 bg-white/15 flex-wrap sm:gap-2 w-full  rounded sm:w-[80%] p-10 mt-3 justify-center ">
        {
         techMap[techType].map((tech:any) => (
            <motion.div
            variants={itemVariants}
            key={tech.id}
            className="flex justify-center items-center max-w-max gap-2 bg-white/15 py-1 px-4 rounded-sm"
          >
            <img src={tech.icon} loading="lazy" alt={tech.name} className="w-4 aspect-square" />
            <span className="text-sm sm:text-[1em] text-white">{tech.name}</span>
          </motion.div>
         ))
        }
      </motion.div>
      </div>
    
     
    </div>
   </>
  )
}

export default Technical