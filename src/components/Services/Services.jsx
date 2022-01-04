import React from "react";

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesCards,
  ServicesCard,
  ServicesIcon,
  ServicesCardH1,
} from "./ServicesElements";
import { FaDrum, FaSlidersH } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesWrapper>
          <ServicesH1>Services</ServicesH1>

          <ServicesCards>
            <ServicesCard>
              
              <ServicesIcon>
                <FaDrum />
              </ServicesIcon>
              <ServicesCardH1>Beat Making</ServicesCardH1>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon>
                <FaSlidersH />
              </ServicesIcon>
              <ServicesCardH1>Mixing & Mastering</ServicesCardH1>
            </ServicesCard>
          </ServicesCards>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
