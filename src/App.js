// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import GlobalContext from './contexts/globalContext';
import styled from 'styled-components';

import SignIn from './pages/SignIn/index.js';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Trades from './pages/trades/Trades';
import Strategies from './pages/strategies/Strategies';
import Menu from './components/Menu/Menu';
import { useState } from 'react';

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [dateTest, setDateTest] = useState({
    startDate: '',
    endDate: ''
  });
  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={{ menuIsOpen, setMenuIsOpen, date, setDate, dateTest, setDateTest }}>
        <BrowserRouter>
          <HeaderWrapper>
            {menuIsOpen ? <Menu /> : <></>}

            <Header />
          </HeaderWrapper>

          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/" element={<Home />} />
            <Route path="/trades" element={<Trades />} />
            <Route path="/strategies" element={<Strategies />} />
          </Routes>

          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;

  background-color: #131820;

  position: fixed;
  top: 0;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  background: linear-gradient(106.85deg, rgba(32, 38, 47, 0.8) -3.52%, rgba(94, 94, 94, 0.184) 106.68%);
  box-shadow: 0px -40px 100px #171717;
  backdrop-filter: blur(50px);

  position: fixed;
  bottom: 0;

  z-index: 0;
`;

export default App;
