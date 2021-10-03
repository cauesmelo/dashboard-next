import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';

export const CreateUser = () => {
  return (
    <Box px="4">
      <Header />

      <Flex w="100%" maxWidth="1480px" mx="auto" px="6px">
        <Sidebar />


        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildwidth="240px" spacing="8" w="100%">
              <Input type="text" name="name" label="Nome completo" />
              <Input type="email" name="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildwidth="240px" spacing="8" w="100%">
              <Input type="password" name="password" label="Senha" />
              <Input type="password" name="password_confirmation" label="Confirmação de senha" />
            </SimpleGrid>

          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUser;