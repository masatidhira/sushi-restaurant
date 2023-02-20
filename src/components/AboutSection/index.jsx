import styled from "styled-components";
import sushi from "../../assets/images/about-sushi.png"
import sushiTitle from "../../assets/images/about-sushi-title.png"
import {Container as MainContainer, Title, TaglineContainer, Tagline, Image} from "../../globalStyles"

const AboutSection = ({id}) => {
    return (
        <Container id={id}>
            <ImageContainer>
                <Img src={sushi} alt="Sushi" />
            </ImageContainer>
            <AboutContainer>
                <Title>About Us</Title>
                <TaglineContainer>
                    <Tagline>We Provide <TaglineImage src={sushiTitle} alt="sushi" /></Tagline>
                    <Tagline>Healthy Food</Tagline>
                </TaglineContainer>
                <Text>Food comes to us from our relatives, whether they have wings or roots. This is how we consider food, it also have a culture, it has a history that passes from generation to generation.</Text>
            </AboutContainer>
        </Container>
    )
}

const Container = styled(MainContainer)`
    padding-top: 0;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`

const ImageContainer = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 1rem 2rem 0;
`

const Img = styled(Image)``

const AboutContainer = styled.div`
    width: 100%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`

const TaglineImage = styled.img`
    width: clamp(2.4rem, 5vw, 3.6rem);
    margin-left: 0.4rem;
    object-fit: contain;
    object-position: center;
`

const Text = styled.p`
    font-size: 0.9rem;
`

export default AboutSection