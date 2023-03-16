import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export const SectionContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: calc(var(--nav-height) * 2) 2rem 0;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  font-family: var(--font-handwriting);
  font-size: var(--fs-big);

  @media (min-width: 768px) {
    text-align: unset;
    margin-bottom: 0;
  }
`;

export const TaglineContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Tagline = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: bold;
  font-size: var(--fs-bigger);

  @media (min-width: 768px) {
    justify-content: unset;
  }
`;

export const Text = styled.p`
  font-size: 0.9rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: unset;
    margin-bottom: 1rem;
  }
`;

export const Button = styled.button`
  background-color: var(--clr-button);
  color: var(--clr-light);
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: clamp(0.75rem, 2.5vw, 0.9rem);
  margin: auto;
  padding: 0.9em;
  border: none;
  border-radius: 5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export default GlobalStyle;
