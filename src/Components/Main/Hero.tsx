import { Github, InstagramIcon, Linkedin, Mail, MousePointerClick } from 'lucide-react'
import image from '../../assets/profile.webp'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { pageVariants, pageTransition } from '../../utils/pageAnimations'
import Button from '@mui/material/Button'

const Hero = () => {
  const [text,settext] = useState<string>("");
  const [loaded,setloaded] = useState<boolean>(false)
  const texts = [
    "Web Developer",
    "Web Designer",
    "Programmer",
    "Editor",
    "AIML Enthusiastic",

  ]
 useEffect(() => {
  let timeoutId: ReturnType<typeof setTimeout>;

  const changeText = () => {
    settext((prev) => {
      let next = prev;
      while (next === prev) {
        const index = Math.floor(Math.random() * texts.length);
        next = texts[index];
      }
      return next;
    });

    timeoutId = setTimeout(changeText, 2000);
  };

  changeText();

  return () => clearTimeout(timeoutId);
}, []);
  return (
    <motion.main className='relative text-white flex flex-col min-h-screen place-content-center place-items-center gap-4'
     variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}>
         <img src= {image} loading='eager' alt="Profile" className={`h-60! ${loaded ? "opacity-100" : "opacity-0"} rounded-2xl`} 
          onLoad={() => setloaded(true)} />
          {!loaded && (
  <div className="absolute top-[20%] sm:top-[16%] h-60 aspect-square rounded-full bg-white/10 animate-pulse" />
 )}
       <div className='sm:flex sm:flex-col sm:justify-center sm:items-center'>
         <h1 className=' sm:font-bold italic text-xs sm:text-2xl'>Hello There , Iam</h1>
       <p className='text-primary-font font-bold sm:font-normal text-4xl md:text-7xl'>Pranay Sai Kolloju</p>
       </div>
      <AnimatePresence mode="wait">
  <motion.h1
    key={text}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
    className="text-primary-font text-sm sm:text-xl overflow-hidden"
  >
    {text}
  </motion.h1>
</AnimatePresence>

    
       <div className='flex gap-4 '>
         <button className='hover:scale-[1.02] bg-white/20 p-2 rounded-full border border-white'>
         <InstagramIcon className='cursor-pointer text-orange-600 max-h-5  '  />

         </button>
         <button className='hover:scale-[1.02] bg-white/20 p-2 rounded-full border border-white'>
         <Linkedin className='cursor-pointer max-h-5  ' />

         </button>
         <button className='hover:scale-[1.02] bg-white/20 p-2 rounded-full border border-white'>
         <Github className='cursor-pointer max-h-5 ' />

         </button>
         <button className='hover:scale-[1.02] bg-white/20 p-2 rounded-full border border-white'>
         <Mail className='cursor-pointer text-blue-500 max-h-5 ' />

         </button>
       </div>
       <div>
         <Button 
         variant="contained"
         sx={{textTransform: 'none',
            color: 'black',
            transition: 'all 0.15s ease-in-out'
         }} className='bg-white! text-primary-font! px-5! rounded-full!  py-3! hover:bg-yellow-300!'>
           Resume<MousePointerClick />
       </Button>
       </div>
       
    </motion.main>
  )
}

export default Hero