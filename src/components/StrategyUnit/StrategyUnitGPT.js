import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

export default function StrategyUnit(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  return (
    <StrategyWrapper>
      <Top>
        <Name>{props.strategy.name}</Name>
        <IconsWrapper>
          <FaEdit onClick={() => setIsEditing(true)} />
          <FaTrashAlt onClick={() => setIsConfirming(true)} />
        </IconsWrapper>
      </Top>
      <Content>
        {isEditing ? (
          <EditWrapper>
            <EditTitle>
              <input
                type="text"
                defaultValue={props.strategy.name}
              />
            </EditTitle>
            <EditDescription>
              <textarea
                rows={5}
                defaultValue={props.strategy.description}
              />
            </EditDescription>
            <SaveButton onClick={() => setIsEditing(false)}>
              Salvar
            </SaveButton>
          </EditWrapper>
        ) : (
          <Title>
            <h1>Descrição</h1>
            <p>{props.strategy.description}</p>
          </Title>
        )}
      </Content>
      {isConfirming && (
        <ConfirmWrapper>
          <p>Você tem certeza que deseja excluir essa estratégia?</p>
          <ButtonsWrapper>
            <CancelButton onClick={() => setIsConfirming(false)}>
              Cancelar
            </CancelButton>
            <DeleteButton onClick={() => setIsConfirming(false)}>
              Excluir
            </DeleteButton>
          </ButtonsWrapper>
        </ConfirmWrapper>
      )}
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
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Name = styled.h1`
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    cursor: pointer;
    margin-left: 20px;
    color: #fff;
    font-size: 1.2rem;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > h1 {
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
  }

  & > p {
    font-size: 1rem;
    color: #fff;
    margin-top: 20px;
  }
`;

const EditWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const EditTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > input {
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    color: #333;
    margin-bottom: 20px;
  }
`;

const EditDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    color: #333;
    margin-bottom: 20px;
  }
`;

const SaveButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #28a745;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;

const ConfirmWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

const CancelButton = styled.button`
  padding: 10px 15px;
  background-color: #e9e9e9;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

const DeleteButton = styled(CancelButton)`
  background-color: #f44336;
  color: #fff;
`;
