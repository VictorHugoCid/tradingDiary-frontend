import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import UserContext from '../../contexts/UserContext';
import useSignIn from '../../hooks/api/useSignIn';

// import GitHubButton from './gitHubButton';

export default function SignUp() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    secondPassword:''
  });

  const { loadingSignIn, signIn } = useSignIn();

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(form.email, form.password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/home');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  return (
    <Wrapper>
      <LoginWrapper>
        <Logo></Logo>

        <Form onSubmit={submit}>
          <Input
            label="E-mail"
            type="text"
            placeholder="Email"
            name="email"
            fullWidth
            value={form.email}
            onChange={(e) => handleForm(e)}
            required
            disabled={loadingSignIn}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Senha"
            name="password"
            fullWidth
            value={form.password}
            onChange={(e) => handleForm(e)}
            required
            disabled={loadingSignIn}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Confirme a senha"
            name="secondPassword"
            fullWidth
            value={form.secondPassword}
            onChange={(e) => handleForm(e)}
            required
            disabled={loadingSignIn}
          />

          <Button type="submit" fullWidth disabled={loadingSignIn}>
            Entrar
          </Button>
          <LinkSignUp onClick={() => navigate('/sign-in')}>Já tem uma conta? Faça o login aqui</LinkSignUp>
        </Form>
      </LoginWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: red;
  background-color: #131820;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
`;

const LoginWrapper = styled.div`
  width: 450px;
  height: 600px;
  background-color: #131820;
  border-radius: 30px;
  box-shadow: 10px 8px 26px 5px rgba(66, 63, 66, 0.72);
  /* box-shadow: 10px 8px 26px 5px grey; */
  /* box-shadow: 10px 8px 26px 5px rgba(43, 99, 30, 1); */

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  min-height: 40px;
  margin-bottom: 25px;

  background-color: #131820;
  border-radius: 10px;
  padding-left: 10px;

  ::placeholder {
    color: grey;
  }
`;

const Button = styled.button`
  min-height: 40px;
  width: 120px;
  margin-bottom: 15px;
  border-radius: 5px;

  background-color: #131820;
  color: grey;

  cursor: pointer;
`;

const Form = styled.form`
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const LinkSignUp = styled.p`
  font-size: 12px;
  text-decoration: underline;
  color: grey;

  cursor: pointer;
`;
