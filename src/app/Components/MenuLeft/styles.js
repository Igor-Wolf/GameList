import styled from "styled-components";

export const Container = styled.div`
    

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* 50% transparente */
    justify-content: space-around;

    width: 750px;
    height:500px;
    padding: 1rem;
    border-radius: 1rem;
    gap: 1rem;

`

export const ScrollContainer = styled.div`

    width: 100%;
    height: 100%;
    overflow-y: scroll;
    
    


`

export const GameItem = styled.div`

    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5); /* 50% transparente */
    margin: 0.5rem;
    padding: 0.5rem;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
        background-color: #747825;
        
    }


`
export const GameItemTitle = styled.div`

    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5); /* 50% transparente */
    margin: 0.5rem;
    padding: 0.5rem;


`

export const TitleInfo = styled.p`

    font-size: 1.5rem; 
    color: white;
    font-weight: 600;
    padding-bottom:1rem;
    margin-left: -4rem;
    



`
export const Description = styled.p`

    font-size: 1.1rem; 
    color: white;
    
    



`

