import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="100%">
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
