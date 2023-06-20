import Allmessages from "./component/Allmessages"
import Messages from "./component/Messages"
import { Routes,BrowserRouter, Route } from "react-router-dom"

const App = ()=>{
   


    return(
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Messages/>}/>
            <Route path="/allmessage" element={<Allmessages/>}/>
            
           </Routes>
        </BrowserRouter>
    )

}

export default App