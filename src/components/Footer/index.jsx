import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <Description>DESC</Description>
      <MainMenu>
        <Title>Main Menu</Title>
        <Item>About</Item>
        <Item>Menus</Item>
        <Item>Offer</Item>
        <Item>Events</Item>
      </MainMenu>
      <Information>
        <Title>Information</Title>
        <Item>Contact</Item>
        <Item>Order & Returns</Item>
        <Item>Videos</Item>
        <Item>Reservation</Item>
      </Information>
      <Address>
        <Title>Address</Title>
        <Text>
          Ax. Haloindo 1234
          <br />
          Lima 4321, Peru
        </Text>
        <Text>9AM - 8PM</Text>
      </Address>
      <Social>FB</Social>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: calc(var(--nav-height) * 2) 2rem 2rem;
`;

const Description = styled.div``;

const MainMenu = styled.ul`
  margin: 1rem 0;
`;

const Information = styled(MainMenu)``;
const Address = styled(MainMenu)``;
const Social = styled(MainMenu)``;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

const Item = styled.li`
  list-style: none;
  margin-bottom: 0.6rem;
`;
const Text = styled.p`
  margin-bottom: 0.6rem;
`;
