import React from 'react';
import styled from 'styled-components';
import { Text } from './ds/Text';

const FooterStyles = styled.footer`
  background-color: var(--black-50);
  color: var(--white-50);
  padding: 3rem;
`;

export function Footer() {
  return (
    <FooterStyles>
      <Text color="secondary" align="center">
        &copy; Breedbook
        {` ${new Date().getFullYear()}`}
      </Text>
    </FooterStyles>
  );
}
