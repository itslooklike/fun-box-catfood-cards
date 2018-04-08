import React from 'react';
import styled from 'styled-components';

const Tooltip = styled.div`
  margin-top: 15px;
  color: ${p => (p.status === 'disabled' ? '#ffff66' : '#fff')};
  font-size: 13px;
  text-align: center;
`;

const CardTooltip = props => {
  const { list, status } = props;

  return (
    <Tooltip status={status}>
      {list.map((item, idx) => {
        const { type, text, url } = item;

        if (type === 'link') {
          return <a href={url}>{text}</a>;
        }

        return <span>{text}</span>;
      })}
    </Tooltip>
  );
};

export default CardTooltip;
