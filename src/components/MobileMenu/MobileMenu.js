import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" size="24" strokeWidth="2" aria-hidden />
        </CloseButton>
        <Fill />
        <Nav>
          <NavLink href="/sale">SALE</NavLink>
          <NavLink href="/new">NEW&nbsp;RELEASES</NavLink>
          <NavLink href="/men">MEN</NavLink>
          <NavLink href="/women">WOMEN</NavLink>
          <NavLink href="/kids">KIDS</NavLink>
          <NavLink href="/collections">COLLECTIONS</NavLink>
        </Nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: var(--color-backdrop);
`;

const ModalContent = styled(DialogContent)`
  width: 300px;
  height: 100%;
  right: 0;
  background: #ffffff;
  position: absolute;
  padding: 32px;
  padding-right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  &:first-of-type {
    color: var(--color-secondary);
  }
  font-size: ${18 / 16}rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
  font-weight: var(--weight-medium);
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const Fill = styled.div`
  flex: 1;
`;
export default MobileMenu;
