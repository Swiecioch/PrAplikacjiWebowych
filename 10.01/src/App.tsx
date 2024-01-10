import {BrowserRouter, Routes} from "react-router-dom";
import {Navbar} from "./pages/components"

function app(){
    return(
      <div>
        <BrowserRouter>
            <Navbar></Navbar>
        
        </BrowserRouter>
      </div>
    )

}
export default app
