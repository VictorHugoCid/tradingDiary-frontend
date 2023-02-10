import dayjs from 'dayjs';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import NativePickers from '../../components/Calendar/Calendar';
import TradeUnit from '../../components/TradeUnit/TradeUnit';
import GlobalContext from '../../contexts/globalContext';
import AddTrade from './AddTrade';
import * as tradeApi from '../../services/tradeApi';
import useToken from '../../hooks/useToken';
import MainLayout from '../../components/MainLayout.js/MainLayout';

export default function Trades() {
  const { dateTest, setDateTest, showAddTrade } = useContext(GlobalContext);

  const token = useToken();

  const [mandou, setMandou] = useState(false);
  const [trades, setTrades] = useState([]);

  async function handleFiltrar() {
    if (dateTest.startDate.length === 0 || dateTest.endDate.length === 0) {
      alert('Selecione as datas');
      return;
    }

    const body = {
      startDate: dayjs(dateTest.startDate).format('YYYY/MM/DD'),
      endDate: dayjs(dateTest.endDate).format('YYYY/MM/DD'),
    };
    try {
      const tradesBack = await tradeApi.getTrades(token, body);
      console.log('🚀🚀🚀 ~ file: Trades.js:35 ~ handleFiltrar ~ tradesBack', tradesBack);
      setTrades(tradesBack);
      toast('Trade adicionado');
    } catch (err) {
      toast('Deu ruim aí!');
    }
    setMandou(true);
  }

  return (
    <MainLayout>
      <TradesWrapper>
        {showAddTrade ? <AddTrade /> : <></>}
        <Line></Line>
        <NativePickers />

        <Button onClick={() => handleFiltrar()}>Filtrar</Button>
        {trades.length !== 0 ? (
          <>
            {trades.map((value, index) => {
              return <TradeUnit key={index} trade={value} />;
            })}
            <Line></Line>
          </>
        ) : (
          <Warning>Você precisa selecionar as datas</Warning>
        )}
      </TradesWrapper>
    </MainLayout>
  );
}

const TradesWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #131820;
  /* background-color: #f6f6f6; */

  color: white;

  position: relative;
`;

const Button = styled.div`
  width: 150px;
  height: 40px;
  margin-bottom: 50px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: grey;

  cursor: pointer;
`;
const LineTop = styled.div`
  margin-top: 40px;
`;

const Line = styled.div`
  margin-top: 150px;
`;

const Warning = styled.div`
  width: 100%;
  height: auto;
  background-color: #131820;

  font-size: 30px;

  display: flex;
  justify-content: center;

  position: absolute;
  top: 50%;
`;
