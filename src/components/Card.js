import React from 'react';
import styled from 'styled-components';
import CardTooltip from './CardTooltip';
import catImg from '../assets/images/cat.png';

const Container = styled.div`
  font-family: 'TrebuchetMS';
`;

// TODO: картинку можно обрезать, ибо часть изображения не используется
const Wrap = styled.div`
  width: 320px;
  height: 480px;
  border: 4px solid #1698d9;
  border-radius: 10px;
  background: #fff url(${catImg}) top 230px left -70px / 368px 360px no-repeat;
`;

const Inner = styled.div`
  position: relative;
  height: 100%;
  padding: 17px 12px 12px 47px;
`;

const Uptitle = styled.div`
  margin: 0 0 5px;
  color: #666;
  font-size: 16px;
`;

const Title = styled.h2`
  margin: 0;
  color: #000;
  font-size: 48px;
`;

const Subtitle = styled.p`
  margin: 0 0 15px;
  font-size: 24px;
`;

const ListItem = styled.li`
  color: #666;
  font-size: 14px;
  line-height: 16px;
`;

const AmountRound = styled.div`
  position: absolute;
  z-index: 0;
  right: 16px;
  bottom: 16px;
  width: 80px;
  height: 80px;
  padding-top: 10px;
  background-color: #1698d9;
  border-radius: 50%;
  color: #fff;
  text-align: center;
`;

const Amount = styled.div`
  font-size: 42px;
  line-height: 1;
`;

const Weight = styled.div`
  font-size: 21px;
  line-height: 1;
`;

const Card = props => {
  const { subtitle, list, amount, tooltip, status } = props.data;
  return (
    <Container>
      <Wrap>
        <Inner>
          <Uptitle>Сказочное заморское яство</Uptitle>
          <Title>Нямушка</Title>
          <Subtitle>{subtitle}</Subtitle>
          <ul>
            {list.map((item, idx) => {
              return <ListItem key={idx}>{item}</ListItem>;
            })}
          </ul>
          <AmountRound>
            <Amount>{amount}</Amount>
            <Weight>кг</Weight>
          </AmountRound>
        </Inner>
      </Wrap>
      {tooltip && <CardTooltip status={status} list={tooltip} />}
    </Container>
  );
};

export default Card;
