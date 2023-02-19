import { useState } from 'react';
import styled from 'styled-components';
import { GoChevronDown } from 'react-icons/go';
import { GoChevronUp } from 'react-icons/go';

export default function Resumo() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
    console.log('click', isOpen);
  }
  return (
    <ResumoWrapper isOpen={isOpen}>
      <Title>Resumo</Title>
      <Line></Line>

      {isOpen ? (
        <Arrow>
          <GoChevronUp onClick={() => handleClick()} />
        </Arrow>
      ) : (
        <Arrow>
          <GoChevronDown onClick={() => handleClick()} />
        </Arrow>
      )}
    </ResumoWrapper>
  );
}

const ResumoWrapper = styled.div`
  width: 80%;
  height: ${(props) => (props.isOpen ? '300px' : '150px')};

  border-radius: 15px;
  margin-top: 150px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(106.85deg, #20262f -3.52%, rgba(94, 94, 94, 0.23) 106.68%);

  box-shadow: 0px -0.5px 20px grey;

  position: relative;
`;

const Title = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  color: #f6f6f6;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 2px;
  border-top: #f6f6f6 solid 1px;
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 5px;

  cursor: pointer;
`;
