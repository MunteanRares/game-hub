import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card.Root overflow="hidden" borderRadius={8} width="300px">
      <Card.Header>
        <Skeleton height="200px" />
      </Card.Header>

      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
