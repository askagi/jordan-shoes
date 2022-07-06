import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  padding: 5.8rem 0 10rem;
  background-color: var(--bgSite);
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
`

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 196.19%;
  color: var(--title);
`;

export const Text = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 196.19%;
  color: var(--text);
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  row-gap: 3.9rem;
  margin-top: 5.9rem;
`;
