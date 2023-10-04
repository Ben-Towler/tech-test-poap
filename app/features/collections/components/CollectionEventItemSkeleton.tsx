import { Card, VStack } from "@/app/components"
import Skeleton from "react-loading-skeleton"

export const CollectionEventItemSkeleton = () => (
  <Card>
    <VStack spacing={4}>
      <div className="bg-card bg-cover absolute top-0 right-0 left-0 h-[125px]" />
      <div className="relative h-[150px] rounded-full w-[150px] overflow-hidden mx-auto">
        <Skeleton borderRadius="50%" height="150px" />
      </div>
      <VStack spacing={1}>
        <Skeleton height={36} />
        <Skeleton />
      </VStack>
    </VStack>
  </Card>
);
