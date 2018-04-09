import styled from 'styled-components';

const LinkPrimary = styled.a`
  color: ${p => p.theme.colors.blue};
  background-image: linear-gradient(to right, currentColor 3px, transparent 3px);
  background-repeat: repeat-x;
  background-size: 5px 1px;
  background-position: 0 100%;
  text-decoration: none;
  cursor: pointer;
`;

export default LinkPrimary;
