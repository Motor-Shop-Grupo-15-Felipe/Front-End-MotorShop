import { styled } from "@stitches/react";
import { colors } from "../../styles/Global";

export const ProductCardStyle = styled("section", {
  width: "40rem",
  display: "flex",
  flexDirection: "column",

  margin: "1rem",
});

export const ProductAuction = styled("div", {
  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.19) 0%, $grey0 100%)`,
  backgroundSize: "cover",
  width: "100%",
  display: "flex",
  gap: "8px",
  alignItems: "flex-start",
  flexDirection: "column",
  padding: "1rem",
  color: "$whiteFixed",
});

export const TimeAuction = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem",
  background: "$whiteFixed",
  color: "$grey0",
  borderRadius: "2rem",
  fontWeight: "bolder",
  fontSize: "0.75rem",
  marginBottom: "4rem",
});

export const ImageVehicle = styled("img", {
  width: "18rem",
  height: "7.5rem",
  backgroundColor: "$grey7",
});

export const TitleVehicle = styled("h2", {
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: "600",
  color: "$grey1",
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
  backgroundColor: "$brand4",
  color: "$brand1",
  fontWeight: "500",
  fontSize: "14px",
  borderRadius: "5px",
});

export const Price = styled("span", {
  fontWeight: "bolder",
});

export const RedirectAuction = styled("div", {
  width: "100%",
  background: "$brand1",
  display: "flex",
  padding: "1rem",
  justifyContent: "space-between",
  alignItems: "center",

  color: "$whiteFixed",
});

export const BtnAuction = styled("button", {
  border: "none",
  background: "none",
  color: "$whiteFixed",
  fontSize: "1rem",
  cursor: "pointer",
});
