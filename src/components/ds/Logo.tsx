import React, { ReactElement, useId } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

const LogoStyles = styled.svg`
  color: var(--black-50);
  height: 3rem;

  @media (min-width: ${breakpoints.desktop}) {
    height: 4rem;
  }
`;

export function Logo(): ReactElement {
  const id = useId();

  return (
    <LogoStyles viewBox="0 0 211.92 34.37" role="img" aria-labelledby={id}>
      <title id={id}>Breedbook Logo</title>
      <g fill="currentColor">
        <path d="M9.5 34.37c-2.5 0-6.29-.24-9.5-.77V.96L6.91 0v11.33c1.87-.72 4.08-1.3 6.62-1.3 5.18 0 7.2 3.22 7.2 8.45v6.05c0 5.57-1.58 9.84-11.23 9.84Zm-2.59-6.1c1.01.1 1.87.1 2.83.1 3.46 0 4.08-1.58 4.08-3.79v-6.05c0-1.54-.67-2.5-2.5-2.5-1.49 0-3.12.62-4.42 1.3v10.95ZM32.69 19.63v14.26h-6.91V10.51h5.76l.48 2.26c1.44-.96 4.42-2.35 6.29-2.74l.58 6.53c-2.06.82-4.7 2.02-6.19 3.07ZM48.05 24.63v.67c0 2.69 1.06 3.41 4.22 3.41 2.16 0 5.04-.38 7.1-1.01l1.01 5.18c-2.11.77-5.52 1.49-8.78 1.49-7.58 0-10.47-3.75-10.47-9.5V19.4c0-5.04 2.26-9.36 10.03-9.36s9.46 4.61 9.46 9.7v4.9H48.04Zm6.05-6.19c0-1.63-.48-2.98-2.88-2.98s-3.17 1.34-3.17 2.98v1.01h6.05v-1.01ZM71.38 24.63v.67c0 2.69 1.06 3.41 4.22 3.41 2.16 0 5.04-.38 7.1-1.01l1.01 5.18c-2.11.77-5.52 1.49-8.78 1.49-7.58 0-10.47-3.75-10.47-9.5V19.4c0-5.04 2.26-9.36 10.03-9.36s9.46 4.61 9.46 9.7v4.9H71.37Zm6.05-6.19c0-1.63-.48-2.98-2.88-2.98s-3.17 1.34-3.17 2.98v1.01h6.05v-1.01ZM87.79 18.67c0-5.52 2.4-8.64 7.87-8.64 1.92 0 4.37.29 5.95.67V.96l6.91-.96v33.89h-5.42l-.72-1.87c-1.63 1.06-4.66 2.35-7.2 2.35-4.75 0-7.39-2.93-7.39-8.64v-7.06Zm13.83-2.06c-1.2-.29-2.98-.58-4.42-.58-1.82 0-2.5 1.1-2.5 2.64v7.06c0 1.63.67 2.64 2.5 2.64 1.58 0 3.41-.96 4.42-1.82v-9.94ZM124.27 34.37c-2.5 0-6.29-.24-9.5-.77V.96l6.91-.96v11.33c1.87-.72 4.08-1.3 6.62-1.3 5.18 0 7.2 3.22 7.2 8.45v6.05c0 5.57-1.58 9.84-11.23 9.84Zm-2.59-6.1c1.01.1 1.87.1 2.83.1 3.46 0 4.08-1.58 4.08-3.79v-6.05c0-1.54-.67-2.5-2.5-2.5-1.49 0-3.12.62-4.42 1.3v10.95ZM139.34 24.91v-5.42c0-4.8 2.26-9.46 10.56-9.46s10.56 4.66 10.56 9.46v5.42c0 4.8-2.26 9.46-10.56 9.46s-10.56-4.66-10.56-9.46Zm14.21.19v-5.81c0-2.21-1.15-3.46-3.65-3.46s-3.65 1.25-3.65 3.46v5.81c0 2.21 1.15 3.46 3.65 3.46s3.65-1.25 3.65-3.46ZM164.3 24.91v-5.42c0-4.8 2.26-9.46 10.56-9.46s10.56 4.66 10.56 9.46v5.42c0 4.8-2.26 9.46-10.56 9.46s-10.56-4.66-10.56-9.46Zm14.21.19v-5.81c0-2.21-1.15-3.46-3.65-3.46s-3.65 1.25-3.65 3.46v5.81c0 2.21 1.15 3.46 3.65 3.46s3.65-1.25 3.65-3.46ZM190.46 33.89V.96l6.91-.96v33.89h-6.91Zm13.78-23.38h7.39l-6.14 11.62 6.43 11.76h-7.39l-6.24-11.76 5.95-11.62Z" />
      </g>
    </LogoStyles>
  );
}