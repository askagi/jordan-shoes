import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 302px;
  background: var(--bgCard);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;
  border: none;
  transition: border .3s;
`;

export const Img = styled.img`
width: 250px;
height: 150px;
:hover{
  transform: scale(1.3); 
  transition: 1s all ease-in-out;
}

`;
