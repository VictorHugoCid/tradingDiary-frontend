import styled from 'styled-components';
// import Footer from '../../components/Footer/Footer';
// import Header from '../../components/Header/Header';
import Resumo from '../../components/Resumo/Resumo';

import { Chart } from 'react-google-charts';
import { useContext } from 'react';
import GlobalContext from '../../contexts/globalContext';
import HeaderNFooterContext from "../../contexts/headerNfooterContex";

export default function Home() {
  const { header, setHeader } = useContext(HeaderNFooterContext);
  const { footer, setFooter } = useContext(HeaderNFooterContext);
  console.log('header',header)
  console.log('footer',footer)
  // setHeader(true);
  // setFooter(true);

  // const data = [
  //   ['Year', 'Sales'],
  //   ['2013', 1000],
  //   ['2014', 1170],
  //   ['2015', 660],
  //   ['2016', 1030],
  //   ['2017', 400],
  //   ['2018', 100],
  //   ['2019', -103],
  //   ['2020', -200],
  // ];

  // const options = {
  //   title: 'Company Performance',
  //   hAxis: { title: 'Year', titleTextStyle: { color: 'white' } },
  //   vAxis: { minValue: -500 },
  //   chartArea: { width: '50%', height: '70%' },
  //   colors:['green'],
  //   backgroundColor: 'black',
  //   // minColor: 'red',
  //   // midColor?: string;
  //   // maxColor?: string;
  //   // fontColor: 'white',

  // };

  return (
    <>
      <HomeWrapper>
        <Resumo />

        {/* <GraphWrapper>
          <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
            style={{ backgroundColor: 'green' }}
          />
        </GraphWrapper> */}
      </HomeWrapper>
    </>
  );
}

const GraphWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 50px;
`;

const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #131820;
  color: white;
`;
