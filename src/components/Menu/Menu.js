import { useState } from 'react';
import styled from 'styled-components';

export default function Menu() {
  // const [menu, setMenu] = useState(false)

  const menu = false;
  return (
    <Wrapper>
      <MenuWrapper props={menu}>menu aqui</MenuWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  position: relative;
`;

const MenuWrapper = styled.div`
  width: 200px;
  min-height: 100vh;
  height: 100%;

  display: flex;
  flex-direction: column;

  /* background-color: #131820; */
  background-color: red;

  position: absolute;
  
  left: ${(props) => (props.menu === false ? '0px' : '100px')};
  top: 100px;
  transition: all 3s;

  z-index: 1;
`;
