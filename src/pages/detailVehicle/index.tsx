import { useEffect } from 'react'
import { Flex, Box, useDisclosure } from '@chakra-ui/react'

import { useParams } from 'react-router-dom'

import { ModalAdminEditProfile } from '../../components/modals/modalAdminEditProfile'
import { VehicleOwnerCard } from './vehicleOwner'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { VehiclesPics } from './vehiclesPics'

import { InfoVehicle } from './infoVehicle'

import { UseVehicle } from '../../contexts/vehicleContext'
import { useAuth } from '../../contexts/authContext'
import { useComments } from '../../contexts/commentContext'
import { Comments } from './comments'
import { CommentMaker } from './commentMaker'


const DetailedVehicle = () => {

  const {gettingComments, comments} = useComments()

  useEffect(() => {
    idVehicle ? listVehicle(idVehicle) : listVehicle(idCarNotFound)

    gettingComments(idVehicle)

  }, [])

  const { onOpen, onClose, isOpen } = useDisclosure()
  const {listVehicle, vehicle}  = UseVehicle()
  const { verifyAuthenticated } = useAuth()

  const params = useParams()
  const isAuthenticated = verifyAuthenticated()

  const idVehicle: string = params.vehicleId || ''
  const idCarNotFound = 'f52c9c0e-aa92-497b-99e5-ad05c0c1e6ff'
  const propsCommentMaker = { idVehicle }

  return (
    <>
      <ModalAdminEditProfile isOpen={isOpen} onClose={onClose} />

      <Box w="100%">
        <Flex
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
          bgGradient="linear(to-b, var(--brand1) 40%, transparent 25%)"
        >
          <Header onEditUserOpen={onOpen} />
          <main
            style={{
              padding: '5rem 10rem',
              display: 'flex',
              flexDirection: 'row',
              gap: '2rem',
              width: '100%'
            }}
          >
            <section
              style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem'
              }}
            >
              <InfoVehicle vehicle={vehicle} />

              <Comments comments={comments} />
              
              {isAuthenticated && <CommentMaker props={propsCommentMaker}/>}

            </section>
            <section style={{ width: '30%' }}>
              <VehiclesPics vehicle={vehicle} />
              <VehicleOwnerCard owner={vehicle.user} />
            </section>
          </main>
        </Flex>
        <Footer />
      </Box>
    </>

  )
}

export default DetailedVehicle