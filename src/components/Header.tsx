import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="1480px"
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        Dashboard
        <Text color="pink.500" as="span" ml="1">.</Text>
      </Text>


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

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Cauê Melo</Text>
            <Text color="gray.300" fontSize="small">cauesmelo@gmail.com</Text>
          </Box>

          <Avatar size="md" name="Cauê Melo" src="https://xesque.rocketseat.dev/users/avatar/profile-6dce5bcb-a27c-4fe1-8f88-3d569ee6b1b6.jpg" />
        </Flex>
      </Flex>
    </Flex>
  )
}
