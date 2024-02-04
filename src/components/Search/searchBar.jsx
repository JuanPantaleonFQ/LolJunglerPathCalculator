import { useState } from "react"
import  SearchBarResult  from "./SearchBarResult"
import React from 'react'


const SearchBar = ({sendDatatoParent,champs}) =>{
    const [newFilter,setNewFilter] = useState('')
    const champsFiltrados = champs.filter(campeon => campeon.name.toLowerCase().startsWith(newFilter.toLowerCase()));
    
    const handleInputChange = (e) => {
        setNewFilter(() => {
          const newSearchTerm = e.target.value; 
          return newSearchTerm                   
        });  
                    
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        sendDatatoParent(newFilter)
    }
 
    return(  
        <div className="">            
            <div className="flex justify-center mt-6 px-5">
             <form onSubmit={handleSubmit}className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">   
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                 <div className="relative">
                     <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                         <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                     </div>
    
                     <input onChange={handleInputChange} type="search" id="default-search" autoComplete="off" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={newFilter} placeholder="Search"/>
                     <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                 </div>
             </form>        
            </div>   
            <div className="flex justify-center">
              <SearchBarResult  newFilter={newFilter} props={champsFiltrados}/>
            </div>              
            
        </div>
        
    )
}

export default SearchBar