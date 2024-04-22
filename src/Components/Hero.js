import { Link, NavLink } from "react-router-dom";
import AllRepository from "./All-repository";


const Hero = () => 
{
    
    return(
      <div id="hero">

        <div id="about">
          <p><h4>Damilola Akinlolu</h4>FrontEnd Engineer</p>
          <br></br>

          <div id="contact">
            <p>confinesofgrace@gmail.com</p>
            <p>08180955161</p>
          </div>
          
         <Link to = 'all-repository'> 
            <button>View Repos</button> 
          </Link> 
        </div>

      </div>
    );
}


export default Hero;