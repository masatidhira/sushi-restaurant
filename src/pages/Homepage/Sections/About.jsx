import styled from "styled-components";
import {Container as MainContainer,
        TextContainer,
        Title,
        TaglineContainer,
        Tagline,
        Text,
        Image,
        ImageContainer
        } from "../../../globalStyles"
import {AboutData as data} from "../Data"

const About = ({id}) => {
    return (
        <Container id={id}>
            <ImageContainer>
                <Image src={data.image} alt="Sushi" />
            </ImageContainer>
            <TextContainer>
                <Title>{data.title}</Title>
                <TaglineContainer>
                    <Tagline>
                        {data.tagline[0]}
                        <TaglineImage src={data.taglineImage} alt="sushi" />
                    </Tagline>
                    <Tagline>{data.tagline[1]}</Tagline>
                </TaglineContainer>
                <Text>{data.text}</Text>
            </TextContainer>
        </Container>
    )
}

const Container = styled(MainContainer)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 1rem;
`

const TaglineImage = styled.img`
    width: clamp(2.4rem, 5vw, 3.6rem);
    margin-left: 0.4rem;
    object-fit: contain;
    object-position: center;
`

export default About;