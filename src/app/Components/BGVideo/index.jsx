'use client'
import React from 'react';
import { VideoBG } from './styles';

const BGVideo = () => {

  var listVideo = ["/videos/carro.mp4", "/videos/Elden.webm", "/videos/malenia.mp4", "/videos/moon.mp4"]
 
  const auxi = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    return (<>
        
      <VideoBG src={listVideo[auxi]} autoPlay="autoPlay" muted loop>
           

        </VideoBG>
        
      
  </>
  );
};

export { BGVideo };
