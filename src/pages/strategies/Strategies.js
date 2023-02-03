import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import StrategyUnit from '../../components/StrategyUnit/StrategyUnit';
import GlobalContext from '../../contexts/globalContext';
import AddTrade from '../trades/AddTrade';
import AddStrategy from './AddStrategy';
import * as strategiesApi from '../../services/strategiesApi'
import useToken from "../../hooks/useToken";

export default function Strategies() {
  const { setShowHeader, setShowFooter, showAddTrade, showAddStrategy, setShowAddStrategy } = useContext(GlobalContext);
  setShowHeader(true);
  setShowFooter(true);

  const [strategies, setStrategies] = useState([])

  const bolinha = [
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

  const token = useToken()

  useEffect(() => {
    const response = strategiesApi.getStrategies(token)
      .then((res) => {
        setStrategies(res)
        console.log("🚀🚀🚀 ~ file: Strategies.js:39 ~ .then ~ res.data", res)

      })
      .catch((error) => {
        console.log(error)
      })
  })

  function handleAddStrategy() {

    setShowAddStrategy(true);
  }

  return (
    <StrategiesWrapper>
      {console.log(showAddStrategy)}
      {showAddStrategy ? <AddStrategy /> : <></>}

      <Line></Line>
      <Button onClick={() => handleAddStrategy()}>Adicionar estratégia</Button>
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

const Button = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  font-size: 16px;
  background-color: grey;

  cursor: pointer;
`;
