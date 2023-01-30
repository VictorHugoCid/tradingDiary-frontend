// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import GlobalContext from './contexts/globalContext';
import HeaderNFooterContext from './contexts/headerNfooterContex';
import styled from 'styled-components';

import SignIn from './pages/SignIn/SignIn.js';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Trades from './pages/trades/Trades';
import Strategies from './pages/strategies/Strategies';
import Menu from './components/Menu/Menu';
import { useState } from 'react';
import { UserProvider } from './contexts/UserContext';
import SignUp from "./pages/Signup/Signup";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [header, setHeader] = useState(true);
  const [noHeader, setNoHeader] = useState(false);
  const [footer, setFooter] = useState(true);
  const [noFooter, setNoFooter] = useState(false);
  const [date, setDate] = useState(null);
  const [dateTest, setDateTest] = useState({
    startDate: '',
    endDate: '',
  });
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <GlobalContext.Provider
          value={{
            menuIsOpen,
            setMenuIsOpen,
            date,
            setDate,
            dateTest,
            setDateTest,
            noHeader,
            noFooter,
          }}
        >
          <BrowserRouter>
            <HeaderWrapper>
              {menuIsOpen ? <Menu /> : <></>}
              <Header />
            </HeaderWrapper>

            <Routes>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>

            <HeaderNFooterContext.Provider value={{ header, footer }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trades" element={<Trades />} />
                <Route path="/strategies" element={<Strategies />} />
              </Routes>
            </HeaderNFooterContext.Provider>

            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          </BrowserRouter>
        </GlobalContext.Provider>
      </UserProvider>
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
  background: #131820;
  /* box-shadow: 0px -2px 200px #fff;
  backdrop-filter: blur(0px); */

  position: fixed;
  bottom: 0;

  z-index: 0;
`;

export default App;
