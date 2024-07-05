import styled from "styled-components";

export const Container = styled.div`


    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8); /* 50% transparente */
    justify-content: space-around;
    width: 750px;
    height:500px;

    min-width: 750px;
    min-height:500px;
    padding: 1rem;
    border-radius: 1rem;
    gap: 1rem;


    @media (max-width: 800px) {
    flex-direction: column-reverse;

    height: auto;
    min-height: auto;

    width: 90vw;
    min-width: auto;




  } 

  @media (max-width: 400px) {

    width: 100vw;
  }
    


`

export const ImageCarrosel = styled.div`


    display:flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 500px) {
    
    align-items:center;
    justify-content: center;
    height: auto;
    min-height: auto;

    width: 100vw;
    min-width: auto;




  } 
    
    

`

export const GameInfo = styled.div`

    padding-top: 2rem;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.5rem;

    height:500px;
    width:600px;

    @media (max-width: 800px) {
    

    height: auto;
    min-height: auto;

    width: 80vw;
    min-width: auto;




  } 

`


export const TitleInfo = styled.p`

    font-size: 1.5rem; 
    color: white;
    font-weight: 600;
    padding-bottom:1rem;
    



`
export const Description = styled.p`

font-size: 1.1rem;  
    color: white;
    text-align: justify;
    line-height: 1.5rem;
    



`
export const ReleaseDate = styled.p`

    font-size: 1.1rem; 
    color: white;
    text-align: justify;
    line-height: 1.5rem;

    



`

export const Category = styled.p`

font-size: 1.1rem;     color: white;
    text-align: justify;
    line-height: 1.5rem;
    



`
export const PlatformInfo = styled.p`

font-size: 1.1rem;     color: white;
    text-align: justify;
    line-height: 1.5rem;



`

export const Language = styled.p`

font-size: 1.1rem;     color: white;
    text-align: justify;
    line-height: 1.5rem;
    



`

export const ImageBox = styled.img`

    width: 400px;
    height:300px;
    object-fit: cover;
    border-radius: 1rem;

    @media (max-width: 800px) {
        width: 300px;
        height:200px;
    
    }
`

export const ButtonsContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
    

    flex-wrap: wrap;
    justify-content: space-evenly;




  } 

`