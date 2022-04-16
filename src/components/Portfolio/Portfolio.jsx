import React from "react";
import {
  PortfolioContainer,
  PortfolioWrapper,
  PortfolioH1,
  PortfolioCards,
  PortfolioCard,
  PortfolioIcon,
  PortfolioCardH1,
  PortfolioCardP,
} from "./PortfolioElements";

import BurningBridges from "../../images/burningbridges.jpg";
import Emotions from "../../images/emotions-art.png";
import HIFY from "../../images/hify-art.JPEG";

const Portfolio = () => {
  return (
    <>
      <PortfolioContainer id="portfolio">
        <PortfolioWrapper>
          <PortfolioH1>Portfolio</PortfolioH1>
          <PortfolioCards>
            <PortfolioCard to="/hearitfromyou">
              <PortfolioIcon src={HIFY} type="image/jpg" />
              <PortfolioCardH1>Hear It From You</PortfolioCardH1>
              <PortfolioCardP>
                Produced by me, Featuring Sarfaroj
              </PortfolioCardP>
            </PortfolioCard>
            <PortfolioCard to="/emotions">
              <PortfolioIcon src={Emotions} type="image/jpg" />
              <PortfolioCardH1>Emotions</PortfolioCardH1>
              <PortfolioCardP>Produced by me, Featuring MRAV</PortfolioCardP>
            </PortfolioCard>
            <PortfolioCard to="/burningbridges">
              <PortfolioIcon src={BurningBridges} type="image/jpg" />
              <PortfolioCardH1>Burning Bridges</PortfolioCardH1>
              <PortfolioCardP>
                Produced by me, Featuring ZNO & Itihas
              </PortfolioCardP>
            </PortfolioCard>
          </PortfolioCards>
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
