import styled from "styled-components";
import salmonSushi from "../../../assets/images/recently-salmon-sushi.png"
import {Container as MainContainer, 
        TextContainer,
        Title, 
        TaglineContainer, 
        Tagline, 
        Text,
        ImageContainer,
        Image, 
        Button 
    } from "../../../globalStyles"


const Recently = ({ id }) => {
    return (
        <Container id={id}>
            <TextContainer>
                <Title>Recently Added</Title>
                <TaglineContainer>
                    <Tagline>Sushi Samurai</Tagline>
                    <Tagline>Salmon Cheese</Tagline>
                </TaglineContainer>
                <Text>Take a look at what's new. And do not depress yourself of a good meal, enjoy and be happy.</Text>
                <Button>Order now</Button>
            </TextContainer>
            <ImageContainer>
                <Image src={salmonSushi} alt="Salmon Sushi" />
            </ImageContainer>
        </Container>
    )
}

const Container = styled(MainContainer)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
`

export default Recently;