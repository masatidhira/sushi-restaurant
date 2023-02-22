import styled from "styled-components";
import onigiri from "../../../assets/images/popular-onigiri.png"
import springRoll from "../../../assets/images/popular-spring-rols.png"
import sushiRoll from "../../../assets/images/popular-sushi-rolls.png"
import {Container as MainContainer, Title, Tagline, Image} from "../../../globalStyles"

const Popular = ({id}) => {
    const popularData = [
        {name: "Onigiri", desc: "Japanese Dish", price: "$10.99", img: onigiri},
        {name: "Spring Roll", desc: "Japanese Dish", price: "$10.99", img: springRoll},
        {name: "Sushi Roll", desc: "Japanese Dish", price: "$10.99", img: sushiRoll},
    ]

       return (
        <Container id={id}>
            <Title>The Best Food</Title>
            <Tagline>Popular Dishes</Tagline>
            <CardContainer>
                {popularData.map((popular, i) => (
                    <MenuCard key={i}>
                        <ImageContainer>
                            <MenuImage src={popular.img} alt="Popular product" />
                        </ImageContainer>
                        <MenuName>{popular.name}</MenuName>
                        <MenuDesc>{popular.desc}</MenuDesc>
                        <MenuPrice>
                            <span>{popular.price}</span>
                            <BuyButton></BuyButton>
                        </MenuPrice>    
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
`

const BuyButton = styled.button``


export default Popular;