import { Button } from "@chakra-ui/button"
import { Card, CardBody, CardFooter } from "@chakra-ui/card"
import { Image } from "@chakra-ui/image"
import { Heading, Text } from "@chakra-ui/layout"
import { IVehicle } from "../../interface/IVehicle"
import Car2 from "../../assets/car2.svg"

interface IProps {
  vehicle: IVehicle
}

export const InfoVehicle = ({ vehicle }: IProps) => {

  const imagemRoute = vehicle.images && vehicle.images[0].image

  return (
    <>
      <Card bg={'var(--grey10)'}>
        <CardBody>
          <Image
            src={`${Car2}`}
            alt={vehicle.title}
            borderRadius="lg"
            width={'25rem'}
            height={'18.75rem'}
            margin={'0 auto'}
          />
        </CardBody>
      </Card>
      <Card padding={'2rem 4rem'} bg={'var(--grey10)'}>
        <CardBody>
          <Heading size="md">Mustang</Heading>
        </CardBody>

        <CardFooter display={'flex'} justifyContent={'space-between'}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Text
                  padding="0.3rem"
                  bg="var(--brand4)"
                  color="var(--brand1)"
                >
                  {'2023'}
                </Text>
                <Text
                  padding="0.3rem"
                  bg="var(--brand4)"
                  marginLeft="2rem"
                  color="var(--brand1)"
                >
                  {'0'} KM
                </Text>
              </div>

              <Button
                color="var(--whiteFixed)"
                marginTop="1rem"
                variant="solid"
                bg="var(--brand1)"
              >
                Comprar
              </Button>
            </div>
          </div>

          <Text color="var(--grey1)">
            R${'200.000'}
          </Text>
        </CardFooter>
      </Card>

      <Card padding={'2rem 4rem'} bg={'var(--grey10)'}>
        <Text>
          <p
            style={{
              color: 'var(--grey1)',
              fontWeight: '600',
              marginBottom: '2rem'
            }}
          >
            Descrição
          </p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio iste eius delectus nam commodi impedit? Nihil, consequatur ipsa temporibus, vitae excepturi consequuntur magnam incidunt et, cupiditate qui repellendus. Quo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo excepturi unde praesentium ipsam, velit temporibus aperiam voluptates, architecto veniam possimus alias veritatis pariatur! Autem, vel. Voluptatibus omnis illo placeat nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi. Ipsam, magnam quae. Minus, aut. Laborum autem voluptatem fuga obcaecati est quis, odio, rem fugiat veniam ratione, maxime tempore sapiente?
        </Text>
      </Card>
    </>
  )
}