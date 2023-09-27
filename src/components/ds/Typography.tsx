import React, { ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { fontSizes } from '../../constants/type';
import { breakpoints } from '../../constants/breakpoints';

export type BodySizeValue = 'small' | 'base' | 'large';
type HeadingSizeValue =
  | 'smaller'
  | 'small'
  | 'base'
  | 'large'
  | 'larger'
  | 'largest';
type AllSizeValues = BodySizeValue | HeadingSizeValue;

type SizeMapProps = {
  body: {
    mobile: Record<BodySizeValue, string>;
    desktop: Record<BodySizeValue, string>;
  };
  heading: {
    mobile: Record<HeadingSizeValue, string>;
    desktop: Record<HeadingSizeValue, string>;
  };
};

const sizeMap: SizeMapProps = {
  body: {
    mobile: {
      small: `${fontSizes.sm}`,
      base: `${fontSizes.base}`,
      large: `${fontSizes.lg}`,
    },
    desktop: {
      small: `${fontSizes.sm}`,
      base: `${fontSizes.base}`,
      large: `${fontSizes.xl}`,
    },
  },
  heading: {
    mobile: {
      smaller: `${fontSizes.sm}`,
      small: `${fontSizes.base}`,
      base: `${fontSizes.xl}`,
      large: `${fontSizes['2xl']}`,
      larger: `${fontSizes['3xl']}`,
      largest: `${fontSizes['4xl']}`,
    },
    desktop: {
      smaller: `${fontSizes.xl}`,
      small: `${fontSizes['2xl']}`,
      base: `${fontSizes['3xl']}`,
      large: `${fontSizes['4xl']}`,
      larger: `${fontSizes['5xl']}`,
      largest: `${fontSizes['6xl']}`,
    },
  },
};

const weightMap: Record<string, string> = {
  regular: '400',
  bold: '700',
};

const transformMap: Record<string, string> = {
  normal: 'none',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
};

const decorationMap: Record<string, string> = {
  none: 'none',
  underline: 'underline',
  'line-through': 'line-through',
};

const alignMap: Record<string, string> = {
  start: 'left',
  center: 'center',
  end: 'right',
};

const fontMap: Record<string, string> = {
  body: 'var(--sans-serif-font-family)',
  heading: 'var(--serif-font-family)',
};

const colorMap: Record<string, string> = {
  primary: 'var(--brown-600)',
  secondary: 'var(--white-50)',
};

interface TypographyBaseProps {
  readonly element?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'dd'
    | 'dt'
    | 'div'
    | 'span'
    | 'strong'
    | 'em';
  readonly size?: AllSizeValues;
  readonly hierarchy?: 'body' | 'heading';
  readonly weight?: keyof typeof weightMap;
  readonly transform?: keyof typeof transformMap;
  readonly decoration?: keyof typeof decorationMap;
  readonly align?: keyof typeof alignMap;
  readonly font?: keyof typeof fontMap;
  readonly color?: keyof typeof colorMap;
  readonly children: ReactNode;
}

export interface TypographyBodyProps extends TypographyBaseProps {
  readonly hierarchy: 'body';
  readonly size?: BodySizeValue;
}

type TypographyProps = TypographyBaseProps;

const TypographyElement = styled('p').withConfig({
  shouldForwardProp: (prop) =>
    ![
      'hierarchy',
      'weight',
      'transform',
      'decoration',
      'font',
      'align',
      'color',
    ].includes(prop),
})<TypographyProps>`
  font-weight: ${({ weight = 'regular' }) => weightMap[weight]};
  text-transform: ${({ transform = 'normal' }) => transformMap[transform]};
  text-decoration: ${({ decoration = 'none' }) => decorationMap[decoration]};
  text-align: ${({ align = 'start' }) => alignMap[align]};
  color: ${({ color }) => (color ? colorMap[color] : 'inherit')};
  ${({ hierarchy = 'body', size = 'base' }) => css`
    font-size: ${(sizeMap[hierarchy].mobile as Record<AllSizeValues, string>)[
      size
    ]};

    @media (min-width: ${breakpoints.desktop}) {
      font-size: ${(
        sizeMap[hierarchy].desktop as Record<AllSizeValues, string>
      )[size]};
    }
  `};
  ${({ font }) =>
    font &&
    css`
      font-family: ${fontMap[font]};
    `}
`;

export function Typography({
  element: Tag = 'p',
  size = 'base',
  hierarchy = 'body',
  weight = 'regular',
  transform = 'normal',
  decoration = 'none',
  align = 'start',
  font = 'body',
  color = 'primary',
  children,
}: TypographyProps): ReactElement {
  return (
    <TypographyElement
      as={Tag}
      hierarchy={hierarchy}
      size={size}
      weight={weight}
      transform={transform}
      decoration={decoration}
      align={align}
      font={font}
      color={color}
    >
      {children}
    </TypographyElement>
  );
}
