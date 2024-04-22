import { useParams } from "react-router-dom";



const Repository = () => 
{
    const {id} = useParams();

    return(
            <div id="repository-details">

                <p>Repo Details - {id}</p>

            </div>

            
    );
}


export default Repository;