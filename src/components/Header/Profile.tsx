import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Cauê Melo</Text>
          <Text color="gray.300" fontSize="small">cauesmelo@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Cauê Melo" src="https://xesque.rocketseat.dev/users/avatar/profile-6dce5bcb-a27c-4fe1-8f88-3d569ee6b1b6.jpg" />
    </Flex>
  )
}