import { useState, useEffect } from 'react';
import Card from './Card';

const ChampGridComponent = () => {
  const [champs, setChamps] = useState([]);

  useEffect(() => {
    const getChamps = async () => {
      try {
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json');
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
    <div className="mt-8 flex mx-auto px-5 flex-wrap gap-5">
      {champs.map((champ) => (
        <Card key={champ.id} name={champ.name} description={`Champ ${champ.id}`} />
      ))}
    </div>
    )
}

export default ChampGridComponent;