import { Card, Image, Heading, Text, Box, HStack, Flex } from "@chakra-ui/react";
import { IPropsVehicle } from "../../interface/IVehicle";
import { IsActiveVehicle } from "./isActive/isActive";
import { SellerData } from "./sellerData";
import { AdvertiserOptions } from "./advertiserOptions";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { mask } from "remask";
import { pricePatterns } from "../../utils/masksPatterns";
import Car2 from "../../assets/car2.svg"

const CardVehicle = ({ props }: IPropsVehicle) => {
  

  const { isOwnerSellerPerfil } = props;

  const navigation = useNavigate();

  const kmPatternMask = [
    "9",
    "99",
    "99.9",
    "99.99",
    "999.9",
    "999.99",
    "999.999",
    "9999.9",
    "9999.99",
  ];

  const handleClick = useCallback(
    () => navigation(`/detailedVehicle/${1}`),
    []
  );
  return (
    <Card
      w={["230px", "270px", "312px"]}
      minW={["230px", "270px", "400px"]}
      shadow="none"
      outline="none"
      position="relative"
      py="15px"
      padding="2rem"
      onClick={handleClick}
      bg="var(--grey10)"
    >
      <IsActiveVehicle props={{ isActive: true }} />
      <Image src={Car2} w="100%" objectFit="cover" h="215px" bg="var(--grey7)" />
      <Heading
        noOfLines={1}
        m="15px 0px"
        fontWeight={600}
        fontSize="1.6rem"
        color="var(--grey1)"
      >
       Astra
      </Heading>
      <Text
        noOfLines={2}
        fontWeight="400"
        fontSize="1.4rem"
        color="var(--grey2)"
        h="45px"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste reprehenderit aspernatur, cumque obcaecati possimus illo, amet excepturi neque pariatur et quod minima minus voluptatem veritatis delectus quis beatae velit quibusdam!
      </Text>
      {!isOwnerSellerPerfil && <SellerData name="Gustavo" />}

      <HStack
        marginTop="10px"
        direction="row"
        gap={["2", "6"]}
        fontSize={["1rem", "1.2rem", "1.4rem"]}
        fontWeight="500"
        justifyContent="space-between"
        color="var(--brand1)"
      >
        <Flex gap="0.5rem">
        <Box p="4px 8px" bg="var(--brand4)" borderRadius="4px"color="var(--brand1)">
          <Text>{mask(String(15000), kmPatternMask)} km</Text>
        </Box>
        <Box p="4px 8px" bg="var(--brand4)" borderRadius="4px" color="var(--brand1)">
          <Text>{"2004"}</Text>
          </Box>
        </Flex>

        <Text
          color="var(--grey1)"
          fontWeight="bolder"
          fontFamily="Lexend"
          fontSize={["1.4rem", "1.6rem"]}
        >
          R$ {"15.000,00"}
        </Text>
      </HStack>
      {isOwnerSellerPerfil && <AdvertiserOptions />}
    </Card>
  );
};

export default CardVehicle;
