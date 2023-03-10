import { Box, Button, Flex, Image, Text, Avatar } from '@chakra-ui/react';
import { isValidURL } from '../../utils/validateUrl';

import { useUser } from '../../contexts/userContext';

interface UserAreaProps {
  onOpen: () => void,
}

export const UserArea = ({ onOpen }: UserAreaProps) => {

  const { user } = useUser()


  let isValidImage = false

  if (user?.image) {
    isValidImage = isValidURL(user.image)
  }

  return (
    <Flex
      bgGradient="linear(to-b, $brand1 55%, transparent  45%)"
      justify="center"
      paddingX="16px"
    >
      <Flex
        w={['100%', '70%']}
        flexDir="column"
        bg="$grey10"
        h={['auto']}
        borderRadius="4px"
        gap="25px"
        mt="8"
        padding="35px 35px"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          boxSize="104px"
          borderRadius="50%"
        >
          {isValidImage && user.image ? (

            <Image w="100%" src={user.image} />
          ) : (
            <Avatar name={user.name} boxSize='75%' />
          )}
        </Flex>

        <Box>
          <Text
            color="$grey1"
            fontFamily="Lexend"
            fontWeight="600"
            fontSize={['1.5rem', '2rem']}
          >
            {' '}{user.name}{' '}
            <Text
              display="inline-block"
              fontWeight="500"
              fontSize={['1rem', '1.5rem']}
              color="$brand1"
              bg="$brand4"
              padding="4px 8px"
              borderRadius="4px"
            >
              Anunciante
            </Text>
          </Text>
        </Box>
        <Text color="$grey2" fontWeight="400" fontSize="1.2rem">
          {user.bio}
        </Text>

        <Button
          bg="transparent"
          border="1px solid $brand1"
          borderRadius="4px"
          padding="12px 28px"
          height="48px"
          color="$brand1"
          fontWeight="600"
          fontSize="1.6rem"
          w="10rem"
          onClick={onOpen}
        >
          Criar anuncio
        </Button>
      </Flex>
    </Flex>
  )
}