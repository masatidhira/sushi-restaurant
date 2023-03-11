import styled from 'styled-components';
import {
  Container as MainContainer,
  TextContainer,
  Title,
  TaglineContainer,
  Tagline,
  Text,
  Image,
  ImageContainer,
} from '../../../globalStyles';
import sushi from '../../../assets/images/newsletter-sushi.png';

export default function Newslatter({ id }) {
  return (
    <Container id={id}>
      <ImageContainer>
        <Image src={sushi} alt="Sushi" />
      </ImageContainer>
      <TextContainer>
        <Title>Newslatter</Title>
        <TaglineContainer>
          <Tagline>Subscribe For</Tagline>
          <Tagline>Offer Updates</Tagline>
        </TaglineContainer>
      </TextContainer>
    </Container>
  );
}

const Container = styled(MainContainer)`
  background-color: var(--clr-dark);
  color: var(--clr-light);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 1rem;
  border-radius: 3rem;
`;
