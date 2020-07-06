import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
    <Container>
        <Background />

        <Content>
            <img src={logoImg} alt="Logo GoBarber" />

            <form>
                <h1>Faça seu cadastro</h1>

                <Input name="name" icon={FiUser} placeholder="nome" />

                <Input name="email" icon={FiMail} placeholder="e-mail" />

                <Input name="password" icon={FiLock} type="password" placeholder="senha" />

                <Button type="submit">Criar conta</Button>
            </form>

            <a href="/sign-in"><FiLogIn />Fazer login</a>
        </Content>
    </Container>
);

export default SignIn;
