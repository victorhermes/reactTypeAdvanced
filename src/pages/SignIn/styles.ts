import styled from 'styled-components';
import SignInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;

    form {
        margin: 60px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        input {
            background: #232129;
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;

            & + input {
                margin-top: 8px;
            }
        }

        button {
            background: #ff9000;
            color: #312e38;
            border-radius: 10px;
            border: 0;
            height: 56px;
            padding: 0 16px;
            width: 100%;
            font-weight: 500;
            margin-top: 20px;
        }

        a {
            color: #fff;
            display: block;
            margin-top: 24px;
            text-decoration: none;
        }
    }

    > a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        display: flex;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${SignInBackground}) no-repeat center;
    background-size: cover;
`;
