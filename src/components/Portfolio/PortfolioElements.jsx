import styled from "styled-components";

export const PortfolioContainer = styled.div`
  color: white;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010024;

  @media screen and (max-width: 768px) {
    height: 1800px;
  }
`;

export const PortfolioH1 = styled.h1`
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

export const PortfolioWrapper = styled.div`
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

export const PortfolioCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 0 50px;
  justify-content: center;
  align-items: center;
  width: 125%;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    width: 75%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    width: 65%;
  }
`;

export const PortfolioCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: #010024;
  padding: 30px;
`;
export const PortfolioCardH1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  font-style: italic;
  text-transform: uppercase;
`;

export const PortfolioCardP = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

export const PortfolioIcon = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 24px;
  margin-right: 24px;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    transform: scale(0.9);
    overflow: hidden;
    box-shadow: 0px 0px 10px #3670ff;
  }
`;
