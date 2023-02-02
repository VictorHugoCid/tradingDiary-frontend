import dayjs from 'dayjs';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import GlobalContext from '../../contexts/globalContext';
import useToken from '../../hooks/useToken';

import * as tradeApi from '../../services/tradeApi';

export default function AddTrade() {
  const { setShowAddTrade } = useContext(GlobalContext);

  // NAO SEI SE PRECISA DO TOKEN
  const token = useToken();

  const [form, setForm] = useState({
    entryPrice: '',
    exitPrice: '',
    day: '',
    entryTime: '',
    exitTime: '',
    stock: '',
    amount: '',
    buyOrSell: '',
    strategy: '',
  });

  async function submit(event) {
    event.preventDefault();
    
    try {
      const trade = tradeApi.postTrade(token, form);
      toast('Trade adicionado');
    } catch (err) {
      toast('Deu ruim aí!');
    }
  }

  function handleForm(e) {
    setForm({ 
      ...form, 
      [e.target.name]: e.target.value, 
    });

    return;
  }

  return (
    <AddTradeWrapper>
      <Veil onClick={() => setShowAddTrade(false)}></Veil>
      <Box>
        <Form onSubmit={submit}>
          <Input
            type="number"
            step="0.01"
            placeholder="Preço de entrada"
            name="entryPrice"
            fullWidth
            value={form.entryPrice}
            onChange={(e) => handleForm(e)}
            required
            // disabled={loadingSignUp}
          />
          <Input
            type="number"
            step="0.01"
            placeholder="Preço de saída"
            name="exitPrice"
            fullWidth
            value={form.exitPrice}
            onChange={(e) => handleForm(e)}
            required
            // disabled={loadingSignUp}
          />

          <Input
            type="date"
            name="day"
            placeholder="dd/mm/yyyy"
            fullWidth
            value={form.day}
            onChange={(e) => handleForm(e)}
            // required
            // disabled={loadingSignUp}
          />

          <Input
            type="time"
            placeholder="hora da entrada"
            name="entryTime"
            fullWidth
            value={form.entryTime}
            onChange={(e) => handleForm(e)}
            required
            // disabled={loadingSignUp}
          />
          <Input
            type="time"
            placeholder="hora da saída"
            name="exitTime"
            fullWidth
            value={form.exitTime}
            onChange={(e) => handleForm(e)}
            required
            // disabled={loadingSignUp}
          />

          <Input
            type="text"
            placeholder="Ativo"
            name="stock"
            fullWidth
            value={form.stock}
            onChange={(e) => handleForm(e)}
            required
            // disabled={loadingSignUp}
          />
          <Input
            type="number"
            placeholder="Número de contratos"
            name="amount"
            fullWidth
            value={form.amount}
            onChange={(e) => handleForm(e)}
            required
            // disabled={loadingSignUp}
          />

          <Input
            type="text"
            placeholder="Estratégia"
            name="strategy"
            fullWidth
            value={form.strategy}
            onChange={(e) => handleForm(e)}
            required
            // disabled={loadingSignUp}
          />

          <Input
            type="text"
            placeholder="Compra ou venda?"
            name="buyOrSell"
            fullWidth
            value={form.buyOrSell}
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
  justify-content: space-evenly;
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
