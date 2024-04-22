import { useState, useEffect } from "react";
import Loading from "./Loading";
import Profile from "./Profile";


const FetchRepo = () =>
{

const [items,setItems] = useState ([]);
const [users] = useState ("confinesofgrace");

useEffect(() => {
    const fetchRepos = async () => {
        const res = await fetch (`https://api.github.com/users/${users}/repos?page=1&per_page=5&sort=updated`)
        const data = await res.json()
        setItems(data)
    }

    fetchRepos()

},[]);



    return(
        <div>
            {!items ? (<Loading/>)
           : (<section>
                <h2 className="text-2xl font-bold">
                    Viewing {users}'s repository

                </h2>

                <div>
                    {items.map((items) => (<Profile key=
                    {items.id}
                    {...items}
                    
                    
                    />))}
                </div>


            </section>)
        }
            
          
        </div>
    );
}

export default FetchRepo;