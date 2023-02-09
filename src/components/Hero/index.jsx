import styled from "styled-components"
import sushiRolls from "../../assets/images/home-sushi-rolls.png"
import sushiTitle from "../../assets/images/home-sushi-title.png"

const Hero = () => {
    return (
        <Container id="home">
            <HeadingContainer>
                <Heading>
                    <H1>Enjoy Delicious</H1>
                    <H1><HeadingImage src={sushiTitle} />Sushi Food</H1>
                </Heading>
                <Subheading>
                    Enjoy a good dinner with the best <br />dishes in the restaurant and improve <br />your day.
                </Subheading>
                <OrderButton>Order Now</OrderButton>
            </HeadingContainer>
            <ImageContainer>
                <Img src={sushiRolls} />
            </ImageContainer>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    height: 100vh;
    max-width: 1080px;
    margin: auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeadingContainer = styled.div`
    flex-basis: 50%;

`

const Heading = styled.div`
    margin-bottom: 0.5rem;
`

const H1 = styled.h1`
    font-size: 4rem;
    display: flex;
    align-items: center;
`

const HeadingImage = styled.img`
    width: 3.6rem;
    margin-right: 0.6rem;
    object-fit: contain;
    object-position: center;
`

const Subheading = styled.h2`
    font-size: 0.9rem;
    font-weight: normal;
    margin-bottom: 2rem;
`

const OrderButton = styled.button`
    background-color: #fcc14f;
    color: var(--clr-light);
    padding: 0.8rem;
    border: none;
    border-radius: 5rem;
`

const ImageContainer = styled.div`
    flex-basis: 50%;
    height: auto;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
`

export default Hero