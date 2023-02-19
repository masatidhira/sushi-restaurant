import styled from "styled-components"
import logo from "../../assets/images/logo.png"

const Navigation = () => {
    return (
        <Header>
            <NavContainer>
                <Logo>
                    <LogoImage src={logo} alt="Logo" />
                    <span>Sushi</span>
                </Logo>
                <NavItemContainer>
                    <NavItem>
                        <A href="#home">Home</A>
                    </NavItem>
                    <NavItem>
                        <A href="#about">About Us</A>
                    </NavItem>
                    <NavItem>
                        <A href="#popular">Popular</A>
                    </NavItem>
                    <NavItem>
                        <A href="#recently">Recently</A>
                    </NavItem>
                    <NavItem>
                        <A href="#">Moon</A>
                    </NavItem>
                </NavItemContainer>
                <NavMobileMenu>
                    <span>M E</span>
                    <span>N U</span>
                </NavMobileMenu>
            </NavContainer>
        </Header>
    )
}

const Header = styled.header`
    background-color: var(--clr-light);
    width: 100%;
    height: var(--nav-height);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`

const NavContainer = styled.nav`
    width: 100%;
    height: 100%;
    max-width: 1080px;
    margin: auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
`

const LogoImage = styled.img`
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 6px;
    object-fit: contain;
    object-position: center;
`

const NavItemContainer = styled.ul`
    display: none;

    @media (min-width: 768px) {
        display: flex;
    }
`

const NavMobileMenu = styled.button`
    background: none;
    border: none;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        display: none;
    }
`

const NavItem = styled.li`
    list-style: none;
    margin: 0 0.8rem;
    padding: 0.5rem;
`
const A = styled.a`
    text-decoration: none;
    color: var(--clr-dark);
`


export default Navigation