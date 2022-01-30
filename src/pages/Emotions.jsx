import { Box, Flex, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import ArtBg from "../images/emotions.png";
import Art from "../images/emotions-art.png";
import { FaApple, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

const Emotions = () => {
  return (
    <>
      <EmotionsContainer>
        <EmotionsBg>
          <EmotionsBgImg src={ArtBg} alt="emotions" />
        </EmotionsBg>
        <EmotionsContent>
          <Flex justify="center" align="center" direction="column">
            <Box justifyContent="center">
              <VStack spacing={8}>
                <Box
                  bg="#072154"
                  rounded="lg"
                  p={1}
                  shadow={2}
                  
                >
                  <Image
                    src={Art}
                    alt="emotions"
                    boxSize="300px"
                    objectFit="cover"
                    borderRadius="10px"
                  />
                </Box>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="white"
                  textTransform="uppercase"
                >
                  Emotions (feat. MRAV)
                </Text>
                <VStack spacing={12}>
                  <Link
                    href="https://open.spotify.com/album/52gDV7XrJXle2XlxsXww9e"
                    target="_blank"
                  >
                    <MediaIcons>
                      <FaSpotify />
                    </MediaIcons>
                  </Link>
                  <Link
                    href="https://music.apple.com/album/1605253549"
                    target="_blank"
                  >
                    <MediaIcons>
                      <FaApple />
                    </MediaIcons>
                  </Link>
                  <Link href="https://youtu.be/njTUkpUMJ_M" target="_blank">
                    <MediaIcons>
                      <FaYoutube />
                    </MediaIcons>
                  </Link>
                  <Link
                    href="https://www.instagram.com/itsthetechie/"
                    target="_blank"
                  >
                    <MediaIcons>
                      <FaInstagram />
                    </MediaIcons>
                  </Link>
                </VStack>
              </VStack>
            </Box>
          </Flex>
        </EmotionsContent>
      </EmotionsContainer>
      <Footer />
    </>
  );
};

export const EmotionsContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 30px 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    /* background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%); */
    z-index: 2;
  }
`;

export const EmotionsBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const EmotionsBgImg = styled.img`
  background-color: black;
  filter: blur(15px);
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const EmotionsContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MediaIcons = styled.a`
  color: #fff;
  font-size: 100px;
`;
export default Emotions;
