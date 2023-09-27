import React, { ReactElement, ReactNode } from 'react';
import { Typography } from './Typography';

const headingMap = {
  1: {
    element: 'h1',
    size: 'largest',
  },
  2: {
    element: 'h2',
    size: 'larger',
  },
  3: {
    element: 'h3',
    size: 'large',
  },
  4: {
    element: 'h4',
    size: 'base',
  },
  5: {
    element: 'h5',
    size: 'small',
  },
  6: {
    element: 'h6',
    size: 'smaller',
  },
} as const;

interface HeadingProps {
  // Heading Level
  readonly level?: 1 | 2 | 3 | 4 | 5 | 6;
  // The "visuallyAs" prop is typically left unset. However, if you provide a value for it, it will visually render the element as a different heading level.
  // This can be useful when you want to achieve a specific visual hierarchy on a single page.
  // For example, <Heading level={1} visuallyAs={2}> will render an H1 that appears as an H2.
  readonly visuallyAs?: 1 | 2 | 3 | 4 | 5 | 6;
  readonly align?: 'start' | 'center' | 'end';
  readonly children: ReactNode;
}

export function Heading({
  level = 2,
  align = 'start',
  visuallyAs,
  children,
}: HeadingProps): ReactElement {
  return (
    <Typography
      hierarchy="heading"
      weight="medium"
      font="heading"
      align={align}
      {...headingMap[level]}
      size={headingMap[visuallyAs ?? level].size}
    >
      {children}
    </Typography>
  );
}
