import styled from 'styled-components';

export default function StrategyUnit(props) {
  // console.log(props.strategy)
  return (
    <StrategyWrapper>
      <div></div>
      <Top>
        <Name>{props.strategy.name}</Name>
        {/* <DateNTime>{props.strategy.time}</DateNTime> */}
      </Top>
      <Content>
        <Title >
            <h1>Descrição</h1>

          <p>{props.strategy.description}</p>
        </Title>
        {/* <Details>

        </Details> */}
      </Content>
      {/* <Bottom>
        <GainOrLoss ></GainOrLoss>
        <Value > </Value>
      </Bottom> */}
    </StrategyWrapper>
  );
}

const StrategyWrapper = styled.div`
  width: 80%;
  /* height: ${(props) => (props.isOpen ? '300px' : '250px')}; */
  min-height: 250px;
  height: auto;

  border-radius: 15px;
  margin-top: 50px;

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
const Name = styled.div`
  width: 20px;
  height: 20px;
  font-size: 25px;

  color: #f6f6f6;
`;
// const DateNTime = styled.div`
//   height: 20px;
// `;

const Content = styled.div`
  width: 100%;
  min-height: 150px;
  padding: 10px;

  border-top: solid 1px grey;
  border-bottom: solid 1px grey;
`;
const Title = styled.div`
  margin-bottom: 20px;
  P {
    font-size: 20px;
  }

  h1 {
    font-size: 25px;
    margin-bottom: 15px;

  }
`;
// const Details = styled.div`
//   display: flex;
//   justify-content: space-evenly;
// `;

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

// const GainOrLoss = styled.div`
//   /* color: ${(props) => (props.props === 'gain' ? '#5afe33' : '#ff0000')}; */
// `;

// const Value = styled.div`
//   /* color: ${(props) => (props.props === 'gain' ? '#5afe33' : '#ff0000')}; */
// `;
