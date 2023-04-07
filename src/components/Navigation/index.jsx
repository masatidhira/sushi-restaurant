import logo from '../../assets/images/logo.png';
import {
  Header,
  NavContainer,
  Logo,
  LogoImage,
  NavItemContainer,
  NavMobileMenu,
  NavItem,
  Anchor,
  ThemeToggle,
  MoonIcon,
} from './NavigationElements';

export default function Navigation() {
  const handleNavClick = (event) => {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Header>
      <NavContainer>
        <Logo>
          <LogoImage src={logo} alt="Logo" />
          <span>Sushi</span>
        </Logo>
        <NavItemContainer>
          <NavItem>
            <Anchor href="#banner" onClick={(e) => handleNavClick(e)}>
              Home
            </Anchor>
          </NavItem>
          <NavItem>
            <Anchor href="#about" onClick={(e) => handleNavClick(e)}>
              About Us
            </Anchor>
          </NavItem>
          <NavItem>
            <Anchor href="#popular" onClick={(e) => handleNavClick(e)}>
              Popular
            </Anchor>
          </NavItem>
          <NavItem>
            <Anchor href="#recently" onClick={(e) => handleNavClick(e)}>
              Recently
            </Anchor>
          </NavItem>
          <NavItem>
            <ThemeToggle>
              <MoonIcon />
            </ThemeToggle>
          </NavItem>
        </NavItemContainer>
        <NavMobileMenu>
          <span>M E</span>
          <span>N U</span>
        </NavMobileMenu>
      </NavContainer>
    </Header>
  );
}
