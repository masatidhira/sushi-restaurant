import styled from 'styled-components';
import {
  FacebookCircle,
  Instagram,
  Twitter,
} from 'styled-icons/boxicons-logos';
import { Image } from '../../globalStyles';
import card1 from '../../assets/images/footer-card-1.png';
import card2 from '../../assets/images/footer-card-2.png';
import card3 from '../../assets/images/footer-card-3.png';
import card4 from '../../assets/images/footer-card-4.png';

export default function Footer() {
  return (
    <Container>
      <Description>
        <Title>Enjoy Delicious Sushi Food</Title>
        <Text>
          Enjoy a good dinner with the best dishes in the restaurant and improve
          your day.
        </Text>
      </Description>
      <MainMenu>
        <Title>Main Menu</Title>
        <List>
          <Item>About</Item>
          <Item>Menus</Item>
          <Item>Offer</Item>
          <Item>Events</Item>
        </List>
      </MainMenu>
      <Information>
        <Title>Information</Title>
        <List>
          <Item>Contact</Item>
          <Item>Order & Returns</Item>
          <Item>Videos</Item>
          <Item>Reservation</Item>
        </List>
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
      <Social>
        <Title>Social Media</Title>
        <IconList>
          <IconItem>
            <FacebookCircle />
          </IconItem>
          <IconItem>
            <Instagram />
          </IconItem>
          <IconItem>
            <Twitter />
          </IconItem>
        </IconList>
      </Social>
      <Copyright>
        <Text>&#169; 2023 Sushi inc.</Text>
        <IconList>
          <IconItem>
            <Img src={card1} alt="card" />
          </IconItem>
          <IconItem>
            <Img src={card2} alt="card" />
          </IconItem>
          <IconItem>
            <Img src={card3} alt="card" />
          </IconItem>
          <IconItem>
            <Img src={card4} alt="card" />
          </IconItem>
        </IconList>
      </Copyright>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 1rem;
`;

const Description = styled.div`
  margin: 1rem 0;
`;

const MainMenu = styled(Description)``;

const Information = styled(Description)``;

const Address = styled(Description)``;

const Social = styled(Description)``;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.ul``;

const IconList = styled(List)`
  display: flex;
  gap: 0.8rem;
`;

const Title = styled.p`
  font-size: var(--fs-normal);
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

const Item = styled.li`
  list-style: none;
  font-size: var(--fs-small);
  margin-bottom: 0.6rem;
`;

const IconItem = styled.li`
  list-style: none;
  width: 1rem;
`;

const Text = styled.p`
  font-size: var(--fs-small);
`;

const Img = styled(Image)``;
