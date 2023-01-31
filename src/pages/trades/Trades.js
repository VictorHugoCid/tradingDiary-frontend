import { useContext, useState } from 'react';
import styled from 'styled-components';
import NativePickers from '../../components/Calendar/Calendar';
import TradeUnit from '../../components/TradeUnit/TradeUnit';
import GlobalContext from '../../contexts/globalContext';
import ShowHeaderNFooter from "../../utils/showHeaderNFooter";

export default function Trades() {
  const { dateTest, setDateTest } = useContext(GlobalContext);
  // console.log('start', dateTest.startDate);
  // console.log('end', dateTest.endDate);

  const [mandou, setMandou] = useState(false)

  function handleFiltrar(){

    if(dateTest.startDate.length === 0 || dateTest.endDate.length === 0){
      alert('Selecione as datas')
      return;
    }
    setMandou(true)
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

  return (
    <TradesWrapper>
      <ShowHeaderNFooter/>
      <NativePickers />
      <Button onClick={()=>handleFiltrar()}>Filtrar</Button>
      {mandou ? (
        <>
          {trades.map((value, index) => {
            return <TradeUnit key={index}trade={value} />;
          })}
          <Line></Line>
        </>
      ) : (
        <>Você precisa selecionar as datas</>
      )}
      <LineTop></LineTop>
    </TradesWrapper>
  );
}

const TradesWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #131820;
  /* background-color: #f6f6f6; */

  color: white;
`;

const Button = styled.div` 
width: 150px;
height: 40px;
margin-bottom: 20px;
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
  margin-top: 100px;
`;
