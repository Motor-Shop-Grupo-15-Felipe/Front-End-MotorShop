
import user from "../../assets/user.svg";

import { BiTimeFive } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import {
  ProductCardStyle,
  ProductAuction,
  Characteristics,
  DescriptionVehicle,
  InfoOwnerVehicle,
  InfoVehicle,
  Price,
  TitleVehicle,
  Traits,
  RedirectAuction,
  TimeAuction,
  BtnAuction,
  
} from "./productCardAuction.style";


export const ProductCardAuction = () => {
  return (
    <>
      <ProductCardStyle className="product-card-auction">
        <ProductAuction>
          <TimeAuction className="time-to-auction">
            <BiTimeFive color="blue" size={"1rem"}/> 01:58:00
          </TimeAuction>

          <TitleVehicle className="title-car">Lamborghini</TitleVehicle>

          <DescriptionVehicle className="description-car">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            veritatis necessitatibus facilis aspernatur.
          </DescriptionVehicle>

          <InfoOwnerVehicle className="user-info">
            <img className="image-user" src={user} alt="" />

            <span className="username">Gabriella</span>
          </InfoOwnerVehicle>

          <InfoVehicle className="car-info">
            <Traits>
              <Characteristics className="age-car">2023</Characteristics>
              <Characteristics className="mileaste-car">0KM</Characteristics>
            </Traits>

            <Price className="price-car">R$ 500.000,00</Price>
          </InfoVehicle>
        </ProductAuction>

        <RedirectAuction className="redirect-auction-page">
          <BtnAuction className="redirect">Acessar página do leilão</BtnAuction>
          <BsArrowRight cursor={"pointer"} size={"20px"} />
        </RedirectAuction>
      </ProductCardStyle>
    </>
  );
};
