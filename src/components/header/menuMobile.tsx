import { useEffect } from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Flex,
  useDisclosure
} from '@chakra-ui/react'

import { Menu } from './menu'
import { User } from './user'
import { NavBar } from './navBar'

import { useAuth } from '../../contexts/authContext'
import { useUser } from '../../contexts/userContext';

interface MenuMobileProps {
  isOpen: boolean
  onClose: () => void
  onEditUserOpen: () => void
  mt: string
  ml: string
}

export const MenuMobile = ({ isOpen, onClose, onEditUserOpen, ml, mt }: MenuMobileProps) => {
  const { onToggle, isOpen: isUserOpen, onClose: onUserClose } = useDisclosure()
  const { verifyAuthenticated } = useAuth()

  const { getUser } = useUser()

  useEffect(() => {
    getUser()
  }, [])

  const isAuthenticated = verifyAuthenticated()

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerContent
        display={['flex', 'flex', 'none', 'none']}
        bg="$whiteFixed"
        ml={ml}
        mt={mt}
        borderRadius="4px"
        borderTop="1px solid var(--grey4)"
        borderBottom="1px solid var(--grey4)"
      >
        <DrawerBody>
          <Flex
            textAlign="start"
            flexDirection="column"
            align="start"
            gap="2.2rem"
            padding="1rem 0.3rem"
          >
            <NavBar content="Carros" redirectTo="/" fontWeight="600" />
            <NavBar content="Motos" redirectTo="/" fontWeight="600" />
            <NavBar content="Leilão" redirectTo="/" fontWeight="600" />
          </Flex>
        </DrawerBody>
        <DrawerFooter borderTop="1px solid var(--grey4)">
          {isAuthenticated ? (
            <Flex w="100%">
              <User onToggle={onToggle} />
            </Flex>
          ) : (
            <Flex
              w="100%"
              gap="1.55rem"
              padding="1rem 0.3rem"
              flexDirection="column"
              align="start"
            >
              <NavBar
                content="Fazer login"
                redirectTo="/login"
                fontWeight="600"
              />
              <NavBar
                content="Cadastrar"
                redirectTo="/registration"
                color="var(--grey0)"
                border="1px solid var(--grey4)"
                padding="1.25rem"
                width="100%"
              />
            </Flex>
          )}

          <Menu
            onEditUserOpen={onEditUserOpen}
            display={['flex', 'flex', 'none', 'none']}
            isOpen={isUserOpen}
            onClose={onUserClose}
            ml="0"
            mt="20rem"
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}