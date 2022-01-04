import React from "react";

import {
  ContactContainer,
  ContactFormWrapper,
  ContactH1,
} from "./ContactElements";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactFormWrapper>
        <ContactH1>Contact</ContactH1>
        <FormControl id="name" boxShadow="lg" isRequired>
          <FormLabel>Name</FormLabel>
          <Input color="#010024" background="white" placeholder="Name" />
        </FormControl>
        <FormControl id="email" boxShadow="lg" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            color="#010024"
            background="white"
            type="email"
            placeholder="info@itsthetechie.com"
          />
        </FormControl>
        <FormControl id="message" boxShadow="lg" isRequired>
          <FormLabel>Message</FormLabel>
          <Input color="#010024" background="white" placeholder="Message" />
        </FormControl>
        <FormControl>
          <Popover>
            <PopoverTrigger>
              <Button
                bgColor="#3670ff"
                borderColor="#3670ff!important"
                color="#ffffff"
                colorScheme="blue"
                type="submit"
                variant="solid"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              >
                Submit
              </Button>
            </PopoverTrigger>
            <PopoverContent
              bgColor="#3670ff"
              borderColor="#3670ff!important"
              color="#ffffff"
            >
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Under Construction :(</PopoverHeader>
            </PopoverContent>
          </Popover>
        </FormControl>
      </ContactFormWrapper>
    </ContactContainer>
  );
};

export default Contact;
