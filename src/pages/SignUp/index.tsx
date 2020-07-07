import React, { useCallback } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
    const handleSubmit = useCallback(async (data: object) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos'),
            });

            await schema.validate(data, {
                abortEarly: false
            });
        } catch (err) {
            console.log(err)
        }
    }, []);

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
