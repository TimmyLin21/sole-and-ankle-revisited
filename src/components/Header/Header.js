import React from "react";
import styled from "styled-components/macro";

import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileActions>
          <UnstyledButton>
            <Icon id="shopping-bag" />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
          </UnstyledButton>
        </MobileActions>
        <Fill />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;
  overflow-y: hidden;
  @media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
    border-top: 4px solid var(--color-gray-900);
    justify-content: space-between;
    align-items: center;
  }
  @media ${(p) => p.theme.QUERIES.phoneAndSmaller} {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9vw - 4.25rem, 3.5rem);
  margin: 0px 48px;
  @media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  @media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const Fill = styled.div`
  flex: 1;
  @media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 40px;
  }

  @media ${(p) => p.theme.QUERIES.phoneAndSmaller} {
    gap: 28px;
  }
`;

export default Header;
