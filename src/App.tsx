// import { useEffect, useState } from "react"
import AppRoutes from "./AppRoutes"
import { HashRouter as Router } from "react-router-dom"
// import Splash from "./Components/Subs/Splash"

function App() {
  // const [splash,setsplash] = useState<boolean>(true)
  // useEffect(() => {
  //  setTimeout(() => {
  //   setsplash(false)
  //  }, 2000);
  // },[])
  return (
    <>
      {/* {splash ? <Splash /> : ( */}
          <Router >
       <AppRoutes />
     </Router>
      {/* )} */}
     
    
    </>
  )
}

export default App
