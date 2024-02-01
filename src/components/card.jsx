
const NameReturner = ({prop}) => <p className="my-4 pl-4 font-bold text-gray-500">{prop}</p>
const DescriptionReturner = ({prop}) =>  <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">{prop}</p>


const Card = ({name,description, img}) => {
    return(
        <div className="w-1/6 cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img className="w-full rounded-lg object-cover object-center" src={img} alt="product" />
            <NameReturner prop={name}/>
            <DescriptionReturner prop={description}/>
      </div>
    )
}

export default Card