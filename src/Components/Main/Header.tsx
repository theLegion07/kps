import {  MenuIcon } from "lucide-react";
import logo from "../../assets/Kps.svg"
import { useEffect, useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate()
  const [loaded,setloaded] = useState<boolean>(false)
  const sidebarref = useRef<HTMLDivElement | null>(null)
  const [open , setOpen] = useState<boolean>(false);
  const [scrolling , setScrolled] = useState<boolean>(false)
  const location = useLocation();

  const sideOpen = () => {
     
     setOpen(prev => !prev)
   
  }
  const sideClose = () => {
      setOpen(false)
     
  }
   useEffect(() => {
    const handleClickOutside = (e: PointerEvent) => {
      if (
        sidebarref.current &&
        !sidebarref.current.contains(e.target as Node)
      ) {
        sideClose();
      }
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
     window.addEventListener("scroll",handleScroll)
     document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("scroll",handleScroll)
    };
  }, []);
  const list = [
    {id:0 , name : "About",path:"/About"},
    {id: 1, name : "Projects",path:"/Projects"},
    {id: 2,name : "Contact",path:"/Contact"},
    {id:3 , name : "Articles",path:"/Articles"},
  ]
  return (
   <>
     {/* main div */}
     <div className= {`flex fixed top-2 left-4 right-4 sm:left-[20%] sm:right-[20%] p-2  justify-around items-center  rounded-3xl  z-1000 
      ${scrolling ?  "bg-black/60 border  transition-all 0.15s ease-in-out backdrop-blur-md  " : "bg-none" } `}>
       {/* left div */}
       <div className="object-cover flex ">
         <img src={logo} loading="eager" alt="" className={`w-full max-w-10! aspect-square cursor-pointer ${loaded ? "opacity-100" : "opacity-0"}`} onClick={() => navigate("/")} 
         onLoad={() => setloaded(true)}/>
         {
          !loaded && (
            <div className="w-full max-w-10! aspect-square rounded-full bg-white/10 animate-pulse" />
          )
         }
       </div>
       {/* center div */}
       <div className="hidden md:block " >
        <ul className="flex gap-4 bg-white/10 px-2 py-1  rounded-full border-2 border-white/20 max-w-max">
          {
           list.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
   
            return(
            <Link to={item.path} key={item.id} >
            <li className={`text-white text-sm text-primary-font
              ${isActive ? "bg-yellow-300/50 rounded-full px-2 py-1 " : "text-white px-2 py-1"} transition-all 0.15 ease-in-out`}>
              {item.name}
            </li>
            </Link>
            )
})
          }
        </ul>
       </div>
       <div className="md:hidden relative min-w-1/2 flex justify-end">
        <MenuIcon className="text-white cursor-pointer" onPointerDown={(e)=>{e.stopPropagation()
        sideOpen()
        }}/>
         <div ref={sidebarref} className={`absolute bg-black/50 border border-white/30 shadow-[inset_0_0_10px_rgba(255,255,255,0.4)] 
         p-4 max-h-max top-10 min-w-1/2 rounded-xl ${open ? "opacity-100" : "opacity-0"} transition-all 0.15 ease-in-out `}
         onPointerDown={(e) => e.stopPropagation()}>
          <ul className="flex flex-col gap-4  px-2 py-1 rounded-full  max-w-max ">
          {
           list.map((item,number) => {
            const isActive = location.pathname.startsWith(item.path);
            return(
            <Link to={item.path} key={number} >
            <li onClick={() => {
              sideClose()
            }} className={`text-white text-sm text-primary-font
              ${isActive ? "bg-white/20 rounded-full px-2 py-1 " : "text-white px-2 py-1"} transition-all 0.15 ease-in-out hover:bg-white/30 rounded-full px-2 py-1`}>
              {item.name}
            </li>
            </Link>
            )
})
          }
        </ul>
        </div>
       </div>
       
        
      
     </div>
   </>
  )
}

export default Header