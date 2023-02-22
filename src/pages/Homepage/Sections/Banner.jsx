import styled from "styled-components"
import {HiOutlineArrowSmRight} from "react-icons/hi"
import sushiRolls from "../../../assets/images/home-sushi-rolls.png"
import sushiTitle from "../../../assets/images/home-sushi-title.png"
import {Container as MainContainer, Button, Image} from "../../../globalStyles"

const Banner = ({id}) => {
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
                <OrderButton>Order Now <HiOutlineArrowSmRight/></OrderButton>
            </HeadingContainer>
            <ImageContainer>
                <Img src={sushiRolls} alt="Sushi rolls" />
            </ImageContainer>
        </Container>
    )
}

const Container = styled(MainContainer)`
    height: 100vh;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        padding-top: 0;
        justify-content: center;
    }
`

const HeadingContainer = styled.div`
    z-index: 2;
`

const Heading = styled.div`
    margin-bottom: 0.8rem;
`

const H1 = styled.h1`
    display: flex;
    align-items: center;
    font-family: var(--font-heading);
    font-size: clamp(2.2rem, 6vw, 4rem);
    letter-spacing: 1px;
`

const HeadingImage = styled.img`
    width: clamp(3rem, 8vw, 4rem);
    margin-right: 0.6rem;
    object-fit: contain;
    object-position: center;
`

const Subheading = styled.p`
    font-size: clamp(0.9rem, 3vw, 1rem);
    font-weight: normal;
    margin-bottom: 0.8rem;
`

const OrderButton = styled(Button)``

const ImageContainer = styled.div`
    width: 100%;
    height: 50vh;
    position: absolute;
    bottom: 0;
    right: -2rem;
    overflow: hidden;
    transform: translateY(-10%);
    z-index: 1;

    @media (min-width: 768px) {
        width: 60%;
        height: 100vh;
        bottom: unset;
        top: 0;
        right: 0;
        transform: translateY(0);
    }
`

const Img = styled(Image)`
    width: 120%;
    height: 100%;
    
    @media (min-width: 768px) {
        width: 100%;
    }
`

export default Banner