import { styled } from "@stitches/react"
import { colors } from "../../styles/Global"

export const ProductCardStyle = styled("section", {
    width: "20rem",
    height: "21.875rem",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "1rem"

})

export const ImageVehicle = styled("img", {
    width: "18rem",
    height: "7.5rem",
    backgroundColor: `${colors.color.grey7.color}`,

})

export const TitleVehicle = styled("h2", {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "600",
    color: `${colors.color.grey1.color}`

})

export const DescriptionVehicle = styled("span", {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "justify"
})

export const InfoOwnerVehicle = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "500",
})

export const InfoVehicle = styled("div", {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  

})

export const Traits = styled("div", {

    display: "flex",
    gap: "6px",

})

export const Characteristics = styled("span", {
    padding: "0.25rem 0.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `#EDEAFD`,
    color: `#4529E6`,
    fontWeight: "500",
    fontSize: "14px",
    borderRadius: "5px"

})

export const Price = styled("span", {
    fontWeight: "bolder"
})