import { useState, useEffect } from 'react';
import Card from './Card';

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
  console.log(champs)
  // useEffect(()=>{
  //   const getImgApi = async () => {
  //     try {
  //       const res = await fetch('https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json')
  //       const data = await res.json()
  //       const champImages = Object.values(data.data.img.full)
  //       setChampImg(champImages)
  //     } catch (error) {
  //       console.log('Erro fetching images:', error);
  //     }
  //   }
  //   getImgApi()
  // }, [])

  return (
    <div className="mt-8 flex mx-auto px-5 flex-wrap gap-5 ml-24">
      {champs.map((champ) => (
        <Card key={champ.id} name={champ.name} description={champ.title} img={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${champ.image.full}`}  />
      ))}
    </div>
    )
}

export default ChampGridComponent;