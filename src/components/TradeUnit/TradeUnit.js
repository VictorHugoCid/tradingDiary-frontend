import styled from 'styled-components';

export default function TradeUnit(props) {
  // console.log(props.trade);
  return (
    <TradeWrapper>
      <Top>
        <BuyOrSell props={props.trade.buyOrSell}>{props.trade.buyOrSell}</BuyOrSell>
        <DateNTime>{props.trade.time}</DateNTime>
      </Top>
      <Content>
        <Title props={props.trade.gainOrLoss}>
          <div>
            <p>{props.trade.stock}</p>
            <p>{props.trade.amount} {props.trade.amount >1 ? 'contratos' : 'contrato'}</p>
          </div>

          <h1>{props.trade.points} pontos</h1>
        </Title>
        <Details>
          <div>{props.trade.entryPrice}</div>
          <div>{props.trade.exitPrice}</div>
        </Details>
      </Content>
      <Bottom>
        <GainOrLoss props={props.trade.gainOrLoss}>{props.trade.gainOrLoss}</GainOrLoss>
        <Value props={props.trade.gainOrLoss}> {props.trade.value}</Value>
      </Bottom>
    </TradeWrapper>
  );
}

const TradeWrapper = styled.div`
  width: 80%;
  height: ${(props) => (props.isOpen ? '300px' : '250px')};

  border-radius: 15px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: linear-gradient(106.85deg, #20262f -3.52%, rgba(94, 94, 94, 0.23) 106.68%);

  box-shadow: 0px -0.5px 20px grey;

  position: relative;
`;

const Top = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 10px 0 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BuyOrSell = styled.div`
  width: 20px;
  height: 20px;

  color: ${(props) => (props.props === 'Buy' ? '#5afe33' : '#ff0000')};
`;
const DateNTime = styled.div`
  height: 20px;
`;

const Content = styled.div`
  width: 100%;
  height: 150px;
  padding: 10px;

  border-top: solid 1px grey;
  border-bottom: solid 1px grey;
`;
const Title = styled.div`
  margin-bottom: 20px;
  P {
    margin-bottom: 5px;
    font-size: 15px;
  }

  h1 {
    font-size: 25px;
    color: ${(props) => (props.props === 'gain' ? '#5afe33' : '#ff0000')};
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Bottom = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 10px 0 10px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GainOrLoss = styled.div`
  color: ${(props) => (props.props === 'gain' ? '#5afe33' : '#ff0000')};
`;

const Value = styled.div`
  color: ${(props) => (props.props === 'gain' ? '#5afe33' : '#ff0000')};
`;
