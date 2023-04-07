import styled from 'styled-components';
import { Moon } from 'styled-icons/boxicons-regular';

export const Header = styled.header`
  background-color: var(--clr-light);
  width: 100%;
  height: var(--nav-height);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const NavContainer = styled.nav`
  width: 100%;
  height: 100%;
  max-width: 1080px;
  margin: auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 6px;
  object-fit: contain;
  object-position: center;
`;

export const NavItemContainer = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const NavMobileMenu = styled.button`
  background: none;
  border: none;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  margin: 0 0.7rem;
  display: flex;
`;
export const Anchor = styled.a`
  padding: 0.5rem;
  text-decoration: none;
  color: var(--clr-dark);
`;

export const ThemeToggle = styled.div``;

export const MoonIcon = styled(Moon)`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;
