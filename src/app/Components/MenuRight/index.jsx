import React, { useState, useEffect } from 'react';
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

const MenuRight = ({ chosenGame, onButtonClick, onButtonClick2 }) => {
  const router = useRouter();

  const handleClickCode = () => {
    router.push(chosenGame.code);
  };

  const handleClickPlay = () => {
    router.push(chosenGame.play);
  };

  const handleClickNext = () => {
    onButtonClick();
  };

  const handleClickPrev = () => {
    onButtonClick2();
  };

  const [swiperStyle, setSwiperStyle] = useState({ width: '400px', height: '300px' });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 400) {
        setSwiperStyle({ width: '280px', height: '180px' });
      } else if (screenWidth <= 600) {
        setSwiperStyle({ width: '300px', height: '200px' });
      } else {
        setSwiperStyle({ width: '400px', height: '300px' });
      }
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            ...swiperStyle,
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
          <Button title={"Code"} variant='secondary' onClick={handleClickCode}>
            <i className="bi bi-stop-fill"></i>
          </Button>
          <Button title={"Play"} variant='secondary' onClick={handleClickPlay}>
            <i className="bi bi-play-fill"></i>
          </Button>
          <Button title={"Prev "} variant='secondary' onClick={handleClickPrev}>
          <i class="bi bi-skip-backward-fill"></i>
          </Button>
          <Button title={"Next "} variant='secondary' onClick={handleClickNext}>
            <i className="bi bi-skip-forward-fill"></i>
          </Button>
        </ButtonsContainer>
      </ImageCarrosel>
    </Container>
  );
};

export { MenuRight };
