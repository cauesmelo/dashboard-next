import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, IconButton } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';
import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';

export const UserList = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/users').then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <Box px="4">
      <Header />

      <Flex w="100%" maxWidth="1480px" mx="auto" px="6px">
        <Sidebar />


        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>
                  Usuário
                </Th>
                {isWideVersion &&
                  <Th>
                    Data de cadastro
                  </Th>
                }

                <Th width="8">
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Cauê Melo</Text>
                    <Text fontSize="sm" color="gray.300">cauesmelo@gmail.com</Text>
                  </Box>
                </Td>


                {isWideVersion &&
                  <Td>
                    <Text>02 de outubro de 2021</Text>
                  </Td>
                }

                <Td>
                  <Box>
                    {isWideVersion ?
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        fontWeight="light"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                      :
                      <IconButton
                        aria-label="Editar"
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        fontWeight="light"
                        icon={<Icon as={RiPencilLine} fontSize="16" />} />
                    }

                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList;