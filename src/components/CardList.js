import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  color: #666;
  font-size: 14px;
  line-height: 16px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const LiInner = props => {
  const { data } = props;

  return data.map((item, idx) => {
    const { type, text } = item;

    if (type === 'bold') {
      return <Bold key={idx}>{text}</Bold>;
    }

    return <span key={idx}>{text}</span>;
  });
};

const CardList = props => {
  const { list } = props;

  return (
    <ul>
      {list.map((item, idx) => {
        return (
          <ListItem key={idx}>
            <LiInner data={item} />
          </ListItem>
        );
      })}
    </ul>
  );
};

export default CardList;
