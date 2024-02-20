// Chakra Ui
import { extendTheme } from "@chakra-ui/react";

// Variants to cards text
const customTheme = {
  components: {
    Text: {
      variants: {
        subtitle: {
          color: "gray.500",
          fontWeight: "semibold",
          fontSize: "14px",
        },
      },
    },
  },
};

const theme = extendTheme(customTheme);

export default theme;
