import styled from 'styled-components';
import StrategyUnit from '../../components/StrategyUnit/StrategyUnit';

export default function Strategies() {
  const strategies = [
    {
      name: 'OCOI',
      description: 'ombro-cabeça-ombro, entrada de compra no rompimento com apoio das médias de 9 e 20',
    },
    {
      name: 'Pivot',
      description: 'Entrada de compra ou de venda após correção em 50% ou 61.8%',
    },
    {
      name: 'Pivot',
      description: 'Entrada de compra ou de venda após correção em 50% ou 61.8%',
    },
  ];
  
  return (
    <StrategiesWrapper>
      {strategies.map((value) => {
        return <StrategyUnit strategy={value} />;
      })}
      
      <Line></Line>
    </StrategiesWrapper>
  );
}

const StrategiesWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #131820;
  color: white;
`;

const Line = styled.div`
  margin-bottom: 100px;
`;
