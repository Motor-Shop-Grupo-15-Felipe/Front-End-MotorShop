import { styled } from "@stitches/react";
import { colors } from "../../styles/Global";

export const ProductCardStyle = styled("section", {
  width: "30rem",
  display: "flex",
  flexDirection: "column",
  borderRadius: "4px",
});

export const ProductAuction = styled("div", {
  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.19) 0%, #000000 100%)`,
  backgroundSize: "cover",

  display: "flex",
  gap: "8px",
  alignItems: "flex-start",
  flexDirection: "column",
  padding: "1rem",
  color: "#FFF",
});

export const ImageVehicle = styled("img", {
  width: "18rem",
  height: "7.5rem",
  backgroundColor: `${colors.color.grey7.color}`,
});

export const TitleVehicle = styled("h2", {
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: "600",
  color: `${colors.color.grey1.color}`,
});

export const DescriptionVehicle = styled("span", {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "24px",
  textAlign: "justify",
});

export const InfoOwnerVehicle = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontWeight: "500",
});

export const InfoVehicle = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

export const Traits = styled("div", {
  display: "flex",
  gap: "6px",
});

export const Characteristics = styled("span", {
  padding: "0.25rem 0.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: `#EDEAFD`,
  color: `#4529E6`,
  fontWeight: "500",
  fontSize: "14px",
  borderRadius: "5px",
});

export const Price = styled("span", {
  fontWeight: "bolder",
});

export const RedirectAuction = styled("div", {
  width: "28rem",
  background: "#4529E6",
  display: "flex",
  padding: "1rem",
  justifyContent: "space-between",
  alignItems: "center",

  color: "#FFF",
});

export const BtnAuction = styled("button", {
  border: "none",
  background: "none",
  color: "#FFF",
  fontSize: "16px",
  cursor: "pointer",
});
