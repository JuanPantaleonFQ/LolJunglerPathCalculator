import React from 'react'
import ResultComponent  from './resultComponent';
import './css/scrollbar.css'

const SearchBarResult = ({ newFilter , props }) => {
    const getDataFromResultComponent = (data) => {
        // In the -data variable, we store what ResultComponent sends to parent
        console.log(data);        
    };
    
 
    
    if (newFilter !== '') {
        return (    
            <div  className='w-64 max-h-40 flex flex-col absolute z-50 items-center text-black overflow-auto custom-scrollbar '> 
               {props.map(campeon => (<ResultComponent  key={campeon.id} prop={campeon.name} sendDataToParent={getDataFromResultComponent}/>))}
            </div>           
        )
    }
  
}

export default SearchBarResult
