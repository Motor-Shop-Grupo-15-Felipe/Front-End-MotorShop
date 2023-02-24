import { styled } from "@stitches/react"

export const DivInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "36.313rem",
  background: "#5126EA",
})

export const Texts = styled("div", {
  color: "#FDFDFD",
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
})

export const DivButton = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  marginTop: "2.875rem",
})

export const ButtonInfo = styled("button", {
  height: "3rem",
  appearance: "none",
  background: "$whiteFixed",
  color: "$grey0",
  fontWeight: "600",
  padding: "0 2rem",
  border: "2px solid $whiteFixed",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "11.407rem",
  whiteSpace: "nowrap",
  transform: "scale(1.0)",
  transition: "0.6s",
  "&:hover": {
    transform: "scale(0.9)",
  },

  variants: {
    type: {
      btnInfo: {
        background: "#5126EA",
        border: "1.5px solid #FDFDFD",
        color: "#FDFDFD",

        "&:hover": {
          background: "#EDEAFD",
          border: "1.5px solid $grey1",
          color: "#5126EA",
        },
      },
    },
  },
})
