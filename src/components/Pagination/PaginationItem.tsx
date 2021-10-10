import { Stack, Button, Box } from '@chakra-ui/react';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export const PaginationItem = ({ isCurrent, number, onPageChange }: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }


  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="gray.700"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}