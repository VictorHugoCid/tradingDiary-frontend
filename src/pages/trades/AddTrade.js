import { useState } from 'react';
import styled from 'styled-components';

export default function AddTrade() {
  // criar o sombreado

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
    // setSumir a Box

    // try {

    //   toast('Login realizado com sucesso!');

    // } catch (err) {
    //   toast('Deu ruim aí!');
    // }
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: [e.target.value] });
    return;
  }
  return (
    <AddTradeWrapper>
      <Veil></Veil>
      <Box>
        <Form onSubmit={submit}>
          <Input
            label="E-mail"
            type="number"
            placeholder="Preço de entrada"
            name="entryPrice"
            fullWidth
            value={form.entryPrice}
            onChange={(e) => handleForm(e)}
            required
            // disabled={loadingSignUp}
          />
          <Input
            label="Senha"
            type="number"
            placeholder="Preço de saída"
            name="exitPrice"
            fullWidth
            value={form.exitPrice}
            onChange={(e) => handleForm(e)}
            required
            // disabled={loadingSignUp}
          />

          <Input
            label="Senha"
            type="date"
            placeholder="Dia"
            name="day"
            fullWidth
            value={form.day}
            onChange={(e) => handleForm(e)}
            required
            // disabled={loadingSignUp}
          />

          <Input
            label="Senha"
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
            label="Senha"
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
            label="Senha"
            type="number"
            placeholder="Número de contratos"
            name="stock"
            fullWidth
            value={form.stock}
            onChange={(e) => handleForm(e)}
            required
            // disabled={loadingSignUp}
          />

          <Input
            label="Senha"
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
            label="Senha"
            type="text"
            placeholder="Compra ou venda?"
            name="exitbuyOrSellTime"
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
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40px;
  max-width: 300px;
  margin-bottom: 10px;
`;

const Button = styled.button``;
