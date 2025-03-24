import React, { useState } from "react";
import "./User.css";
import axios from "axios";

const User=()=>{
    
    const [special, setSpecial] = useState("")
    const [searchResults, setSearchResults] = useState()
    const searchSpecialization=async()=>{
        console.log("This is text: ",special)
        const res = await axios.get(`http://localhost:3000/search/${special}`)
        if(res)
           {
            setSearchResults(res.data)
            console.log(res.data)
           } 

    }

    return(
        <div className="main">
            
            <div class="search-container">
            <img src="/logo.png" alt="LegalLens " className="logo" />
                <input type="text" class="search-input" placeholder="Search for specialization"
                onChange={(e)=>{setSpecial(e.target.value); console.log(e.target.value)}}
                />

                <button className="search-btn"
                onClick={searchSpecialization}
                >Search</button>
             <div className="card-display">
                    
             {
                searchResults && searchResults.length >0 ?
                (searchResults.map((result, index) => (
                    <div key={index} className="card">
                        <h2>{result.name}</h2>
                        <p>{result.specialization} | {result.role}</p>
                        <button>Contact {result.email}</button>
                    </div>
                        ))):(
                            <p>No results were found! Please use our keywords</p>
                        )
             }

               
                </div>
            </div>

           
        </div>
    )
}

export default User