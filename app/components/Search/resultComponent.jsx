import React from 'react'

const ResultComponent = ({prop,sendDataToParent}) => {

  const handleClick = (e) => {
    e.preventDefault()
    sendDataToParent(prop)
  }
  return (
    <div className='cursor-pointer px-1 py-1 w-full bg-white hover:bg-gray-200' onClick={handleClick}>{prop}</div>
  )
}
export default ResultComponent


