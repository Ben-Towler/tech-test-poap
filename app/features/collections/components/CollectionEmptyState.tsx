import { H5, VStack } from "@/app/components";
import Image from "next/image";

export const CollectionEmptyState = () => (
  <VStack spacing={2}>
    <Image src="/no-results.svg" width={195} height={155} alt="No results" className="mx-auto" />
    <H5 align="center">No results</H5>
  </VStack>
);
