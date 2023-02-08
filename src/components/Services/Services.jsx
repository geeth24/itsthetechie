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
import { FaDrum } from "react-icons/fa";
import { GiRoundKnob, GiSettingsKnobs } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
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
              <ServicesCardH1>Beats</ServicesCardH1>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon>
                <GiRoundKnob />
              </ServicesIcon>
              <ServicesCardH1>Mixing</ServicesCardH1>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon>
                <GiSettingsKnobs />
              </ServicesIcon>
              <ServicesCardH1>Mastering</ServicesCardH1>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon>
                <MdDesignServices />
              </ServicesIcon>
              <ServicesCardH1>Design</ServicesCardH1>
            </ServicesCard>
          </ServicesCards>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
