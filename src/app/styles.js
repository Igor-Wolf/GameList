import styled from "styled-components";

export const ExternalContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    


    @media (max-width: 1550px) {
    height: auto;
    
    max-width: 100%
  } 
    



`

export const InternalContainer = styled.div`

    display:flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;


`

export const ContentContainer = styled.div`

    display:flex;
    flex-direction: row;
    
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 1550px) {
    display:flex;
    flex-direction: column-reverse;
    margin-top: 80px;
    margin-bottom: 40px;
  } 

`