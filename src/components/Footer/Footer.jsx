import React from "react";
import { FaApple, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Made With:</FooterLinkTitle>
              <FooterLink to="/">React.js,</FooterLink>
              <FooterLink to="/">Styled Components,</FooterLink>
              <FooterLink to="/">Chakra UI.</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              to="/"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toggleHome}
            >
              The Techie
            </SocialLogo>

            <WebsiteRights>
              Its The Techie © {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://music.apple.com/us/artist/the-techie/1498744886"
                target="_blank"
                aria-label="Apple"
              >
                <FaApple />
              </SocialIconLink>
              <SocialIconLink
                href="https://open.spotify.com/artist/5GFuSCFq2kW71lbDcP12uk?si=vTigHKOORGiwIbh32CDBWg/"
                target="_blank"
                aria-label="Spotify"
              >
                <FaSpotify />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCfFcVPlDSHp5FNR327DMvVw"
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/thetechie.official/?hl=en"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
