import styled from 'styled-components';
import {
  TextContainer,
  Title,
  TaglineContainer,
  Tagline,
  Text,
  ImageContainer,
  Image,
} from '../../../globalStyles';
import { Container as AboutContainer } from './About';
import { ArrowIcon, OrderButton } from './Banner';
import salmonSushi from '../../../assets/images/recently-salmon-sushi.png';

export default function Recently({ id }) {
  return (
    <Container id={id}>
      <TextContainer>
        <Title>Recently Added</Title>
        <TaglineContainer>
          <Tagline>Sushi Samurai</Tagline>
          <Tagline>Salmon Cheese</Tagline>
        </TaglineContainer>
        <Text>
          Take a look at what's new. And do not depress yourself of a good meal,
          enjoy and be happy.
        </Text>
        <OrderButton>
          Order Here
          <ArrowIcon />
        </OrderButton>
      </TextContainer>
      <ImageContainer>
        <Image src={salmonSushi} alt="Salmon Sushi" />
      </ImageContainer>
    </Container>
  );
}

const Container = styled(AboutContainer)`
  flex-wrap: wrap;
`;
