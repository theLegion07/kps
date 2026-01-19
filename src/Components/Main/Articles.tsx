import { motion } from 'framer-motion'
import Skeleton from '../Subs/Skeleton'
import { pageVariants, pageTransition } from '../../utils/pageAnimations'

const Articles = () => {
  return (
   <>
    <motion.div className='bg-black/5 backdrop-blur-md  px-3 flex flex-col pt-[24%] sm:pt-[10%] pb-[5%] space-y-25  '
     variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}>  
        <div className='text-center space-y-5'>
           <h1 className='text-white text-2xl text-primary-font sm:text-3xl md:text-5xl font-bold'>Articles</h1>
       <p className='text-white/60 text-sm sm:text-1xl md:text-xl ' >Currently working on articles may be in future This Page Gets Updated </p>
        </div>
        <div className=" rounded-xl grid  grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
          auto-rows-[minmax(min-content,auto)] place-content-center place-items-center gap-2">
  {Array.from({ length: 3 }).map(( _ , i) => (
    <Skeleton key={i} />
  ))}
</div>

    </motion.div>
   </>
  )
}

export default Articles