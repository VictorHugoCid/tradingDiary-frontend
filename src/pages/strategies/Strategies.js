import { useContext } from 'react';
import styled from 'styled-components';
import StrategyUnit from '../../components/StrategyUnit/StrategyUnit';
import GlobalContext from '../../contexts/globalContext';
import AddTrade from '../trades/AddTrade';

export default function Strategies() {
  const { setShowHeader, setShowFooter, showAddTrade } = useContext(GlobalContext);
  setShowHeader(true);
  setShowFooter(true);

  const strategies = [
    // {
    //   name: 'OCOI',
    //   description: 'ombro-cabeça-ombro, entrada de compra no rompimento com apoio das médias de 9 e 20',
    // },
    // {
    //   name: 'Pivot',
    //   description: 'Entrada de compra ou de venda após correção em 50% ou 61.8%',
    // },
    // {
    //   name: 'Pivot',
    //   description: 'Entrada de compra ou de venda após correção em 50% ou 61.8%',
    // },
  ];

  return (
    <StrategiesWrapper>
      <Line></Line>
      {showAddTrade ? <AddTrade /> : <></>}
      {strategies.map((value, index) => {
        return <StrategyUnit key={index} strategy={value} />;
      })}

      <Line></Line>
    </StrategiesWrapper>
  );
}

const StrategiesWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #131820;
  color: white;
`;

const Line = styled.div`
  margin-bottom: 120px;
`;
