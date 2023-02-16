import { styled } from "./stitches.config";

export const Button = styled("button", {
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
  width: "max-content",
  whiteSpace: "nowrap",
  transform: "scale(1.0)",
  transition: "0.6s",
  "&:hover": {
    transform: "scale(0.9)",
  },

  variants: {
    type: {
      btnGrey1: {
        background: "$grey0",
        border: "1.5px solid $grey0",
        color: "$whiteFixed",

        "&:hover": {
          background: "$grey1",
          border: "1.5px solid $grey1",
        },
      },

      btnGrey5: {
        background: "$grey5",
        border: "1.5px solid $grey5",
        color: "$grey2",

        "&:hover": {
          background: "$grey6",
          border: "1.5px solid $grey6",
        },
      },

      btnDisable: {
        background: "$grey5",
        border: "1.5px solid $grey5",
        color: "$whiteFixed",

        "&:hover": {},
      },

      btnBrand1: {
        background: "$brand1",
        border: "1.5px solid $brand1",
        color: "$whiteFixed",

        "&:hover": {
          background: "$brand2",
          border: "1.5px solid $brand2",
        },
      },

      btnBrand4: {
        background: "$brand4",
        border: "1.5px solid $brand4",
        color: "$brand1",

        "&:hover": {},
      },

      btnGrey10: {
        background: "$grey10",
        border: "1.5px solid $grey10",
        color: "$grey1",

        "&:hover": {},
      },

      btnGrey10Disable: {
        background: "transparent",
        border: "1.5px solid $grey10",
        color: "$grey10",

        "&:hover": {},
      },

      btnOutlineLight: {
        background: "$grey10",
        border: "1.5px solid $grey10",
        color: "$grey10",

        "&:hover": {
          background: "transparent",
          border: "1.5px solid $grey0",
          color: "$grey0",
        },
      },

      btnOutline2: {
        background: "transparent",
        border: "1.5px solid $grey4",
        color: "$grey0",

        "&:hover": {
          background: "$grey0",
          border: "1.5px solid $grey0",
          color: "$whiteFixed",
        },
      },

      btnOutlineBrand1: {
        background: "transparent",
        border: "1.5px solid $brand1",
        color: "$brand1",

        "&:hover": {
          background: "$brand4",
        },
      },

      btnLink: {
        color: "$grey0",

        "&:hover": {
          background: "$grey8",
        },
      },

      btnAlert: {
        background: "$alert3",
        border: "1.5px solid $alert3",
        color: "$alert1",

        "&:hover": {
          background: "$alert2",
        },
      },

      btnSucess: {
        background: "$sucess3",
        border: "1.5px solid $sucess3",
        color: "$sucess1",

        "&:hover": {
          background: "$sucess2",
          border: "1.5px solid $sucess2",
        },
      },

      btnBrandDisable: {
        background: "$brand3",
        border: "1.5px solid $brand3",
        color: "$brand4",
      },
    },
  },
});
