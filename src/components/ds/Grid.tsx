import React, { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

const mobileColMap = {
  1: '1fr',
  2: '1fr 1fr',
};

const desktopColMap = {
  2: '1fr 1fr',
  3: '1fr 1fr 1fr',
  4: '1fr 1fr 1fr 1fr',
  5: '1fr 1fr 1fr 1fr 1fr',
  6: '1fr 1fr 1fr 1fr 1fr 1fr',
};

const gapMap = {
  small: '0.75rem',
  base: '1.25rem',
  large: '2.5rem',
};

const gapMapX = {
  small: '0.75rem',
  base: '1.25rem',
  large: '2.5rem',
};

const gapMapY = {
  small: '0.75rem',
  base: '1.25rem',
  large: '2.5rem',
};

interface GridGap {
  columns: keyof typeof gapMap;
  rows: keyof typeof gapMap;
}

interface GridContainerProps {
  mobileCols?: keyof typeof mobileColMap;
  desktopCols?: keyof typeof desktopColMap;
  gap?: keyof typeof gapMap | GridGap;
}

const GridContainer = styled('div').withConfig({
  shouldForwardProp: (prop) =>
    !['gap', 'mobileCols', 'desktopCols'].includes(prop),
})<GridContainerProps>`
  display: grid;
  ${({ gap = { columns: 'small', rows: 'large' } }) =>
    typeof gap === 'string'
      ? `gap: ${gapMap[gap]}`
      : `column-gap: ${gapMapX[gap.columns]}; row-gap: ${gapMapY[gap.rows]};`};
  grid-template-columns: ${({ mobileCols }) => mobileColMap[mobileCols || 2]};

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: ${({ desktopCols }) =>
      desktopColMap[desktopCols || 3]};
  }
`;

interface GridProps {
  mobileCols?: keyof typeof mobileColMap;
  desktopCols?: keyof typeof desktopColMap;
  gap?: keyof typeof gapMap | GridGap;
}

export function Grid({
  mobileCols = 2,
  desktopCols = 3,
  gap = {
    columns: 'small',
    rows: 'large',
  },
  children,
}: PropsWithChildren<GridProps>): ReactElement {
  return (
    <GridContainer mobileCols={mobileCols} desktopCols={desktopCols} gap={gap}>
      {children}
    </GridContainer>
  );
}

export function GridItem({
  children,
}: PropsWithChildren<unknown>): ReactElement {
  return <div>{children}</div>;
}
