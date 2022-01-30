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
import Boyfriend from "../../images/boyfriend.jpg";
import Lights from "../../images/lights.jpg";

const Portfolio = () => {
  return (
    <>
      <PortfolioContainer id="portfolio">
        <PortfolioWrapper>
          <PortfolioH1>Portfolio</PortfolioH1>
          <PortfolioCards>
            <PortfolioCard href="https://bb.itsthetechie.com">
              <PortfolioIcon src={BurningBridges} type="image/jpg" />
              <PortfolioCardH1>Burning Bridges</PortfolioCardH1>
              <PortfolioCardP>
                Produced by me, Featuring ZNO & Itihas
              </PortfolioCardP>
            </PortfolioCard>
            <PortfolioCard>
              <PortfolioIcon src={Boyfriend} type="image/jpg" />
              <PortfolioCardH1>Boyfriend</PortfolioCardH1>
              <PortfolioCardP>Produced by me, Featuring Itihas</PortfolioCardP>
            </PortfolioCard>
            <PortfolioCard>
              <PortfolioIcon src={Lights} type="image/jpg" />
              <PortfolioCardH1>Lights</PortfolioCardH1>
              <PortfolioCardP>Produced by me, Featuring MRAV</PortfolioCardP>
            </PortfolioCard>
          </PortfolioCards>
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
