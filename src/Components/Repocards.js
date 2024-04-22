import { Link } from "react-router-dom";
import FetchRepo from "./FetchRepo";
import ReactPaginate from "react-paginate";


const Repocards = () => 
{
    return(
        <div id="cards">
                <div>
                    <FetchRepo/>
                    
                    <Link to= 'repository'><div id="card1">Repo 1
                    
                    </div></Link>

                    <div id="card2"> Repo 2</div>

                    <div id="card3">Repo 3</div>
                </div>  
                    
            </div>
    );
}


export default Repocards;