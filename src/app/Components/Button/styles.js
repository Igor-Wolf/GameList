import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #101212;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px;
    margin: 0.5rem;
    min-width: 80px;
    max-width:100px;
    width: 80%;
    font-size: 1rem;
    font-weight: 500;
    


    ${({ variant }) => variant !== "primary" && css`
    
    height: 33px;
    background: #101212;
    max-width:100px;
    

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }


    &::after {
        content: '';
        position: absolute;
        border: 1px solid #101212;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }
`}


`