import React, { useState } from "react";
import "./User.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const User=()=>{
    const navigate=useNavigate()
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

    const handleLogout=()=>{
        localStorage.removeItem('user')
        navigate('/')
      }

    return(
        <div className="main bg">
            
           
            <div class="search-container">
            <h1 className="font-semibold text-2xl mb-8">
                Search for legal professionals and contact them here!
            </h1>
                <input type="text" class="search-input" placeholder="Search for specialization"
                onChange={(e)=>{setSpecial(e.target.value); console.log(e.target.value)}}
                />
                <button className="text-sm font-thin bg-[#7b2bb5] px-2 py-2 rounded-full"
                onClick={searchSpecialization}
                > Search🔍</button>
                
             <div className="card-display">
                    
             {
                searchResults && searchResults.length >0 ?
                (searchResults.map((result, index) => (
                    <div key={index} className="card ">
                        <h2 className="font-bold text-2xl">{result.name}</h2>
                        <p className="text-lg">Specialization:{result.specialization}</p>
                        <button className="bg-[#7b2bb5]">Contact {result.email}</button>
                    </div>
                        ))):(
                            <p>No results were found! Please use our keywords</p>
                        )
             }

               
                </div>
            </div>

        <div className="flex flex-row">      
            <button className="logout-btn text-lg font-thin px-3 py-1 rounded-full" 
            onClick={handleLogout}
            >
                Logout⬅️
            </button>

            <button className="mt-auto mb-8 ml-32 bg-[#6200ea] text-lg font-thin px-3 py-1 rounded-lg">
                <a href="/profile">Profile➡️</a>
            </button>
      </div>
        </div>
    )
}

export default User