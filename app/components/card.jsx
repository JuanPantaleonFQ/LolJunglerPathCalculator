import Image from "next/image";

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
const NameReturner = ({prop}) => <p className="my-4  font-bold text-gray-500">{prop}</p>
const DescriptionReturner = ({prop}) =>  <p className="mb-4 text-xl font-semibold text-gray-800">{capitalizeFirstLetter(prop)}</p>


const Card = ({name,description, img}) => {
    return( //aqui es donde podemos cambiar el numero de tarjetas que se muestran (cambiando el with)
        <div className="w-32 flex flex-col items-center justify-start cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <Image
        src={img}
        alt={name}
        width={100} // Specify the desired width
        height={100} // Adjust the height accordingly
        className="w-full rounded-lg object-cover object-center"
      />
            <NameReturner prop={name}/>
            <DescriptionReturner prop={description}/>
      </div>
    )
}

export default Card