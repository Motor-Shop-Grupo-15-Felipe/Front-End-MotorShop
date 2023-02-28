import { Card } from "@chakra-ui/card"
import { Image } from "@chakra-ui/image"
import { Flex } from "@chakra-ui/layout"
import { IVehicle } from "../../interface/IVehicle"

interface IProps {
  vehicle: IVehicle
}


export const VehiclesPics = ({ vehicle }: IProps) => {
  return (
    <Card
      display="flex"
      flexDirection="column"
      padding={'2rem'}
      bg={'var(--grey10)'}
      h="max-content"
    >
      <strong>Fotos</strong>
      <Flex gap="2rem">
        {vehicle.images &&
          vehicle.images.map((image, i) => (
            <Flex
              key={image.id}
              align="center"
              justifyContent="center"
              bg="var(--grey7)"
              gap="1rem"
              w="90px"
              h="90px"
            >
              <Image w="120px" h="100px" src={image.image} />
            </Flex>
          ))}
      </Flex>
    </Card>
  )
}