import {
  Container,
  Row,
  Description,
  MainMenu,
  Information,
  Address,
  Social,
  Copyright,
  List,
  IconList,
  Title,
  Item,
  IconItem,
  Text,
  Img,
} from './FooterElements';
import {
  FacebookCircle,
  Instagram,
  Twitter,
} from 'styled-icons/boxicons-logos';
import card1 from '../../assets/images/footer-card-1.png';
import card2 from '../../assets/images/footer-card-2.png';
import card3 from '../../assets/images/footer-card-3.png';
import card4 from '../../assets/images/footer-card-4.png';

export default function Footer() {
  return (
    <Container>
      <Row>
        <Description>
          <Title>Enjoy Delicious Sushi Food</Title>
          <Text>
            Enjoy a good dinner with the best dishes in the restaurant and
            improve your day.
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
      </Row>
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
