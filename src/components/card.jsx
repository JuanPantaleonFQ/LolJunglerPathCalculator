
const NameReturner = ({prop}) => <p className="my-4 pl-4 font-bold text-gray-500">{prop}</p>
const DescriptionReturner = ({prop}) =>  <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">{prop}</p>


const Card = ({name,description}) => {
    return(
        <div className="max-w-60 cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img className="w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
            <NameReturner prop={name}/>
            <DescriptionReturner prop={description}/>
      </div>
    )
}

export default Card