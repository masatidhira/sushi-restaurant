import styled from "styled-components"
import Banner from "./Sections/Banner"
import About from "./Sections/About"
import Popular from "./Sections/Popular"
import Recently from "./Sections/Recently"

const Homepage = () => {
    return (
        <Container>
            <Banner id="banner" />
            <About id="about" />
            <Popular id="popular" />
            <Recently id="recently" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: var(--max-width);
    margin: auto;
    padding: var(--nav-height) 2rem;
`

export default Homepage