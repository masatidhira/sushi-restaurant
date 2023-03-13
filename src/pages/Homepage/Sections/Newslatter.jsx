import styled from 'styled-components';
import {
  TextContainer,
  Title,
  TaglineContainer,
  Tagline,
  Text,
  Image,
  ImageContainer,
} from '../../../globalStyles';
import { ArrowIcon, OrderButton } from './Banner';
import { Container as AboutContainer } from './About';
import sushi from '../../../assets/images/newsletter-sushi.png';

export default function Newslatter({ id }) {
  return (
    <Container id={id}>
      <Wrapper>
        <ImageContainer>
          <Img src={sushi} alt="Sushi" />
        </ImageContainer>
        <TextContainer>
          <Title>Newslatter</Title>
          <TaglineContainer>
            <Tagline>Subscribe For</Tagline>
            <Tagline>Offer Updates</Tagline>
          </TaglineContainer>
          <OrderButton>
            Order Here
            <ArrowIcon />
          </OrderButton>
        </TextContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: calc(var(--nav-height) * 2) 0 0;

  @media (min-width: 768px) {
    padding: calc(var(--nav-height) * 2) 2rem 0;
  }
`;

const Wrapper = styled(AboutContainer)`
  background-color: var(--clr-dark);
  color: var(--clr-light);
  padding: 1rem 2rem;

  @media (min-width: 768px) {
    padding: 1rem 0;
    border-radius: 2rem;
  }
`;

const Img = styled(Image)`
  width: 85%;
`;
