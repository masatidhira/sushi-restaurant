import styled from "styled-components"
import sushiRolls from "../../assets/images/home-sushi-rolls.png"
import sushiTitle from "../../assets/images/home-sushi-title.png"

const HeroSection = ({id}) => {
    return (
        <Container id={id}>
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
                <Img src={sushiRolls} alt="Sushi rolls" />
            </ImageContainer>
        </Container>
    )
}

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    max-width: 1080px;
    margin: auto;
    padding-top: calc(var(--nav-height)*2);
    display: flex;
    flex-direction: column;
    position: relative;

    @media (min-width: 768px) {
        padding-top: 0;
        justify-content: center;
    }
`

const HeadingContainer = styled.div`
    padding: 0 2rem;
    z-index: 2;
`

const Heading = styled.div`
    margin-bottom: 0.8rem;
`

const H1 = styled.h1`
    display: flex;
    align-items: center;
    font-size: clamp(2.2rem, 7vw, 4rem);
    letter-spacing: 1px;
`

const HeadingImage = styled.img`
    width: clamp(3.2rem, 10vw, 4rem);
    margin-right: 0.6rem;
    object-fit: contain;
    object-position: center;
`

const Subheading = styled.p`
    font-size: clamp(0.9rem, 3vw, 1rem);
    font-weight: normal;
    margin-bottom: 0.8rem;
`

const OrderButton = styled.button`
    background-color: #fcc14f;
    color: var(--clr-light);
    font-size: clamp(0.75rem, 2.5vw, 0.9rem);
    padding: 0.6rem 0.5rem;
    border: none;
    border-radius: 5rem;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 50vh;
    position: absolute;
    bottom: 0;
    right: 0;
    overflow: hidden;
    transform: translateY(-10%);
    z-index: 1;

    @media (min-width: 768px) {
        width: 60%;
        height: 100vh;
        bottom: unset;
        top: 0;
        padding-right: 2rem;
        transform: translateY(0);
    }
`

export const Img = styled.img`
    width: 120%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    
    @media (min-width: 768px) {
        width: 100%;
    }
`

export default HeroSection