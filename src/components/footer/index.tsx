import { Flex, Image, Text, IconButton } from '@chakra-ui/react'
import { RiArrowUpSLine } from 'react-icons/ri'

import Logo from '../../assets/logoWhite.svg'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Flex
      flexDir={['column', 'column', 'row', 'row']}
      justifyContent={['center', 'center', 'space-between', 'space-between']}
      alignItems="center"
      gap={['0.95rem', '0.95rem', '2.15rem', '2.80rem']}
      h={['10rem', '10rem', '5.625rem']}
      padding={['1.25rem', '1.25rem', '3.75rem']}
      color="var(--whiteFixed)"
      maxW="100%"
      mt="2.5rem"
      bg='var(--grey0)'
      w="100%"
    >
      <Image src={Logo} alt="Motors Shop" />
      
      <Text fontWeight="400" fontSize={['1.2rem', '1.4rem']} textAlign='center'>
      © {currentYear} - Todos os direitos reservados.
      </Text>

      <IconButton
        size="1.6rem"
        aria-label="Arrow Up"
        w="40px"
        h="30px"
        bg="var(--grey1)"
        borderRadius="4px"
        icon={<RiArrowUpSLine />}
        _hover={{ bg: 'var(--grey2)' }}
      />

    </Flex>
  )
}