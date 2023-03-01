import { useEffect } from 'react'
import { Flex, useDisclosure } from '@chakra-ui/react';
import { ModalAdminEditProfile } from '../../components/modals/modalAdminEditProfile/index';
import { VehiclesCarousel } from '../profileView/vehiclesCarousel'
import { BannerHome } from '../../components/bannerHome'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { UseVehicle } from '../../contexts/vehicleContext';
import { useUser } from '../../contexts/userContext';
import { vehiclesList } from '../../mocks/mockAuction';

const Home = () => {
  useEffect(() => {
    listVehicles()
    getUser()

  }, [])

  const { listVehicles, cars, motorbikes } = UseVehicle()
  const { getUser } = useUser()


  const motorbikeProps = {
    isOwnerSellerPerfil: false,
    vehicles: motorbikes,
    title: 'Motos',
    id: 'motos'
  }

  const carProps = {
    isOwnerSellerPerfil: false,
    vehicles: cars,
    title: 'Carros',
    id: 'carros'
  }

  const auctionProps = {
    title: 'Leilao',
    isOwnerSellerPerfil: false,
    leilao: vehiclesList,
    id: 'leilao'
  }

  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <>
      <ModalAdminEditProfile isOpen={isOpen} onClose={onClose} />
      <Flex w="100%" flexDir="column" justifyItems="center">
        <Header onEditUserOpen={onOpen} />
        <BannerHome />
        <VehiclesCarousel props={auctionProps} />
        <VehiclesCarousel props={carProps} />
        <VehiclesCarousel props={motorbikeProps} />
        <Footer />
      </Flex>
    </>
  )
}

export default Home