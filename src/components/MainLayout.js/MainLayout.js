import styled from 'styled-components';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
