import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from './header';
import { Footer } from './footer';
import '../styles/reset.css';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Typography } from '../styles/Typography';

const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ContentStyles = styled.div`
  padding: 0 3rem 3rem 3rem;
  max-width: 1440px;
  flex-direction: column;
  flex-grow: 1;
  margin: auto;
  width: 100%;
`;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutStyles>
      <Typography />
      <GlobalStyles />
      <ContainerStyles>
        <Header />
        <ContentStyles>{children}</ContentStyles>
        <Footer />
      </ContainerStyles>
    </LayoutStyles>
  );
}
