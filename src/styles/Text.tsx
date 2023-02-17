import { styled } from "./stitches.config";
import { colors } from "./Global";

const headingsDefaultConfig = {
  fontFamily: "$titles",
};
const bodyDefaultConfig = {
  fontFamily: "$texts",
};

export const Text = styled("p", {
  color: "$grey1",
  fontSize: "$text1",
  fontWeight: 400,
  variants: {
    type: {
      heading1700: {
        fontSize: "$size1",
        lineHeight: "$lineHeight1",
        fontWeight: 700,
        ...headingsDefaultConfig,
        "@mobile": {
          fontSize: "$size1Mobile",
          lineHeight: "$size1Mobile",
        },
      },
      heading2600: {
        fontSize: "$size2",
        lineHeight: "$lineHeight2",
        fontWeight: 600,
        ...headingsDefaultConfig,
      },
      heading3600: {
        fontSize: "$size3",
        lineHeight: "$lineHeight3",
        fontWeight: 600,
        ...headingsDefaultConfig,
      },
      heading3500: {
        fontSize: "$size3",
        lineHeight: "$lineHeight3",
        fontWeight: 500,
        ...headingsDefaultConfig,
      },
      heading4600: {
        fontSize: "$size4",
        lineHeight: "$lineHeight4",
        fontWeight: 600,
        ...headingsDefaultConfig,
      },
      heading4500: {
        fontSize: "$size4",
        lineHeight: "$lineHeight4",
        fontWeight: 500,
        ...headingsDefaultConfig,
      },
      heading5600: {
        fontSize: "$size5",
        lineHeight: "$lineHeight5",
        fontWeight: 600,
        ...headingsDefaultConfig,
      },
      heading5500: {
        fontSize: "$size5",
        lineHeight: "$lineHeight5",
        fontWeight: 500,
        ...headingsDefaultConfig,
      },
      heading6600: {
        fontSize: "$size6",
        lineHeight: "$lineHeight6",
        fontWeight: 600,
        ...headingsDefaultConfig,
      },
      heading6500: {
        fontSize: "$size6",
        lineHeight: "$lineHeight6",
        fontWeight: 500,
        ...headingsDefaultConfig,
      },
      heading7600: {
        fontSize: "$size7",
        lineHeight: "$lineHeight7",
        fontWeight: 600,
        ...headingsDefaultConfig,
      },
      heading7500: {
        fontSize: "$size7",
        lineHeight: "$lineHeight7",
        fontWeight: 500,
        ...headingsDefaultConfig,
      },
      body1400: {
        fontSize: "$size7",
        lineHeight: "$bodyHeight1",
        fontWeight: 400,
        ...bodyDefaultConfig,
      },
      body1600: {
        fontSize: "$size7",
        lineHeight: "$bodyHeight1",
        fontWeight: 600,
        ...bodyDefaultConfig,
      },
      body2400: {
        fontSize: "$size8",
        lineHeight: "$bodyHeight1",
        fontWeight: 400,
        ...bodyDefaultConfig,
      },
      body2600: {
        fontSize: "$size8",
        lineHeight: "$bodyHeight2",
        fontWeight: 600,
        ...bodyDefaultConfig,
      },

      buttonBigText: {
        fontSize: "$size7",
        lineHeight: "$buttonHeight1",
        fontWeight: 600,
        ...bodyDefaultConfig,
      },
      buttonMediumText: {
        fontSize: "$size8",
        lineHeight: "$buttonHeight1",
        fontWeight: 600,
        ...bodyDefaultConfig,
      },
      inputPlaceholder: {
        fontSize: "$size7",
        lineHeight: "$inputHeight1",
        fontWeight: 400,
        ...bodyDefaultConfig,
      },
      inputLabel: {
        fontSize: "$size8",
        lineHeight: "$inputHeight2",
        fontWeight: 500,
        ...bodyDefaultConfig,
      },
    },
    ...colors,
  },
});
