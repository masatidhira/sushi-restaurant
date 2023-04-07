import styled from 'styled-components';
import { Image } from '../../globalStyles';

export const Container = styled.footer`
  width: 100%;
  max-width: 1080px;
  margin: auto;
  padding: 2rem 2rem 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Description = styled.div`
  margin: 1rem 0;
  max-width: 300px;
`;

export const MainMenu = styled.div`
  margin: 1rem 0;
`;

export const Information = styled(MainMenu)``;

export const Address = styled(MainMenu)``;

export const Social = styled(MainMenu)``;

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul``;

export const IconList = styled(List)`
  display: flex;
  gap: 0.8rem;
`;

export const Title = styled.p`
  font-size: var(--fs-normal);
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

export const Item = styled.li`
  list-style: none;
  font-size: var(--fs-small);
  margin-bottom: 0.6rem;
`;

export const IconItem = styled.li`
  list-style: none;
  width: 1rem;

  @media (min-width: 768px) {
    width: 1.5rem;
  }
`;

export const Text = styled.p`
  font-size: var(--fs-small);
`;

export const Img = styled(Image)``;
