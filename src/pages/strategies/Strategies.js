import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import StrategyUnit from '../../components/StrategyUnit/StrategyUnit';
import GlobalContext from '../../contexts/globalContext';
import AddTrade from '../trades/AddTrade';
import AddStrategy from './AddStrategy';
import * as strategiesApi from '../../services/strategiesApi';
import useToken from '../../hooks/useToken';
import StrategyUnitGPT from '../../components/StrategyUnit/StrategyUnitGPT';
import MainLayout from '../../components/MainLayout.js/MainLayout';

export default function Strategies() {
  const { showAddTrade, showAddStrategy, setShowAddStrategy, render } = useContext(GlobalContext);

  const [strategies, setStrategies] = useState([]);

  const token = useToken();

  useEffect(() => {
    const response = strategiesApi
      .getStrategies(token)
      .then((res) => {
        setStrategies(res);
        // console.log('🚀🚀🚀 ~ file: Strategies.js:39 ~ .then ~ res.data', res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [render]);

  function handleAddStrategy() {
    setShowAddStrategy(true);
  }

  return (
    <MainLayout>
      <StrategiesWrapper>
        {/* {console.log(showAddStrategy)} */}
        {showAddStrategy ? <AddStrategy /> : <></>}

        <Line></Line>
        <Button onClick={() => handleAddStrategy()}>Adicionar estratégia</Button>
        {showAddTrade ? <AddTrade /> : <></>}
        {strategies.map((value, index) => {
          return <StrategyUnitGPT key={index} strategy={value} />;
        })}

        <Line></Line>
      </StrategiesWrapper>
    </MainLayout>
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
