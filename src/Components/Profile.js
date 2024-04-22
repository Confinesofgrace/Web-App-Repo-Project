import { useState } from "react";
import Repocards from "./Repocards";
import { Link } from "react-router-dom";
import Repository from "./Repository";


const Profile = (props) =>{

    const [items,setItems] = useState ([]);
 //   const [users] = useState ("confinesofgrace");
    

    return (
        <div>

            <Link to= {`/repository/${items.id}`}>
                <div id="repo-card">
                    <div id="avatar-div">
                        <img src= {props.owner.avatar_url} alt= {props.owner.login} id="avatar" />
                    </div>
                   
                    <div id="repo-preview">
                        <h4>{props.owner.login}</h4>
                        <p>{props.name}</p>
                        {props.private ? (<p id="private">Private</p>) : 
                        (<p className="bg-emerald-400 py-1 px-2 text-xs text-white shadow">Public</p>)}
                    </div>
                    
                </div>
                
            
            </Link>           

        </div>
    )
}
export default Profile;