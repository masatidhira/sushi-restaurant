import styled from 'styled-components';
import {
  SectionContainer,
  TextContainer,
  Title,
  TaglineContainer,
  Tagline,
  Text,
  Image,
  ImageContainer,
} from '../../../globalStyles';
import aboutSushi from '../../../assets/images/about-sushi.png';
import aboutSushiTitle from '../../../assets/images/about-sushi-title.png';

export default function About({ id }) {
  return (
    <Container id={id}>
      <ImageContainer>
        <Image src={aboutSushi} alt="Sushi" />
      </ImageContainer>
      <TextContainer>
        <Title>About Us</Title>
        <TaglineContainer>
          <Tagline>
            We Provide
            <TaglineImage src={aboutSushiTitle} alt="sushi" />
          </Tagline>
          <Tagline>Healthy Food</Tagline>
        </TaglineContainer>
        <Text>
          Food comes to us from our relatives, whether they have wings or roots.
          This is how we consider food, it also have a culture, it has a history
          that passes from generation to generation.
        </Text>
      </TextContainer>
    </Container>
  );
}

export const Container = styled(SectionContainer)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 1rem;
`;

const TaglineImage = styled.img`
  width: clamp(2.4rem, 5vw, 3.6rem);
  margin-left: 0.4rem;
  object-fit: contain;
  object-position: center;
`;
