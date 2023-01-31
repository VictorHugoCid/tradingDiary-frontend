import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import { AiFillHome } from 'react-icons/ai';
import { SlGraph } from 'react-icons/sl';
import { BsFillBarChartFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import GlobalContext from '../../contexts/globalContext';

export default function Footer() {
  const { showFooter } = useContext(GlobalContext);
  const navigate = useNavigate();

  if (!showFooter) return <></>;

  return (
    <Wrapper>
      <AiFillHome
        onClick={() => navigate('/')}
        size="40px"
        style={{
          cursor: 'pointer',
        }}
      />
      <SlGraph
        onClick={() => navigate('/strategies')}
        size="40px"
        style={{
          cursor: 'pointer',
        }}
      />
      <BsFillBarChartFill
        onClick={() => navigate('/trades')}
        size="40px"
        style={{
          cursor: 'pointer',
        }}
      />
      <BsFillPersonFill
        onClick={() => navigate('/perfil')}
        size="40px"
        style={{
          cursor: 'pointer',
        }}
      />
      <Circle onClick={() => navigate('/trades')}>
        <GoPlus size="50px" />
      </Circle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 100px;
  min-height: 100px;

  /* background-color: red; */
  background-color: #131820;
  color: white;
  display: flex;
  justify-content: space-around;


  padding: 30px 0 0 0;

  position: relative;
`;

const Circle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: #d5a982;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -55px;
  right: calc(50vw - 55px);

  cursor: pointer;
`;
