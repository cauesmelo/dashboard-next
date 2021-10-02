import { Header } from "../components/Header";

import { Flex } from '@chakra-ui/react';
import { Sidebar } from "../components/Sidebar";

export const Dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6px">
        <Sidebar />
      </Flex>
    </Flex>
  )
}

export default Dashboard;