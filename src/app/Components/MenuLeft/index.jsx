import React from 'react';
import {
    Container,
    ScrollContainer,
    TitleInfo,
    Description,
    GameItem,
    GameItemTitle
    
} from './styles';

const MenuLeft = ({ jogos, onButtonClick } ) => {
    

    const handleClick = (jogo) => {
        
        onButtonClick(jogo)


    }

    return (
        <Container>
            <TitleInfo>Games</TitleInfo>
            <ScrollContainer>
                <GameItemTitle>
                    <Description>Id</Description>
                    <Description>Nome</Description>
                    <Description>Data Build</Description>

                </GameItemTitle>
                {jogos.map((jogo, index) => (
                    
                    <GameItem onClick={() => handleClick(jogo)} key={index}>
                        <Description>{jogo.id}</Description>
                        <Description>{jogo.title}</Description>
                        <Description>{jogo.releaseDate}</Description>
                    </GameItem>
                ))}
            </ScrollContainer>
        </Container>
    );
};

export { MenuLeft };
