import React from 'react';
import styled from 'styled-components';
import CardTooltip from './CardTooltip';
import catImg from '../assets/images/cat.png';

const Label = styled.label`
  display: block;
  font-family: 'TrebuchetMS';
`;

const Inner = styled.div`
  position: relative;
  height: 100%;
  padding: 17px 12px 12px 47px;

  @media (max-width: 360px) {
    padding-left: 30px;
  }
`;

const Uptitle = styled.div`
  margin: 0 0 5px;
  color: #666;
  font-size: 16px;
  transition: color 0.3s;
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
  transition: background-color 0.3s;
`;

const Amount = styled.div`
  font-size: 42px;
  line-height: 1;
`;

const Weight = styled.div`
  font-size: 21px;
  line-height: 1;
`;

// TODO: картинку можно обрезать, ибо часть изображения не используется
const Wrap = styled.div`
  position: relative;
  width: 320px;
  height: 480px;
  border: 4px solid ${p => (p.disabled ? '#f2f2f2' : '#1698d9')};
  border-radius: 10px;
  background: #fff url(${catImg}) top 230px left -70px / 368px 360px no-repeat;
  transition: border-color 0.3s;

  @media (max-width: 360px) {
    width: 290px;
  }

  :hover:not([disabled]) {
    border-color: #2ea8e6;
  }

  :hover:not([disabled]) ${AmountRound} {
    background-color: #2ea8e6;
  }
`;

const Input = styled.input`
  display: none;

  :checked + ${Wrap} {
    border-color: #d91667;
  }

  :checked + ${Wrap} ${AmountRound} {
    background-color: #d91667;
  }

  :checked:hover + ${Wrap} {
    border-color: #e52e7a;
  }

  :checked:hover + ${Wrap} ${AmountRound} {
    background-color: #e52e7a;
  }

  :checked:hover + ${Wrap} ${Uptitle} {
    color: #e52e7a;
  }

  :disabled + ${Wrap} ${AmountRound} {
    background-color: #b3b3b3;
  }
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.75;
  background-color: #fff;
`;

const Card = props => {
  const { subtitle, list, amount, tooltip, status } = props.data;
  const disabled = status === 'disabled';

  return (
    <Label>
      <Input type="checkbox" disabled={disabled} />
      <Wrap disabled={disabled}>
        {disabled && <Overlay />}
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
    </Label>
  );
};

export default Card;
