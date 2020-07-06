import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
    function handleSubmit(data: object): void {
        console.log(data)
    }

    return (
        <Container>
            <Background />

            <Content>
                <img src={logoImg} alt="Logo GoBarber" />

                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input name="name" icon={FiUser} placeholder="nome" />

                    <Input name="email" icon={FiMail} placeholder="e-mail" />

                    <Input name="password" icon={FiLock} type="password" placeholder="senha" />

                    <Button type="submit">Criar conta</Button>
                </Form>

                <a href="/sign-in"><FiLogIn />Fazer login</a>
            </Content>
        </Container>
    )
}

export default SignIn;
