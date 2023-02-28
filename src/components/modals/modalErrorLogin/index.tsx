import {
    ModalBody,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Heading,
    IconButton,
    Text,
    Button
  } from '@chakra-ui/react'
  import { AiOutlineClose } from 'react-icons/ai'
  import { Flex } from '@chakra-ui/react'
  import { useUser } from '../../../contexts/userContext'
  
  interface ModalErrorLoginProps {
    isOpen: boolean
    onClose: () => void
  }
  
  export const ModalErrorLogin = ({ isOpen, onClose }: ModalErrorLoginProps) => {
    const { error } = useUser()
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} size={['md', 'lg', '2xl', '3xl']}>
        <ModalOverlay />
        <ModalContent borderRadius="8px">
          <ModalHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading
              as="h2"
              fontFamily="Lexend"
              fontWeight="500"
              fontSize="1.6rem"
              color="$grey1"
            >
              Erro!
            </Heading>
            <IconButton
              aria-label="Close Modal"
              onClick={onClose}
              icon={<AiOutlineClose />}
              bg="transparent"
              fontSize="1.5rem"
              fontWeight="bold"
              color="$grey4"
            />
          </ModalHeader>
          <ModalBody py="1.55rem">
            <Flex w="100%" flexDir="column" gap="25px">
              <Heading
                as="h2"
                fontFamily="Lexend"
                fontWeight="500"
                fontSize="1.6rem"
                color="$grey1"
              >
                Não foi possível fazer login
              </Heading>
  
              <Text
                fontFamily="Inter"
                fontWeight="400"
                fontSize="1.6rem"
                color="$grey2"
              >
                Houve um erro, {error.toLowerCase()}
              </Text>
  
              <Button
                onClick={onClose}
                _hover={{ bg: '$brand2' }}
                w="30%"
                h="2.5rem"
                p="0.875rem 1.25rem"
                bg="$brand1"
                border="1px solid $brand1"
                borderRadius="4px"
                color="$whiteFixed"
                fontFamily="Inter"
                fontWeight="500"
                minW="8.25rem"
                fontSize="1.4rem"
              >
                Tentar novamente
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
  }