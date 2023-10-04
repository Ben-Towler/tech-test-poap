import { Card, H6, Text, VStack } from "@/app/components";
import Image from "next/image";
import { CollectionData } from "../common/types";

export const CollectionEventItem = ({ event: { name, image_url, id }, tokenId }: CollectionData) => (
  <Card>
    <VStack spacing={4}>
      <div className="bg-card bg-cover absolute top-0 right-0 left-0 h-[125px]" />
      <div className="relative h-[150px] rounded-full w-[150px] overflow-hidden mx-auto">
        <a href={`https://poap.gallery/r/event/${id}`} target="_blank">
          <Image src={`${image_url}?size=small`} fill alt={name} />
        </a>
      </div>
      <VStack spacing={1}>
        <H6 align="center">{name}</H6>
        <Text size="sm" variant="light" align="center">Token ID: {tokenId}</Text>
      </VStack>
    </VStack>
  </Card>
);