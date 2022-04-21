import { Box, Flex, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { FaApple, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import Footer from "../Footer/Footer";

const SongLink = ({
  ArtBg,
  Art,
  title,
  presavePrefix,
  releaseDate,
  spotifyURL,
  appleURL,
  youtubeURL,
  instagramURL,
}) => {
  const [released, setReleased] = React.useState(false);

  React.useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const currentDate = new Date(year, month, day);
    console.log(currentDate);
    console.log(releaseDate);
    if (currentDate >= releaseDate) {
      setReleased(true);
    }
  }, [releaseDate]);

  var links = <div></div>;

  if (released) {
    links = (
      <>
        <Link href={spotifyURL} target="_blank">
          <MediaIcons>
            <FaSpotify />
          </MediaIcons>
        </Link>
        <Link href={appleURL} target="_blank">
          <MediaIcons>
            <FaApple />
          </MediaIcons>
        </Link>
        <Link href={youtubeURL} target="_blank">
          <MediaIcons>
            <FaYoutube />
          </MediaIcons>
        </Link>
        <Link href="https://www.instagram.com/geethsg7/" target="_blank">
          <MediaIcons>
            <FaInstagram />
          </MediaIcons>
        </Link>
      </>
    );
  } else {
    links = (
      <>
        <Link href={"/presave/" + presavePrefix} target="_blank">
          <VStack>
            <FaSpotify size="24px" color="white" />

            <Text
              fontSize="18px"
              fontWeight="bold"
              color="white"
              textTransform="uppercase"
              align="center"
            >
              Click Here to
              <br /> Pre Add on Spotify
            </Text>
          </VStack>
        </Link>
        <Link href="https://www.instagram.com/geethsg7/" target="_blank">
          <MediaIcons>
            <FaInstagram />
          </MediaIcons>
        </Link>
      </>
    );
  }

  return (
    <>
      <SongLinkContainer>
        <SongLinkBg>
          <SongLinkBgImg src={ArtBg} alt="SongLink" />
        </SongLinkBg>
        <SongLinkContent>
          <Flex justify="center" align="center" direction="column">
            <Box justifyContent="center">
              <VStack spacing={8}>
                <Box bg="#ffffff" rounded="lg" p={1} shadow={2} boxShadow="lg">
                  <Image
                    src={Art}
                    alt="SongLink"
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
                  {title}
                </Text>
                <VStack spacing={12}>{links}</VStack>
              </VStack>
            </Box>
          </Flex>
        </SongLinkContent>
      </SongLinkContainer>
      <Footer />
    </>
  );
};

export const SongLinkContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 30px 50px;
  height: 1200px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 30px 15px;
    height: 1200px;
  }

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

export const SongLinkBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const SongLinkBgImg = styled.img`
  background-color: black;
  filter: blur(15px);
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const SongLinkContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MediaIcons = styled.div`
  color: #fff;
  font-size: 100px;
`;
export default SongLink;
