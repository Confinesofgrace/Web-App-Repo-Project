import { Link } from "react-router-dom";
import Repocards from "./Repocards";
import FetchRepo from "./FetchRepo";
import Pagination from "./Pagination";





const AllRepository = () => 
{
    return(
        <div id="all-repository">
            
            <FetchRepo/>

            <Pagination/>
            
        </div>
           
    );
}


export default AllRepository;