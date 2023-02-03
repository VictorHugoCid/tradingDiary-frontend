import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import GlobalContext from '../../contexts/globalContext';
import useToken from '../../hooks/useToken';

import * as strategyApi from '../../services/strategiesApi';

export default function AddStrategy() {
  const { setShowAddStrategy } = useContext(GlobalContext);

  // NAO SEI SE PRECISA DO TOKEN
  const token = useToken();

  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  async function submit(event) {
    event.preventDefault();
    console.log(form)

    try {
      const strategy = strategyApi.postStrategy(token, form);
      toast('Estratégia adicionada adicionado');
    } catch (err) {
      toast('Deu ruim aí!');
    }
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    return;
  }

  return (
    <AddStrategyWrapper>
      <Veil onClick={() => setShowAddStrategy(false)}></Veil>
      <Box >
          <Form onSubmit={submit}>
          <Box2>
              <p>Nome da estratégia</p>

            <Input
              type="text"
              placeholder="Nome da estratégia"
              name="name"
              fullWidth
              value={form.name}
              onChange={(e) => handleForm(e)}
              required
            />
            </Box2>

            <Box2>
              <p>Descrição</p>

            <Description
              type="text"
              placeholder="Descrição"
              name="description"
              fullWidth
              value={form.description}
              onChange={(e) => handleForm(e)}
              required
            />
            </Box2>
            

            <Button type="submit" fullWidth onClick={()=>{}}>
              Enviar
            </Button>
          </Form>
      </Box>
    </AddStrategyWrapper>
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

const AddStrategyWrapper = styled.div`
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

const Input = styled.input`
  height: 40px;
  max-width: 300px;
  min-width: 150px;
  font-size: 16px;

  :focus{
    border: 0.5px solid red;
  }
  
`;

const Description = styled.textarea`
  height: 140px;
  min-width: 150px;
  width: 300px;
  min-height: 50px;
  padding: 5px;
  font-size: 14px;
 
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

const Box2 = styled.div`
  height: auto;
  min-width: 150px;
  /* background-color: red; */

  background-color: #131820;
  color: grey;

  p{
    font-size: 18px;
    margin-bottom: 5px;
    color: #f6f6f6;
  }

  cursor: pointer;
`;


