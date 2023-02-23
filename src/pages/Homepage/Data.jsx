import sushiRolls from "../../assets/images/home-sushi-rolls.png"
import sushiTitle from "../../assets/images/home-sushi-title.png"
import aboutSushi from "../../assets/images/about-sushi.png"
import aboutSushiTitle from "../../assets/images/about-sushi-title.png"
import popularOnigiri from "../../assets/images/popular-onigiri.png"
import popularSpringRoll from "../../assets/images/popular-spring-rols.png"
import popularSushiRoll from "../../assets/images/popular-sushi-rolls.png"

export const BannerData = {
    headingText: ["Enjoy Delicious", "Sushi Food"],
    headingImage: sushiTitle,
    subheadingText: [
        "Enjoy a good dinner with the best",
        "dishes in the restaurant and improve",
        "your day."
    ],
    bannerImage: sushiRolls,
}

export const AboutData = {
    image: aboutSushi,
    title: "About Us",
    tagline: ["We Provide", "Healthy Food"],
    taglineImage: aboutSushiTitle,
    text: "Food comes to us from our relatives, whether they have wings or roots. This is how we consider food, it also have a culture, it has a history that passes from generation to generation."
}

export const PopularData = {
    title: "The Best Food",
    tagline: ["Popular Dishes"],
    popular: [
        {
            image: popularOnigiri,
            name: "Onigiri",
            description: "Japanese Dishes",
            price: "$10.99"
        },
        {
            image: popularSpringRoll,
            name: "Spring Rolls",
            description: "Japanese Dishes",
            price: "$15.99"
        },
        {
            image: popularSushiRoll,
            name: "Sushi Rolls",
            description: "Japanese Dishes",
            price: "$21.99"
        },               
    ]
}
