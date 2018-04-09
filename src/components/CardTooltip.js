import React from 'react';
import styled from 'styled-components';
import LinkPrimary from './LinkPrimary';

const Tooltip = styled.div`
  margin-top: 15px;
  color: ${p => (p.status === 'disabled' ? p.theme.colors.yellow : '#fff')};
  font-size: 13px;
  text-align: center;
`;

const StyledLinkPrimary = LinkPrimary.withComponent('label');

const CardTooltip = props => {
  const { list, status, inputId } = props;

  return (
    <Tooltip status={status}>
      {list.map((item, idx) => {
        const { type, text } = item;

        if (type === 'link') {
          return (
            <StyledLinkPrimary key={idx} htmlFor={inputId}>
              {text}
            </StyledLinkPrimary>
          );
        }

        return <span key={idx}>{text}</span>;
      })}
    </Tooltip>
  );
};

export default CardTooltip;
