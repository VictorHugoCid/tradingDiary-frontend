import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

export default function StrategyUnit(props) {
  return (
    <StrategyWrapper>
      <Top>
        <Name>{props.strategy.name}</Name>
        <IconsWrapper>
          <FaEdit />
          <FaTrashAlt />
        </IconsWrapper>
      </Top>
      <Content>
        <Title>
          <h1>Descrição</h1>
          <p>{props.strategy.description}</p>
        </Title>
      </Content>
    </StrategyWrapper>
  );
}

const StrategyWrapper = styled.div`
  width: 80%;
  min-height: 250px;
  height: auto;
  border-radius: 15px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(106.85deg, #20262f -3.52%, rgba(94, 94, 94, 0.23) 106.68%);
  box-shadow: 0px -0.5px 20px grey;
  position: relative;
`;

const Top = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 10px 0 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  width: 20px;
  height: 20px;
  font-size: 25px;
  color: #f6f6f6;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;

  & > * {
    color: #f6f6f6;
    font-size: 25px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  width: 100%;
  min-height: 150px;
  padding: 10px;
  border-top: solid 1px grey;
  border-bottom: solid 1px grey;
`;

const Title = styled.div`
  margin-bottom: 20px;

  p {
    font-size: 20px;
  }

  h1 {
    font-size: 25px;
    margin-bottom: 15px;
  }
`;