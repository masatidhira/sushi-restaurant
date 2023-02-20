import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`

export const Container = styled.section`
    width: 100%;
    max-width: 1080px;
    margin: auto;
    padding-top: calc(var(--nav-height)*2);
    position: relative;
`

export const Title = styled.h3`
    font-family: var(--font-handwriting);
    font-size: clamp(1.2rem, 3vw, 1.5rem);
`
export const TaglineContainer = styled.div`
    margin-bottom: 1rem;
`

export const Tagline = styled.p`
    display: flex;
    align-items: center;
    font-family: var(--font-heading);
    font-weight: bold;
    font-size: clamp(2rem, 5vw, 2.4rem);
`

export const Button = styled.button`
    background-color: #fcc14f;
    color: var(--clr-light);
    font-size: clamp(0.75rem, 2.5vw, 0.9rem);
    padding: 0.9em;
    border: none;
    border-radius: 5rem;
    cursor: pointer;
`

export const Image = styled.img`
    width: 100%;
    object-fit: contain;
    object-position: center;
`

export default GlobalStyle;