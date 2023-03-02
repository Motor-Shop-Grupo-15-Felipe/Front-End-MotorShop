import { IVehicle, IVehicleLeilao } from '../../interface/IVehicle'
import { Box, Flex, Heading } from '@chakra-ui/react'

import { ProductCardAuction } from '../../components/productCard/productCardAuction'
import  CardVehicle  from '../../components/productCard/productCard'
import { NoVehiclesCard } from '../../components/productCard/productCardNoVehicle'


interface IVehiclesCarousel {
  props: {
    vehicles?: IVehicle[]
    title: string
    isOwnerSellerPerfil: boolean
    leilao?: IVehicleLeilao[]
    id?: string
  }
}

export const VehiclesCarousel = ({ props }: IVehiclesCarousel) => {
  const { title, vehicles, isOwnerSellerPerfil, leilao, id } = props

  let noVehicles = false

  if (vehicles?.length === 0) {
    noVehicles = true
  }

  return (
    <Box paddingX={['25px', '45px']} mt="100px">
      <Heading
        id={id}
        as="h2"
        fontFamily="Lexend"
        fontSize="2.4rem"
        color="black"
      >
        {title}
      </Heading>

      <Flex
        overflowY="auto"
        w="100%"
        justifyContent="flex-start"
        maxW="1600px"
        gap="45px"
        mt="35px"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'var(--grey4)',
            borderRadius: '24px'
          }
        }}
      >
        {leilao?.map(vehicle => (
          <ProductCardAuction key={vehicle.id} props={vehicle} />
        ))}
        {vehicles?.map(vehicle => (
          <CardVehicle
            key={vehicle.id}
            props={{ vehicle, isOwnerSellerPerfil }}
          />
        ))}

        {noVehicles && (
          <NoVehiclesCard />
        )}
      </Flex>
    </Box>
  )
}