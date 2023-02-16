import { styled } from "@stitches/react"
import { colors } from "../../styles/Global"

const Color = colors.color

export const FooterPage = styled("footer", {
    backgroundColor: `#0B0D0D`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem 3.75rem",
    color: `#FFF`,
    fontSize: "12px",
})

export const BtnTop = styled("button", {
    color: `#FFF`,
    fontSize: "16px",
    fontWeight: "bolder",
    padding: "3.4 rem",
    backgroundColor: `${Color.grey1.color}`,
    border: "none",
    cursor: "pointer"
})