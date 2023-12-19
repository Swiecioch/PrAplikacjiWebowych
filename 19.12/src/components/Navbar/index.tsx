import { Link } from "react-router-dom"
import { routes } from "../../helpers/routes"
function Navbar(){
    return(
        <nav>
            <ul>
                {routes.map((route, index)=>
                <li key={index}>
                    <Link to={route.path}>{route.name}</Link>
                </li>
                )}
            </ul>
        </nav>
    )
}
export default Navbar