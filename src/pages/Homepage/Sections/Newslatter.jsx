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

const Newslatter = ({id}) => {
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

export default Newsl