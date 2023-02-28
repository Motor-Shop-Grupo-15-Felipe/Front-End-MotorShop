import { useEffect } from 'react';
import { Avatar, Flex, Image, Text } from '@chakra-ui/react'
import { useUser } from '../../contexts/userContext';

interface UserProps {
  onToggle: () => void
}

export const User = ({ onToggle }: UserProps) => {

  const { getUser, user } = useUser()

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <Flex
        alignItems="center"
        gap="0.95rem"
        onClick={onToggle}
        cursor="pointer"
        role="button"
      >
        <Flex boxSize="2rem" bg='2.2rem' alignItems='center'>
          {user?.image ? (
            <Image
              boxSize='100%'
              borderRadius="100%"
              src={user.image}
            />
          ) : (
            <Avatar name={user?.name} boxSize='100%' />
          )}
        </Flex>
        <Text fontWeight="400" fontSize="1.6rem" color="var(--grey2)">
          {user?.name}
        </Text>
      </Flex>
    </>
  )
}