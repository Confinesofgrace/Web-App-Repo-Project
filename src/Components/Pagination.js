import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";




const Pagination = ({repoPerpage, totalRepo}) => 
{
    
    return(
        <nav id= "pagination">
            <ul>
                <button>Prev</button>
                
                <button>Next</button>
                
            </ul>                  
        </nav>
    );
}


export default Pagination;