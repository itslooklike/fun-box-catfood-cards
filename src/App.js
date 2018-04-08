import React from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import cardsMocks from './_mocks/cardsMocks';
import pattern from './assets/images/pattern.jpg';
import 'normalize.css';
import './App.css';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding-top: 40px;
  padding-bottom: 40px;
  background-image: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0) 50%, #000), url(${pattern});
`;

const Title = styled.h1`
  margin: 0 0 24px;
  color: #fff;
  font-size: 36px;
  text-align: center;
  text-shadow: 0 1px 1px #000;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardWrap = styled.div`
  margin: 0 40px 40px;
`;

const App = () => {
  return (
    <Content>
      <Title>Ты сегодня покормил&nbsp;кота?</Title>
      <CardContainer>
        {cardsMocks.map((item, idx) => {
          return (
            <CardWrap key={idx}>
              <Card data={item} />
            </CardWrap>
          );
        })}
      </CardContainer>
    </Content>
  );
};

export default App;
