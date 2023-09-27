import React from 'react';
import styled from 'styled-components';
import { Link } from './ds/Link';
import { Logo } from './ds/Logo';

const NavStyles = styled.nav`
  justify-content: center;
  ul {
    list-style-type: none;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
  }

  a {
    color: var(--black-50);
  }
`;

export default function Navigation() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link href="/">
            <Logo />
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
