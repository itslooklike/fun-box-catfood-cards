import { css } from 'styled-components';

export const colors = {
  blue: '#1698d9',
  blueLight: '#2ea8e6',
  gray: '#b3b3b3',
  yellow: '#ffff66',
  pink: '#e52e7a',
  pinkLight: '#e62e7a',
  pinkDark: '#d91667',
};

export const breaks = {
  large: 1440,
  medium: 768,
  small: 360,
};

export const min = width => (...args) => css`
  @media (min-width: ${width}px) {
    ${css(...args)};
  }
`;

export const max = width => (...args) => css`
  @media (max-width: ${width - 1}px) {
    ${css(...args)};
  }
`;

export const media = {
  large: min(breaks.large),
  maxLarge: max(breaks.large),
  medium: min(breaks.medium),
  maxMedium: max(breaks.medium),
  small: min(breaks.small),
  maxSmall: max(breaks.small),
};
