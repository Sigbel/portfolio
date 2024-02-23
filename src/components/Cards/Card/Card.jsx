// Styles
import { customScrollbar } from "../../../styles/styles";

// Chakra Ui
import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";


const Card = ({ title, content, image = null }) => {
  return (
    <Flex
      direction="column"
      maxW="350px"
      h="500px"
      borderRadius="8px"
      bgColor="#ECE8DF"
      
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
        <Heading color="black" size="lg">{title}</Heading>
        <Text color="black" overflowY="auto" css={customScrollbar}>
          {content}
        </Text>
      </VStack>
    </Flex>
  );
};

export default Card;
