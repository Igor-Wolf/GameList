'use client';
import React, { useRef } from 'react';
import { VideoBG } from './styles';

const BGVideo = () => {
  var listVideo = ["/videos/carro.mp4", "/videos/Elden.webm", "/videos/malenia.mp4", "/videos/moon.mp4"];
 
  const auxiRef = useRef(Math.floor(Math.random() * (3 - 0 + 1)) + 0);

  return (
    <>
      <VideoBG src={listVideo[auxiRef.current]} autoPlay="autoPlay" muted loop />
    </>
  );
};

export { BGVideo };
