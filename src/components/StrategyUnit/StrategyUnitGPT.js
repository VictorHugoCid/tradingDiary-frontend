import React, { useContext, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
import GlobalContext from '../../contexts/globalContext';
import { strategiesApi } from '../../services/strategiesApi';
import useToken from '../../hooks/useToken';

export default function StrategyUnitGPT(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const { render, setRender } = useContext(GlobalContext);
  const token = useToken();
  const { strategy } = props;

  function handleEdit(e) {
    setForm({
      id:strategy.id,
      name: strategy.name,
      description: strategy.description,
    });

    if (!isEditing) return setIsEditing(true);

    setIsEditing(false);
  }

  async function updateStrategy(e) {
    e.preventDefault();

    // enviar edição PUT
    try {
      await strategiesApi.updateStrategy(form, token);
      setIsEditing(false);
    } catch (error) {
      console.log(error.response.data.message);
      //criar um popup(talvez toastfy) avisando o erro
    }
    setRender(!render);
  }

  async function deleteStrategy(id) {
    try {
      await strategiesApi.deleteStrategy(id);
      setIsConfirming(false);
    } catch (error) {
      console.log(error.response.data);
      //criar um popup(talvez toastfy) avisando o erro
    }

    setRender(!render);
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    return;
  }

  return (
    <StrategyWrapper>
      <Top>
        <Name>{strategy.name}</Name>
        <IconsWrapper>
          <FaEdit onClick={(e) => handleEdit(e)} />
          <FaTrashAlt onClick={() => setIsConfirming(true)} />
        </IconsWrapper>
      </Top>
      <Content>
        {isEditing ? (
          <EditWrapper onSubmit={updateStrategy}>
            <EditTitle type="text" name="name" value={form.name} onChange={(e) => handleForm(e)} required />

            <EditDescription
              rows={5}
              name="description"
              value={form.description}
              onChange={(e) => handleForm(e)}
              required
            />

            <ButtonsEditWrapper>
              <SaveButton type="submit" onClick={(e) => updateStrategy(e)}>
                Salvar
              </SaveButton>
              <CancelEditButton /* type="submit" */ onClick={() => setIsEditing(false)}>Cancelar</CancelEditButton>
            </ButtonsEditWrapper>
          </EditWrapper>
        ) : (
          <Title>
            <h1>Descrição</h1>
            <p>{strategy.description}</p>
          </Title>
        )}
      </Content>
      {isConfirming && (
        <ConfirmWrapper>
          <p>Você tem certeza que deseja excluir essa estratégia?</p>
          <ButtonsWrapper>
            <CancelButton onClick={() => setIsConfirming(false)}>Cancelar</CancelButton>
            <DeleteButton onClick={() => deleteStrategy(strategy.id)}>Excluir</DeleteButton>
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
  font-size: 25px;
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
    font-size: 20px;
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
    font-size: 20px;
    color: #fff;
    font-weight: bold;
  }

  & > p {
    font-size: 15px;
    color: #fff;
    margin-top: 20px;
  }
`;

const EditWrapper = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const EditTitle = styled.textarea`
  /* //talvez mude de volta pra input */

  /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; */

  width: 50%;
  max-width: 80%;
  height: 50px;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  color: #333;
  margin-bottom: 20px;

  position: absolute;
  top: 10px;

  /* :focus {
    border: 0.5px solid red;
    outline-offset: 1px;
  } */
`;

const EditDescription = styled.textarea`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  color: #333;
  margin-bottom: 20px;
`;

const ButtonsEditWrapper = styled.div``;

const SaveButton = styled.button`
  width: 100px;
  height: 50px;
  margin-right: 25px;
  border-radius: 10px;
  border: none;
  background-color: #28a745;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

const CancelEditButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #e9e9e9;
  color: #000;
  font-size: 20px;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

const ConfirmWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  position: absolute;
  top: 0;
  left: 0;

  p {
    font-size: 25px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-top: 10px;
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
