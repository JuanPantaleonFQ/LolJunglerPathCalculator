import { useState, useEffect } from 'react';
import Card from './Card';
import SearchBar from './Search/searchBar'

const ChampGridComponent = () => {
  const [champs, setChamps] = useState([]);
  const [champImg, setChampImg] = useState([])

  useEffect(() => {
    const getChamps = async () => {
      try {
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json');
        const data = await response.json();
        const championList = Object.values(data.data);
        setChamps(championList);
      } catch (error) {
        console.error('Error fetching champions:', error);
      }
    };

    getChamps();
    
  }, []); 


  return (
    <div  className='mx-8 '>
      <SearchBar champs={champs}/>     
      <div className="mt-8 flex justify-center mx-auto px-5 flex-wrap gap-5">
        {champs.map((champ) => (
        <Card key={champ.id} name={champ.name} description={champ.title} img={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${champ.image.full}`}  />
        ))}
      </div>
    </div>

    )
}

export default ChampGridComponent;