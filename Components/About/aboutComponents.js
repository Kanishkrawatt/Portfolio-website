import styled from "styled-components";
import { flexCenter } from "../../styles/flexCenter";
import Image from "next/image";

export const AboutPageContainer = styled(flexCenter)`
  height: 100vh;
  width: 100vw;
  background-color: #c1d5a4;
  background-image: url("/PageImg/AboutPage.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 992px) {
    height: 150vh;
    padding: 8vh 0;
    padding-bottom: 50vh;
  }
`;
export const AboutMe = styled.h1`
  font-family: "Rum Raisin", sans-serif;
  letter-spacing: 0.125rem;
  font-size: 3rem;
  transition: 1s all ease;
  &::selection {
    background-color: transparent;
  }
`;
export const AboutPara = styled.div`
  padding-top: 2rem;
  transition: 0.75s all ease;
  width: 40%;
  &::selection {
    background-color: transparent;
  }
  @media (max-width: 480px) {
    padding-top: 0rem;
    margin-left: 2rem;
    width: 75%;
  }
`;
export const AboutImg = styled.div`
  height: 100%;
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
  background-color: #d9f8c4;
  border-radius: 10%;
  transition: 1s all ease;
  border: 1rem solid #d9f8c4;

  @media (max-width: 480px) {
    height: 10rem;
    width: 10rem;
  }
  @media (max-width: 992px) {
    height: 15rem;
    width: 15rem;
  }
  img {
    object-fit: cover;
    object-position:top;
  }
`;
export const AboutContent = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 5rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
