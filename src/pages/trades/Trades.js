import { makeStyles } from "@material-ui/styles";
import dayjs from "dayjs";
import { useContext, useState } from 'react';
import styled from 'styled-components';
import NativePickers from '../../components/Calendar/Calendar';
import TradeUnit from '../../components/TradeUnit/TradeUnit';
import GlobalContext from '../../contexts/globalContext';
import AddTrade from './AddTrade';

export default function Trades() {
  const { dateTest, setDateTest, setShowHeader, setShowFooter, showAddTrade } = useContext(GlobalContext);
  setShowHeader(true);
  setShowFooter(true);
  // console.log('start', dateTest.startDate);
  // console.log('end', dateTest.endDate);

  const [mandou, setMandou] = useState(false);

  function handleFiltrar() {
    console.log('inicio',dayjs(dateTest.startDate.$d).format('DD/MM/YYYY'))
    console.log('fim',dayjs(dateTest.endDate.$d).format('DD/MM/YYYY'))
    // console.log(dateTest)

    if (dateTest.startDate.length === 0 || dateTest.endDate.length === 0) {
      alert('Selecione as datas');
      return;
    }
    setMandou(true);
    // função de requisição
  }

  const trades = [
    {
      buyOrSell: 'Buy',
      time: '23/01 09:32',
      stock: 'win',
      amount: 1,
      gainOrLoss: 'gain',
      entryPrice: 112150,
      exitPrice: 112300,
      points: 150,
      value: 120,
    },
    {
      buyOrSell: 'Buy',
      time: '23/01 09:32',
      stock: 'win',
      amount: 3,
      gainOrLoss: 'loss',
      entryPrice: 112350,
      exitPrice: 112150,
      points: 200,
      value: 120,
    },
    {
      buyOrSell: 'Buy',
      time: '23/01 09:32',
      stock: 'win',
      amount: 3,
      gainOrLoss: 'loss',
      entryPrice: 112350,
      exitPrice: 112150,
      points: 200,
      value: 120,
    },
  ];

  // const useStyles = makeStyles({
  //   root: {
  //     marginTop: '150px',
  //   },
  // });

  // const classes = useStyles();

  return (
    <TradesWrapper>
      {showAddTrade ? <AddTrade /> : <></>}
      <Line></Line>
      <NativePickers />

      <Button onClick={() => handleFiltrar()}>Filtrar</Button>
      {mandou ? (
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