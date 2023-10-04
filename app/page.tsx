"use client";

import { VStack, Text, H1 } from "./components";
import { useState } from "react";
import { useGetActionsScan } from "./features/collections/hooks/useGetActionsScan";
import { DisplayCollections, SearchCollectionsForm } from "./features/collections/components";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isFetching, isError, error } = useGetActionsScan({
    address: searchQuery,
    enabled: !!searchQuery.length
  });

  return (
    <>
      <div className="relative bg-hero bg-center h-[600px] flex items-center justify-center">
        <img src="/poap-badge.png" className="w-[65px] absolute top-2 left-2" />
        <VStack spacing={8} className="h-auto">
          <VStack spacing={4} className="px-4">
            <H1 align="center">Search collections</H1>
            <div className="flex mx-auto max-w-[480px]">
              <Text align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ex eget sapien scelerisque dictum. Etiam et erat tristique, maximus justo id, sodales odio.</Text>
            </div>
          </VStack>
          <div className="mx-auto">
            <SearchCollectionsForm
              setSearchQuery={setSearchQuery}
              isError={isError}
              error={error as any}
              isLoading={isFetching}
            />
          </div>
        </VStack>
      </div>
      <div className="max-w-[90%] mx-auto py-8">
        <DisplayCollections data={data} isLoading={isFetching} />
      </div>
    </>
  )
};

export default IndexPage;
