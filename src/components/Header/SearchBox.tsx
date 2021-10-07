import { Flex, Input, Icon } from "@chakra-ui/react"
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri"

export const SearchBox = () => {

  const searchInputRef = useRef(null);

  console.log(searchInputRef.current.value);


  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth="400"
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        ref={searchInputRef}
        color="grey.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        px="4"
        mr="4"
        _placeholder={{
          color: 'gray.400'
        }}
      />
      <Icon as={RiSearchLine} fontSize="20px" />
    </Flex>
  )
}