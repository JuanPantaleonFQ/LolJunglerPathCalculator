import { useState, useEffect } from 'react';
import Card from './Card';
import SearchBar from './Search/searchBar'

const ChampGridComponent = () => {
   const [champs, setChamps] = useState([]);
   const [searchData, setSearchData] = useState(champs);
   
   
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

    const getDataFromSearchBar = (data) => {
      setSearchData(data);
    }
    const getDataFromClikedSearched = (dataOnClick) =>{  
      const campeonEncontrado = champs.find((campeon) => campeon.name === dataOnClick);      
      setSearchData([campeonEncontrado]);      
    }

    return (
      <div className='mx-8 '>
        <SearchBar sendDatatoParent={getDataFromSearchBar} sendDatatoParent2={getDataFromClikedSearched} champs={champs} />
        <div className="mt-8 flex justify-center mx-auto px-5 flex-wrap gap-5">
          {
            searchData.length === 0 ? (
              champs.map((champ) => (
                <Card
                  key={champ.id}
                  name={champ.name}
                  description={champ.title}
                  img={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${champ.image.full}`}
                />
              ))
            ) : searchData.length === 1 ? (
              <Card
                key={searchData[0].id}
                name={searchData[0].name}
                description={searchData[0].title}
                img={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${searchData[0].image.full}`}
              />
            ) : (
              searchData.map((champ) => (
                <Card
                  key={champ.id}
                  name={champ.name}
                  description={champ.title}
                  img={`https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${champ.image.full}`}
                />
              ))
            )

          }

        </div>
      </div>
    );
  };

export default ChampGridComponent;