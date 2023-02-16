import { styled } from "@stitches/react"
import { colors } from "../../styles/Global"


export const FooterPage = styled("footer", {
    backgroundColor: "$grey0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2rem",
    color: "$whiteFixed",
    fontSize: "12px",
})

export const BtnTop = styled("button", {
    color: "$whiteFixed",
    fontSize: "1rem",
    fontWeight: "bolder",
    width: "2rem",
    height: "2rem",
    background: "$grey2",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer"
})