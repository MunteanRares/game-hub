import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box display={"flex"} width="300px" boxShadow="md" borderRadius={8}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
