import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="Logo GoBarber" />

            <form>
                <h1>Faça seu login</h1>

                <input placeholder="e-mail" />

                <input type="password" placeholder="senha" />

                <button type="submit">Entrar</button>

                <a href="/forgot">Esqueci minha senha</a>
            </form>

            <a href="/sign-up"><FiLogIn />Criar conta</a>
        </Content>

        <Background />
    </Container>
);

export default SignIn;
