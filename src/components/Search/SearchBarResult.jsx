import React from 'react'
import ResultComponent  from './resultComponent';

const SearchBarResult = ({ newFilter , props }) => {
    console.log(newFilter)
    if (newFilter !== '') {
        return (    
            <div className='w-64 flex flex-col items-center justify-end  text-black '> 
               {props.map(campeon => (<ResultComponent key={campeon.id}prop={campeon.name}/>))}
            </div>           
        )
    }
  
}

export default SearchBarResult
