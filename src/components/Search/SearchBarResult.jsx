import React from 'react'
import ResultComponent  from './resultComponent';
import './css/scrollbar.css'

const SearchBarResult = ({ newFilter , props }) => {
    
    if (newFilter !== '') {
        return (    
            <div className='w-64 max-h-40 flex flex-col items-center justify-en  text-black overflow-auto custom-scrollbar'> 
               {props.map(campeon => (<ResultComponent key={campeon.id}prop={campeon.name}/>))}
            </div>           
        )
    }
  
}

export default SearchBarResult
