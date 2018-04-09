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

const retinaMedia = (scale, url) => {
  const dpi = 96;
  const minRes = scale - 0.2;

  if (scale > 1) {
    return css`
      @media (-webkit-min-device-pixel-ratio: ${minRes}),
        (min-resolution: ${minRes * dpi}dpi),
        (min-resolution: ${minRes}dppx) {
        background-image: url(${url});
      }
    `;
  }

  return css`
    background-image: url(${url});
  `;
};

export const retinaImage = (resolver, scale = 3, ext = 'png') => {
  const getRest = scale => (scale > 1 ? '@' + scale + 'x.' + ext : '.' + ext);
  const src = Array.from({ length: scale }).map((_, id) => resolver(getRest(id + 1)));

  return css`
    ${src.map((src, id) => retinaMedia(id + 1, src))};
  `;
};
