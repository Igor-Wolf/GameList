'use client'
import Image from "next/image";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { ExternalContainer, InternalContainer, ContentContainer } from "./styles";
import { BGVideo } from "./Components/BGVideo";
import { MenuRight } from "./Components/MenuRight";
import { useEffect, useState } from "react";
import { MenuLeft } from "./Components/MenuLeft";

export default function Home() {
  const [data, setData] = useState([]);
  const [chosenGame, setChosenGame] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/database/data.json');
        const jsonData = await res.json();
        setData(jsonData);
        setChosenGame(jsonData[0]); // Initialize chosenGame with the first object
        setLoading(false); // Marca o carregamento como concluído
      } catch (error) {
        console.error('Error fetching the JSON:', error);
        setLoading(false); // Marca o carregamento como concluído mesmo em caso de erro
      }
    };

    fetchData();
  }, []);

  // Effect to handle chosenGame change
  useEffect(() => {
    if (chosenGame) {
      // console.log('Chosen game has changed:', chosenGame);
      // Place logic here to handle updates that depend on chosenGame
    }
  }, [chosenGame]);


  const handleChildClick = (obj) => {

    setChosenGame(obj)

  }


  const handleNextGame = () => {

    chosenGame.id < data.length ? setChosenGame(data[chosenGame.id]) : setChosenGame(data[0])
    
  }

  const handlePrevGame = () => {
    
    chosenGame.id === 1 ? setChosenGame(data[data.length - 1]) : setChosenGame(data[chosenGame.id - 2])    
    
  }



  // Renderiza a página apenas quando os dados estiverem carregados
  if (loading) {
    return <p>Carregando...</p>; // Renderiza uma mensagem de carregamento enquanto os dados são buscados
  }

  return (
    <ExternalContainer>
      <Header />
      <InternalContainer>
        <BGVideo />
        <ContentContainer>
          {data && <MenuLeft jogos={data} onButtonClick={handleChildClick} />} {/* Renderiza MenuLeft somente se data estiver carregado */}
          {data && <MenuRight chosenGame={chosenGame} onButtonClick={handleNextGame} onButtonClick2={handlePrevGame} />}
          
        </ContentContainer>
      </InternalContainer>
      <Footer />
    </ExternalContainer>
  );
}
