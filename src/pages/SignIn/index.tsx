import React, { useCallback, useRef } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background } from './styles';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErros from '../../utils/getValidationErros';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        formRef.current?.setErrors({});
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
            });

            await schema.validate(data, {
                abortEarly: false
            });
        } catch (err) {
            console.log(err)
            const errors = getValidationErros(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Logo GoBarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu login</h1>

                    <Input name="email" icon={FiMail} placeholder="e-mail" />

                    <Input name="password" icon={FiLock} type="password" placeholder="senha" />

                    <Button type="submit">Entrar</Button>

                    <a href="/forgot">Esqueci minha senha</a>
                </Form>

                <a href="/sign-up"><FiLogIn />Criar conta</a>
            </Content>

            <Background />
        </Container>
    )
};

export default SignIn;
