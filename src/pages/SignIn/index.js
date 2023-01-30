import { useState, useContext } from 'react';
// import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

// import EventInfoContext from '../../contexts/EventInfoContext';
// import UserContext from '../../contexts/UserContext';

// import useSignIn from '../../hooks/api/useSignIn';

// import GitHubButton from './gitHubButton';

export default function SignIn() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const { loadingSignIn, signIn } = useSignIn();

  // const { eventInfo } = useContext(EventInfoContext);
  // const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    console.log('CLICK LOGIN');

    // try {
    //   const userData = await signIn(email, password);
    //   setUserData(userData);
    //   toast('Login realizado com sucesso!');
    //   navigate('/dashboard');
    // } catch (err) {
    //   toast('Não foi possível fazer o login!');
    // }
  }

  return <Wrapper>devetria aparecer algo</Wrapper>;
}

const Wrapper = styled.div`
  background-color: red;
`;
