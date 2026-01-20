import {  ExternalLinkIcon,  Github, InstagramIcon, Linkedin, Mail,  } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
   <>
   <div className='bg-black'>
     <div className='flex  flex-col sm:flex-row justify-around gap-3 px-5 py-5 sm:py-3 sm:px-10  border-t border-gray-500'>
      <div className='flex flex-col flex-1 border-l p-6 border-gray-300 '>
         <h1 className='text-primary-font text-yellow-300 text-xl'>Pranay Sai Kolloju</h1>
         <p className='text-white/60 text-sm  '>
         <span className='block'>
          Full Stack Developer & AI-ML Enthusiastic </span> 
          <span>
             From Warangal , Telangana , INDIA
          </span>
         </p>
      </div>
       <div className='flex flex-col border-l border-gray-300 p-6 flex-1 '>
         <h1 className='text-primary-font text-yellow-300 text-xl'>Quick Menu</h1>
         <p className='text-white/60 text-left text-sm space-y-1  '>
            <span className='block cursor-pointer hover:text-white' onClick={() => navigate("/About")}>
              About
            </span>
             <span className='block cursor-pointer hover:text-white' onClick={() => navigate("/Projects")}>
              Projects
            </span>
             <span className='block cursor-pointer hover:text-white' onClick={() => navigate("/Contact")}>
             Contact
            </span>
             <span className='flex cursor-pointer hover:text-white'>
              Resume <ExternalLinkIcon className='max-h-4' />
            </span>
         </p>
      </div>
       <div className='flex flex-col flex-1 p-6 border-l border-gray-300 space-y-2'>
         <h1 className='text-primary-font text-yellow-300 text-xl'>Let's Connect</h1>
          <div className='flex gap-4 text-white/20  '>
         <button className='hover:scale-[1.02] bg-white/20 p-2 rounded-full hover:text-white transition-all 0.15s ease-in-out'>
         <InstagramIcon className='cursor-pointer  max-h-5  '  />

         </button>
         <button className='hover:scale-[1.02] bg-white/20 p-2 rounded-full hover:text-white transition-all 0.15s ease-in-out'>
         <Linkedin className='cursor-pointer max-h-5  ' />

         </button>
         <button className='hover:scale-[1.02] bg-white/20 p-2 rounded-full hover:text-white transition-all 0.15s ease-in-out'>
         <Github className='cursor-pointer max-h-5  ' />

         </button>
         <button className='hover:scale-[1.02] bg-white/20 p-2 rounded-full hover:text-white transition-all 0.15s ease-in-out'>
         <Mail className='cursor-pointer  max-h-5 ' />

         </button>
       </div>
      </div>
    </div>
     <div className='flex justify-center gap-2'>
      <p className='text-white/60 text-center  text-[0.7em] sm:text-sm '>© {new Date().getFullYear()} Pranay Sai Kolloju . All Rights Reserved.</p>
      <p className='text-white/60 text-center  text-[0.7em] sm:text-sm'> Made with React.js and Tailwindcss</p>
    </div>
   </div>
   </>
  )
}

export default Footer