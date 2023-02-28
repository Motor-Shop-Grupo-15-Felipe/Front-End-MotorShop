import { Card, Heading } from "@chakra-ui/react"

export const NoVehiclesCard = () => {
  return (
    <Card
      w={['26.875rem', '32.5rem', '38.25rem']}
      h='300px'
      minW={['26.875rem', '32.5rem', '38.25rem']}
      shadow="none"
      outline="none"
      position="relative"
      background='var(--grey5)'
    >
      <Heading
        m="2.2rem"
        fontWeight={600}
        fontSize="1.6rem"
        color="var(--grey1)"
      >
        No momento estamos sem este tipo de veículo
      </Heading>
    </Card>
  )
}