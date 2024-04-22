import { Link, NavLink } from "react-router-dom";
import Home from "./Home";



const Navbar = () => 
{
    return(
        <nav id="semantic-nav">
            <div id="navbar">
                <div id="logo">
                    <NavLink>
                        <h3>Confinesofgrace</h3>
                    </NavLink>
                </div>
                
                <div id="nav">
                    <ul>
                        <li className="active">
                            <NavLink to= '/'>
                                <div id="home">Home</div>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink to= 'all-repository'>
                                <div id="repo">Repos</div>
                            </NavLink>
                        </li>
                    </ul>
                    
                    
                </div>
            </div>
        </nav>
    );
}


export default Navbar;