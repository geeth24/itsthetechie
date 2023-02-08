import styled from "styled-components";

export const ServicesContainer = styled.div`
  color: white;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010024;
  background-image: linear-gradient(#1f3787, #010024);
`;

export const ServicesH1 = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: bold;
  margin-right: 24px;
  margin-left: 24px;
  margin-top: 24px;
  margin-bottom: 48px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const ServicesCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 0 50px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: #010024;
  padding: 30px;
`;
export const ServicesCardH1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;
export const ServicesIcon = styled.a`
  border-radius: 50%;
  margin-bottom: 16px;
  font-size: 48px;
  width: 7rem;
  height: 7rem;
  background-color: #010024;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #3670FF;
  border: 2px solid #3670FF;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px #3670FF;
`;
