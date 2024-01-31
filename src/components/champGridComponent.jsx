import Card from './card'

const getChamps = async () => {
    const champs = await fetch('https://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json')
        .then(response => response.json())
    
    return champs
}

const ChampGridComponent =  async () => {
   const campeon = await getChamps()
   console.log(campeon) 
    return(
        <div className="mt-8 flex mx-auto px-5"> 
            <p>buenas</p>   
            {/* <Card name="brand" description="champ 1"/>
            <Card name="lulu" description="champ 2"/>
            <Card name="bardo" description="champ 3"/>  */}
        </div>
    )
}

export default ChampGridComponent