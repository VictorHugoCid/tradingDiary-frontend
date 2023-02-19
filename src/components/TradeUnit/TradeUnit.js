import dayjs from 'dayjs';
import styled from 'styled-components';

export default function TradeUnit(props) {
  // const trade = {
  //   amount: 2,
  //   buyOrSell: "sell",
  //   createdAt: "2023-02-02T19:16:13.010Z",
  //   day: "2023-01-03T00:00:00.000Z",
  //   entryPrice: 5409,
  //   entryTime: "09:22",
  //   exitPrice: 5395,
  //   exitTime: "09:29",
  //   id: 13,
  //   isGain: true,
  //   points: 14,
  //   stock: "wdo",
  //   strategyId: 1,
  //   updatedAt: "2023-02-02T19:16:13.010Z",
  //   userId: 1,
  //   value: 280,
  // }
  console.log(props.trade);
  return (
    <TradeWrapper>
      <Top>
        <BuyOrSell buyOrSell={props.trade.buyOrSell}>{props.trade.buyOrSell}</BuyOrSell>
        <DateNTime>{dayjs(props.trade.day).format('DD/MM/YYYY')}</DateNTime>
      </Top>
      <Content>
        <Title isGain={props.trade.isGain}>
          <div>
            <p>{props.trade.stock}</p>
            <p>
              {props.trade.amount} {props.trade.amount > 1 ? 'contratos' : 'contrato'}
            </p>
          </div>

          <h1>{props.trade.points} pontos</h1>
        </Title>
        <Details>
          <div>
            <p>{props.trade.entryPrice}</p>
            <p>{props.trade.entryTime}</p>
          </div>
          <div>
            <p>{props.trade.exitPrice}</p>
            <p>{props.trade.exitTime}</p>
          </div>
        </Details>
      </Content>
      <Bottom>
        <GainOrLoss isGain={props.trade.isGain}>{props.trade.gainOrLoss}</GainOrLoss>
        <Value isGain={props.trade.isGain}> {props.trade.value}</Value>
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

  color: ${(props) => (props.buyOrSell.toLowerCase() === 'buy' ? '#5afe33' : '#ff0000')};
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
    color: ${(props) => (props.isGain ? '#5afe33' : '#ff0000')};
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-evenly;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p{
    margin-bottom: 5px;
  }
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
  color: ${(props) => (props.isGain ? '#5afe33' : '#ff0000')};
`;

const Value = styled.div`
  color: ${(props) => (props.isGain ? '#5afe33' : '#ff0000')};
`;
