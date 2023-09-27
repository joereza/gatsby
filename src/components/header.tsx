import React from 'react';
import styled from 'styled-components';
import Navigation from './navigation';

const HeaderStyles = styled.header`
  padding: 5rem 3rem 5rem 3rem;
  border-bottom: 1px solid var(--black-50);
  margin-bottom: 5rem;
`;

export function Header() {
  return (
    <HeaderStyles>
      <Navigation />
    </HeaderStyles>
  );
}
