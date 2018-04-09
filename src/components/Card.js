import React from 'react';
import styled from 'styled-components';
import CardTooltip from './CardTooltip';
import CardList from './CardList';
import catImg from '../assets/images/cat.png';

const Content = styled.div`
  font-family: 'TrebuchetMS';
`;

const Label = styled.label`
  display: block;
`;

const Inner = styled.div`
  position: relative;
  height: 100%;
  padding: 17px 12px 12px 47px;

  @media (max-width: 360px) {
    padding-left: 30px;
  }
`;

const Promo = styled.div`
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
  background: #f2f2f2 url(${catImg}) top 230px left -70px / 368px 360px no-repeat;
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
    border-color: ${p => p.theme.colors.pinkDark};
  }

  :checked + ${Wrap} ${AmountRound} {
    background-color: ${p => p.theme.colors.pinkDark};
  }

  :checked:hover + ${Wrap} {
    ${p => !p.hoverDisabled && `border-color: ${p.theme.colors.pink};`};
  }

  :checked:hover + ${Wrap} ${AmountRound} {
    ${p => !p.hoverDisabled && `background-color: ${p.theme.colors.pink};`};
  }

  :checked:hover + ${Wrap} ${Promo} {
    ${p => !p.hoverDisabled && `color: ${p.theme.colors.pinkLight};`};
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

class Card extends React.Component {
  state = { hoverDisabled: false };

  onChange = evt => {
    const chk = evt.target.checked;
    if (chk) this.setState({ hoverDisabled: true });
  };

  onMouseLeave = evt => {
    if (this.state.hoverDisabled) this.setState({ hoverDisabled: false });
  };

  render() {
    const { hoverDisabled } = this.state;
    const { subtitle, list, amount, tooltip, status, inputId } = this.props.data;
    const disabled = status === 'disabled';

    return (
      <Content onMouseLeave={this.onMouseLeave}>
        <Label>
          <Input
            type="checkbox"
            disabled={disabled}
            id={inputId}
            onChange={this.onChange}
            hoverDisabled={hoverDisabled}
          />
          <Wrap disabled={disabled}>
            {disabled && <Overlay />}
            <Inner>
              <Promo>Сказочное заморское яство</Promo>
              <Title>Нямушка</Title>
              <Subtitle>{subtitle}</Subtitle>
              <CardList list={list} />
              <AmountRound>
                <Amount>{amount}</Amount>
                <Weight>кг</Weight>
              </AmountRound>
            </Inner>
          </Wrap>
        </Label>
        {tooltip && <CardTooltip inputId={inputId} status={status} list={tooltip} />}
      </Content>
    );
  }
}

export default Card;
