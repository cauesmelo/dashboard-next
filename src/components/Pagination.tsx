import { Stack, Button, Box } from '@chakra-ui/react';

export const Pagination = () => {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button size="sm" fontSize="xs" width="4" colorScheme="pink" disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default',
          }}
        >
          1
        </Button>

        <Button size="sm" fontSize="xs" width="4" colorScheme="gray.700" disabled
          _disabled={{
            bg: 'gray.500',
            cursor: 'default',
          }}
        >
          2
        </Button>


        <Button size="sm" fontSize="xs" width="4" colorScheme="gray.700" disabled
          _disabled={{
            bg: 'gray.500',
            cursor: 'default',
          }}
        >
          3
        </Button>

        <Button size="sm" fontSize="xs" width="4" colorScheme="gray.700" disabled
          _disabled={{
            bg: 'gray.500',
            cursor: 'default',
          }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  )
}
