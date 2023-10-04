"use client";

import { useState } from "react";
import { HStack, VStack } from "@/app/components/stack";
import { AxiosError } from "axios";
import { Button, SearchField } from "@/app/components";

type Props = {
  setSearchQuery: (query: string) => void;
  isError?: boolean;
  error?: AxiosError<{ message: string }> | null;
  isLoading?: boolean;
}

export const SearchCollectionsForm = ({ setSearchQuery, error, isLoading }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = () => setSearchQuery(inputValue);

  const onSearchClear = () => {
    setSearchQuery("");
    setInputValue("");
  };

  return (
    <VStack spacing={1}>
      <HStack spacing={2}>
        <SearchField
          value={inputValue}
          onChange={setInputValue}
          onClear={onSearchClear}
          onSubmit={onSubmit}
          aria-label="Search"
          placeholder="Search..."
          errorMessage={error?.response?.data.message}
          autoFocus
        />
        <Button isDisabled={!inputValue || isLoading} isLoading={isLoading} onPress={onSubmit}>
          Search
        </Button>
      </HStack>
    </VStack>
  );
}