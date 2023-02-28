import { Drawer, DrawerBody, DrawerContent, Flex, Button } from '@chakra-ui/react';
import { NavBar } from './navBar'
import { useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useUser } from '../../contexts/userContext';

interface MenuProps {
  isOpen: boolean
  onClose: () => void
  onEditUserOpen: () => void
  mt: string
  ml: string
  display: string[]
}

export const Menu = ({ isOpen, onClose, ml, mt, display, onEditUserOpen }: MenuProps) => {
  const { getUser, user } = useUser()

  useEffect(() => {
    getUser()
  }, [])

  const { signOut } = useAuth()

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerContent
        bg="var(--grey9)"
        ml={ml}
        mt={mt}
        display={display}
        w={['auto', 'auto', '11.25rem', '11.25rem']}
        boxShadow="0px 4px 40px -10px rgba(0, 0, 0, 0.25)"
        borderRadius="0.25rem"
      >
        <DrawerBody>
          <Flex
            paddingY="4"
            textAlign="start"
            flexDirection="column"
            align="start"
            gap="1.55rem"
          >
            <Button
              color="var(--grey2)"
              fontSize="2xl"
              fontWeight="400"
              bg="transparent"
              _hover={{ transform: 'translateY(-7px)' }}
              transition="ease 0s, transform 0.2s"
              onClick={onEditUserOpen}
            >
              Editar Perfil
            </Button>
            {
              user?.isSeller && (<NavBar content="Meus anúncios" redirectTo="/profile" />)
            }
            <Button
              color="var(--grey2)"
              fontSize="2xl"
              fontWeight="400"
              bg="transparent"
              _hover={{ transform: 'translateY(-7px)' }}
              transition="ease 0s, transform 0.2s"
              onClick={signOut}
            >
              Sair
            </Button>

          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}