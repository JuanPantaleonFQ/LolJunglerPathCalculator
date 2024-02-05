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
            <div  className='sm:w-1/4 md:w-1/4 lg:w-1/12 xl:w-1/6 flex max-h-56  border-t-0 border-gray-300 border-b-2 border-l-2 border-r-2 border-2 flex-col absolute z-50 items-center text-black overflow-auto custom-scrollbar '> 
               {props.map(campeon => (<ResultComponent  key={campeon.id} prop={campeon.name} sendDataToParent={getDataFromResultComponent}/>))}
            </div>           
        )
    }
  
}

export default SearchBarResult
