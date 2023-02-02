import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import GlobalContext from '../../contexts/globalContext';
import useToken from '../../hooks/useToken';

import * as strategyApi from '../../services/strategyApi';

export default function StrategyTrade() {
  const { setShowAddStrategy } = useContext(GlobalContext);

  // NAO SEI SE PRECISA DO TOKEN
  const token = useToken();

  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  async function submit(event) {
    event.preventDefault();
    // console.log(form)

    try {
      const trade = strategyApi.postTrade(token, form);
      toast('Trade adicionado');
    } catch (err) {
      toast('Deu ruim aí!');
    }
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    return;
  }

  return (
    <AddTradeWrapper>
      <Veil onClick={() => setShowAddStrategy(false)}></Veil>
      <Box >
          <Form onSubmit={submit}>
            <Input
              type="text"
              placeholder="Nomde da estratégia"
              name="name"
              fullWidth
              value={form.name}
              onChange={(e) => handleForm(e)}
              required
              // disabled={loadingSignUp}
            />
            <Input
              type="text"
              placeholder="Descrição"
              name="description"
              fullWidth
              value={form.description}
              onChange={(e) => handleForm(e)}
              required
              // disabled={loadingSignUp}
            />

            <Button type="submit" fullWidth /* disabled={loadingSignUp} */>
              Enviar
            </Button>
          </Form>
      </Box>
    </AddTradeWrapper>
  );
}

const Veil = styled.div`
  position: fixed;
  z-index: 4;

  min-width: 100vw;
  min-height: 100vh;

  background-color: white;

  opacity: 0.5;
`;

const AddTradeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100vw;
  min-height: 100vh;

  position: fixed;
  z-index: 3;
`;

const Box = styled.div`
  position: fixed;
  z-index: 5;
  border-radius: 30px;

  padding: 30px;

  min-width: 80%;
  min-height: 600px;

  background-color: #131820;
`;

const Form = styled.form`
  min-height: inherit;
  height: 100%;
  /* background-color: red; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-evenly;

`;
// const Test = styled.div`
//   height: 100%;
//   background-color: green;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

// `;

const Input = styled.input`
  height: 40px;
  max-width: 300px;
  min-width: 150px;
  /* margin-bottom: 10px; */
`;

const Button = styled.button`
  height: 40px;
  width: 120px;
  /* margin-top: 15px; */
  border-radius: 5px;

  background-color: #131820;
  color: grey;

  cursor: pointer;
`;
