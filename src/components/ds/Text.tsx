import React, { ReactElement } from 'react';
import { Typography, TypographyBodyProps } from './Typography';

type TextProps = Pick<
  TypographyBodyProps,
  'children' | 'align' | 'size' | 'color' | 'weight'
>;

export function Text(props: TextProps): ReactElement {
  return <Typography {...props} />;
}
