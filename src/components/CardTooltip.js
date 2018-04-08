import React from 'react';
import styled from 'styled-components';

const Tooltip = styled.div`
  margin-top: 15px;
  color: ${p => (p.status === 'disabled' ? p.theme.colors.yellow : '#fff')};
  font-size: 13px;
  text-align: center;
`;

// TODO: дашед заменить на градиент, для точного совпадения с макетом
const Label = styled.label`
  color: #22a7e9;
  text-decoration: underline;
  text-decoration-style: dashed;
  cursor: pointer;
`;

const CardTooltip = props => {
  const { list, status, inputId } = props;

  return (
    <Tooltip status={status}>
      {list.map((item, idx) => {
        const { type, text } = item;

        if (type === 'link') {
          return <Label htmlFor={inputId}>{text}</Label>;
        }

        return <span>{text}</span>;
      })}
    </Tooltip>
  );
};

export default CardTooltip;
