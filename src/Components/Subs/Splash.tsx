import splashlogo from '../../assets/Kps.svg'
import { useEffect, useState } from "react"

type finish = {
  OnFinish : () => void ;
}
const Splash : React.FC<finish> = ({OnFinish}) => {
  const [progress,setprogress] = useState(0);
   useEffect(() => {
    const interval = setInterval(() => {
      setprogress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          OnFinish(); 
          return 100;
        }
        return prev + 2;
      });
    }, 40); 

    return () => clearInterval(interval);
  }, [OnFinish]);
  return (
    <div className='min-h-screen text-white bg-black flex flex-col justify-center items-center'>
      <div>
        <div>
         <img src={splashlogo} alt="entry-logo" className="w-13 sm:w-15 aspect-square" />
      </div>
      <div >
         <div  className={`h-1 rounded-2xl w-full bg-black`} style={{...styles.fill,width:`${progress}%`}} />
      </div>
      </div>
      
    </div>
  )
}
const styles = {
  fill:{
    background:'yellow',
    transition : 'width 0.2s',
  }
}
export default Splash