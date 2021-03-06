import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #666360;
    display: flex;
    align-items: center;
    transition: border-color 0.5s;
    transition: color 0.5s;

    & + div {
            margin-top: 8px;
    }

    ${props => props.isErrored && css`
        border-color: red;
    `}

    ${props => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    ${props => props.isFilled && css`
        color: #ff9000;
    `}

    input {
        flex: 1;
        border: 0;
        background: transparent;
        color: #fff;
    }

    > svg {
       margin-right: 16px;
    }
`;

export const Error = styled.div`
    height: 20px;

    svg {
        margin-left: 10px;
    }
`
