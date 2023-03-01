import { Flex, IconButton, HStack, Image, useDisclosure } from "@chakra-ui/react"

import { User } from "./user"
import { Menu } from "./menu"
import { NavBar } from "./navBar"
import { MenuMobile } from "./menuMobile"

import Logo from "../../assets/logoMain.svg"

import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { useNavigate } from "react-router"

import { useAuth } from "../../contexts/authContext"
import { useCallback } from 'react';


export interface HeaderProps {
  onEditUserOpen: () => void
}

export const Header = ({ onEditUserOpen }: HeaderProps) => {
  const { verifyAuthenticated } = useAuth()

  const isAuthenticated = verifyAuthenticated()

  const {
    isOpen: isMenuMobileOpen,
    onClose: onMenuMobileClose,
    onToggle: onMenuMobileToggle
  } = useDisclosure()

  const {
    isOpen: isMenuOpen,
    onClose: onMenuClose,
    onToggle: onMenuToggle
  } = useDisclosure()


  const navigation = useNavigate();

  const handleSubmit = useCallback(() => navigation(`/`), [])

  return (
    <Flex as="nav" width="100%">
      <Flex
        h="6.25rem"
        paddingX={["1.55rem", "2.82rem"]}
        w="100%"
        maxW="100%"
        bg="var(--grey10)"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Image
          alignSelf="center"
          w="9.375rem"
          h="1.875rem"
          src={Logo}
          alt="Motors Shop"
          onClick={handleSubmit}
          cursor="pointer"
        />
        <Flex display={["none", "none", "flex", "flex"]}>
          <HStack
            spacing="5"
            w="auto"
            borderRight="2px solid var(--grey6)"
            paddingRight="5"
          >
            <NavBar content="Carros" to="carros" redirectTo={"/"} />
            <NavBar content="Motos" to="motos" redirectTo={"/"} />
            <NavBar content="Leilão" to="leilao" redirectTo={"/"} />
          </HStack>

          <HStack paddingLeft="5" spacing="5">
            {isAuthenticated ? (
              <User onToggle={onMenuToggle} />
            ) : (
              <>
                <NavBar content="Fazer login" redirectTo="/login" />
                <NavBar
                  content="Cadastrar"
                  redirectTo="/registration"
                  color="var(--grey0)"
                  border="1px solid var(--grey4)"
                  padding="1.25rem"
                />
              </>
            )}
          </HStack>
        </Flex>
        <IconButton
          aria-label="Open menu"
          alignSelf="center"
          fontSize="4xl"
          bg="transparent"
          mr="2"
          icon={isMenuMobileOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          display={["flex", "flex", "none", "none"]}
          onClick={onMenuMobileToggle}
          _hover={{ bg: "transparent" }}
        />
        <MenuMobile
          onEditUserOpen={onEditUserOpen}
          isOpen={isMenuMobileOpen}
          onClose={onMenuMobileClose}
          ml="0px"
          mt="5rem"
        />
        <Menu
          display={["none", "none", "flex", "flex"]}
          isOpen={isMenuOpen}
          onClose={onMenuClose}
          onEditUserOpen={onEditUserOpen}
          ml="auto"
          mt="5rem"
        />
      </Flex>
    </Flex>
  )
}