import styled from 'styled-components';
import Banner from './Sections/Banner';
import About from './Sections/About';
import Popular from './Sections/Popular';
import Recently from './Sections/Recently';
import Newslatter from './Sections/Newslatter';

const Homepage = () => {
  return (
    <Container>
      <Banner id="banner" />
      <About id="about" />
      <Popular id="popular" />
      <Recently id="recently" />
      <Newslatter id="newslatter" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 0;
`;

export default Homepage;
