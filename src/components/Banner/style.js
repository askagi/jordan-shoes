import styled from 'styled-components';
import BackgroundImage from '../../assets/images/wallpaper.jpeg';
import Typed from 'react-typed';

export const Background = styled.div`
  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  filter: brightness(50%);
  height: 37.8rem;
  position: relative;
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 35%;
    left: 10rem;
    right: 10rem;
    transition: all .2s;
   
   @media (max-width: 768px) {
    top: 25%;
    left: 2rem;
    right: 2rem;
   }
`;

export const Title = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #F9F9F9;
    margin-bottom: 1.9rem;
  
`;

export const Text = styled(Typed)`
    font-family: 'Montserrat' ,sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 196.19%;
    display: flex;
    align-items: center;
    color: #F9F9F9;
    max-width: 460px;
`;
