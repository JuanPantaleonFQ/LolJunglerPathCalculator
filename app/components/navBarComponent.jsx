import Image from "next/image"
import Link from "next/link"

export const NavBar = () =>{
    const paths = [
        {name: "img",
         url: "/",
        src: "https://img.icons8.com/color/48/league-of-legends.png",
        reference: "https://icons8.com/"},
        
        {name: "Home",
         url: "/"},

        {name: "Champs",
         url: "/champs"}
    ]
    return(
        <header className='flex justify-center'>
            <div className="flex items-center rounded-xl mt-6 justify-center w-68 bg-[#222222] min-h-8">
                <ul className="flex h-full flex-row items-center justify-between text-[16px] font-medium sm:text-[18px]">
                {paths.map(path => {
                    if (path.name.toLowerCase() === "img") {
                        return(<li key={path.name} className="hover:cursor-pointer text-white ml-4 mr-4">
                        <Link target="_blank" href={path.reference}>
                         <Image width={40} height="48" src={path.src} alt="league-of-legends"/>
                        </Link>
                        </li>)                    
                    }else{
                        return(<li key={path.name} className="hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-white hover:cursor-pointer text-white m-6 ">
                            <a href={path.url}>{path.name}</a>
                         </li>)                        
                    }                                         
                })}              
                </ul>             
            </div>
      </header>        
    )
}


