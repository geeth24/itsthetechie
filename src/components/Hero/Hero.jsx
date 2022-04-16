import React from "react";
// import Image from "../../images/_MG_0548.JPG";
import Video from "../../videos/Studio.mp4";
import { FaApple, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import Parallax from "react-rellax";

import {
  HeroContainer,
  HeroBg,
  HeroBgVideo,
  HeroContent,
  HeroH1,
  TextContent,
  SocialIcons,
  SocialIconLink,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBg></HeroBg>
      <HeroBgVideo src={Video} autoPlay loop muted></HeroBgVideo>

      <HeroContent>
        <Parallax speed={-3} zIndex={1}>
          <TextContent>
            <HeroH1
              as={motion.h1}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              THE TECHIE
            </HeroH1>

            <SocialIcons
              as={motion.h1}
              animate={{ y: 10, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
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
          </TextContent>
        </Parallax>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
