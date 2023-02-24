import car from "../../assets/car.svg"
import user from "../../assets/user.svg"
import {
  ProductCardStyle,
  ImageVehicle,
  TitleVehicle,
  DescriptionVehicle,
  InfoOwnerVehicle,
  InfoVehicle,
  Characteristics,
  Traits,
  Price,
} from "./productCard.style"

export const ProductCard = () => {
  return (
    <>
      <ProductCardStyle>
        <div>
          <ImageVehicle className="image-vehicle" src={car} alt="" />
        </div>
        <TitleVehicle className="title-vehicle"> Carro vermelho </TitleVehicle>
        <DescriptionVehicle className="description-vehicle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          perspiciatis cum quasi ullam dignissimos, nemo amet quaerat.
        </DescriptionVehicle>

        <InfoOwnerVehicle className="info-owner-vehicle">
          <img className="owner-image-vehicle" src={user} alt="" />
          <span className="owner-vehicle">Gustavo</span>
        </InfoOwnerVehicle>

        <InfoVehicle className="info-vehicle">
          <Traits>
            <Characteristics className="mileage-vehicle">0 KM</Characteristics>
            <Characteristics className="age-vehicle">2020</Characteristics>
          </Traits>
          <Price className="price-vehicle">R$ 50.000,00</Price>
        </InfoVehicle>
      </ProductCardStyle>
    </>
  )
}
