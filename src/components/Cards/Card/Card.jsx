// Styles
import { customScrollbar } from "../../../styles/styles";

import { useLocation } from "react-router-dom";

// Chakra Ui
import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

const Card = ({ title, content, image = null, link, page, filter }) => {

  if (page === "/") {
    return (
      <Flex
        direction="column"
        maxW="350px"
        h="500px"
        borderRadius="8px"
        bgColor="rgba(255, 255, 255, 0.2)"
      >
        {image && (
          <Image
            src={image.url}
            alt={image.alt}
            w="100%"
            maxW="450px"
            h="100%"
            maxH="220px"
            objectFit="cover"
            borderTopRadius="8px"
          ></Image>
        )}
        <VStack
          p="16px"
          spacing="16px"
          align="flex-start"
          maxW="450px"
          minW="200px"
          h="100%"
          w="100%"
          overflow="auto"
        >
          <Heading color="#ECE8DF" size="lg">
            {title}
          </Heading>
          <Text
            color="#ECE8DF"
            overflowY="auto"
            css={customScrollbar}
            paddingRight="5px"
          >
            {content}
          </Text>
        </VStack>
        <Flex w="100%" justifyContent="center" marginBottom="20px">
          <Link href={link} target="_blank">
            <Button bgColor="white">Ver mais</Button>
          </Link>
        </Flex>
      </Flex>
    );
  } else if (page === "/projects") {
    return (
      <Flex
        direction="column"
        datatype={filter}
        minW="270px"
        flexGrow="1"
        flexBasis="calc(17% - 10px)"
        borderRadius="8px"
        bgColor="rgba(255, 255, 255, 0.2)"
      >
        {image && (
          <Image
            src={image.url}
            alt={image.alt}
            w="100%"
            h="100%"
            maxH="150px"
            objectFit="cover"
            borderTopRadius="8px"
          ></Image>
        )}
        <VStack
          p="16px"
          spacing="16px"
          align="flex-start"
          maxW="450px"
          minW="200px"
          h="41%"
          w="100%"
          overflow="auto"
        >
          <Heading color="#ECE8DF" size="md">
            {title}
          </Heading>
          <Text
            color="#ECE8DF"
            overflowY="auto"
            css={customScrollbar}
            paddingRight="5px"
          >
            {content}
          </Text>
        </VStack>
        <Flex w="100%" justifyContent="center" marginBottom="20px">
          <Link href={link} target="_blank">
            <Button bgColor="white">Ver mais</Button>
          </Link>
        </Flex>
      </Flex>
    );
  }
};

export default Card;
