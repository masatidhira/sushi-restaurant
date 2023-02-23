import styled from "styled-components";
import {ShoppingBag} from "styled-icons/boxicons-regular"
import {Container as MainContainer, Title, Tagline, Image, Button} from "../../../globalStyles"
import { PopularData as data } from "../Data";

const Popular = ({id}) => {
       return (
        <Container id={id}>
            <Title>{data.title}</Title>
            <Tagline>{data.tagline[0]}</Tagline>
            <CardContainer>
                {data.popular.map((item, i) => (
                    <MenuCard key={i}>
                        <ImageContainer>
                            <MenuImage src={item.image} alt="Popular product" />
                        </ImageContainer>
                        <MenuName>{item.name}</MenuName>
                        <MenuDesc>{item.description}</MenuDesc>
                        <MenuPrice>{item.price}</MenuPrice>
                        <ShopButton>
                            <BagIcon />
                        </ShopButton>
                    </MenuCard>
                ))}
            </CardContainer>
        </Container>
    )
}

const Container = styled(MainContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardContainer = styled.div`
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const MenuCard = styled.div`
    width: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 2rem;
    padding: 0 0.5rem;
    position: relative;

    &:before {
        background-color: white;
        content: "";
        width: 100%;
        height: 80%;
        border-radius: 1rem;
        box-shadow: 0 0 15px 0 rgba(0,0,0,0.1);
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
`

const ImageContainer = styled.div`
    width: 100%;
    margin-bottom: 0.8rem;
`

const MenuImage = styled(Image)``

const MenuName = styled.p`
    font-weight: bold;
`

const MenuDesc = styled.p`
    color: gray;
    font-size: 0.7rem;
    margin-bottom: 1rem;
`

const MenuPrice = styled.p`
    margin-bottom: 1.5rem;
    position: relative;
`

const ShopButton = styled(Button)`
    width: clamp(1.7rem, 2.5vw, 2rem);
    height: clamp(1.7rem, 2.5vw, 2rem);
    justify-content: center;
    padding: 0;
    border-radius: 50%;
    position: absolute;
    bottom: 1.2rem;
    right: 1rem;
`

const BagIcon = styled(ShoppingBag)`
    width: 60%;
`


export default Popular;