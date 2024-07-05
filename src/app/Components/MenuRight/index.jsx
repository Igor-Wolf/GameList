import React from 'react';
import {
  Container,
  GameInfo,
  ImageCarrosel,
  ImageBox,
  TitleInfo,
  Description,
  PlatformInfo,
  Category,
  Language,
  ReleaseDate,
  ButtonsContainer
} from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Button } from '../Button';

import 'bootstrap-icons/font/bootstrap-icons.css';

import { useRouter } from 'next/navigation';

const MenuRight = ({ chosenGame , onButtonClick}) => {
  console.log(chosenGame)
  const router = useRouter();

  const handleClickCode = () => {

    router.push(chosenGame.code)


  }

  const handleClickPlay = () => {

    router.push(chosenGame.play)


  }

  const handleClickNext = () => {


    onButtonClick()


  }

  return (
    <Container>
      <GameInfo>
        <TitleInfo>{chosenGame.title}</TitleInfo>
        <Description><strong>Descrição:</strong> {chosenGame.description}</Description>
        <ReleaseDate><strong>Lançamento:</strong> {chosenGame.releaseDate}</ReleaseDate>
        <Category><strong>Genero:</strong> {chosenGame.genre}</Category>
        <PlatformInfo><strong>Plataforma:</strong> {chosenGame.platform}</PlatformInfo>
        <Language><strong>Linguagem:</strong> {chosenGame.language}</Language>
      </GameInfo>
      <ImageCarrosel>
      <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  className="mySwiper"
  navigation={true}
  spaceBetween={10}
  slidesPerView={1}
  scrollbar={{ draggable: true }}
  loop={true}
  style={{
    width: '400px',
    height: '300px',
    borderRadius: "1rem",
    
  }}
>
  {chosenGame.preview.map((link, index) => (
    <SwiperSlide key={index}>
      <ImageBox src={link} alt={`Image ${index}`} />
    </SwiperSlide>
  ))}
</Swiper>
        <ButtonsContainer>
          <Button title={"Code"} variant='secondary' onClick={handleClickCode}> <i class="bi bi-stop-fill"></i></Button>
          <Button title={"Play"} variant='secondary' onClick={handleClickPlay}><i class="bi bi-play-fill"></i></Button>
          <Button title={"Next "} variant='secondary'onClick={handleClickNext}><i class="bi bi-skip-forward-fill"></i></Button>
    </ButtonsContainer>
      </ImageCarrosel>
    </Container>
  );
};

export { MenuRight };
