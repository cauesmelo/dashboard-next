import React from 'react';
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { RiMenuLine } from 'react-icons/ri';

export const Header = () => {

  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
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

      {!isWideVersion && (
        <IconButton icon={<Icon as={RiMenuLine} />}
          aria-label="Open navigation"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />
      {isWideVersion && (
        <SearchBox />
      )}


      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
