import styled from 'styled-components';
import { SlMenu } from 'react-icons/sl';
import GlobalContext from '../../contexts/globalContext';
import { useContext, useEffect } from 'react';
import HeaderNFooterContext from '../../contexts/headerNfooterContex';

export default function Header() {
  const { menuIsOpen, setMenuIsOpen, showHeader } = useContext(GlobalContext);

  if(!showHeader)return <></>;
  
  return (
    <>
      <HeaderWrapper>
        <SlMenu size="40px" onClick={() => setMenuIsOpen(!menuIsOpen)} style={{ cursor: 'pointer' }} />
        <PhotoWrapper />
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px 0 35px;

  background-color: #131820;
  color: #f6f6f6;

  position: fixed;
  z-index: 2;
  top: 0;
`;

const PhotoWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f6f6f6;
`;
