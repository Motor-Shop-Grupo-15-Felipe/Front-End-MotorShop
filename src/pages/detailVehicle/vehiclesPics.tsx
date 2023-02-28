import { Card } from "@chakra-ui/card"
import { Image } from "@chakra-ui/image"
import { Flex } from "@chakra-ui/layout"
import { IVehicle } from "../../interface/IVehicle"
import Car2 from "../../assets/car2.svg"
import Car1 from "../../assets/car1.svg"
import Car3 from "../../assets/car3.svg"

interface IProps {
  vehicle: IVehicle
}

const images = [
  Car1,
  Car2,
  Car3

]

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
        {images &&
          images.map((image, i) => (
            <Flex
              key={i}
              align="center"
              justifyContent="center"
              bg="var(--grey7)"
              gap="1rem"
              w="90px"
              h="90px"
            >
              <Image w="120px" h="100px" src={image} />
            </Flex>
          ))}
      </Flex>
    </Card>
  )
}