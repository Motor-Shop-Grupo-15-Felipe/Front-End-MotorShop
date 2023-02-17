import { createTheme, globalCss, styled } from "@stitches/react";
import { ReactNode } from "react";


interface GlobalStyleProps {
  children: ReactNode;
  }

  export const Container = styled("div", {
    maxWidth: "$container",
    margin: "0 auto",
    padding: "0 1rem",
  
    "@tablet": {
      maxWidth: "$containerTablet",
    },
  });
  
  export const Flex = styled("div", {
    display: "flex",
    gap: "$1",
    alignItems: "center",
  });
  
  export const Box = styled("div", {
    maxWidth: "100%",
  });
  

export const colors = {
    color: {
        brand1: {
          color: "$brand1",
        },
        brand2: {
          color: "$brand2",
        },
        brand3: {
          color: "$brand3",
        },
        brand4: {
          color: "$brand4",
        },
        grey0: {
            color:"$grey0",
        },
        grey1: {
          color: "$grey1",
        },
    
        grey2: {
          color: "$grey2",
        },
    
        grey3: {
          color: "$grey3",
        },
    
        grey4: {
          color: "$grey4",
        },
    
        grey5: {
          color: "$grey5",
        },
        grey6: {
          color: "$grey6",
        },
        grey7: {
            color: "$grey7",
          },
          grey8: {
            color: "$grey8",
          },
          grey9: {
            color: "$grey9",
          },
          grey10: {
            color: "$grey10",
          },
          whiteFixed: {
            color: "$whiteFixed",
          },
          alert1: {
            color: "$alert1",
          },
          alert2: {
            color: "$alert2",
          },
          alert3: {
            color: "$alert3",
          },
          sucess1: {
            color: "$sucess1",
          },
          sucess2: {
            color: "$sucess2",
          },
          sucess3: {
            color: "$sucess3",
          },
          random1:{
            color:"$random1"
          },
          random2:{
            color:"$random2"
          },
          random3:{
            color:"$random3"
          },
          random4:{
            color:"$random4"
          },
          random5:{
            color:"$random5"
          },
          random6:{
            color:"$random6"
          },
          random7:{
            color:"$random7"
          },
          random8:{
            color:"$random8"
          },
          random9:{
            color:"$random9"
          },
          random10:{
            color:"$random10"
          },
          random11:{
            color:"$random11"
          },
          random12:{
            color:"$random12"
          },
          
          
      },
    };

    export const globalStyles = globalCss({
        "*": {
          margin: 0,
          padding: 0,
          fontFamily: "'Inter', sans-serif",
          boxSizing: "border-box",
        },
        html: {
          scrollBehavior: "smooth",
        },
        a: { textDecoration: "none" },
      });

export const GlobalStyle = ({ children }: GlobalStyleProps): JSX.Element => {

    const theme = createTheme({
       colors:{
        brand1: "#4529E6",
        brand2:"#5126EA",
        brand3:"#B0A6F0",
        brand4:"#EDEAFD",

        grey0:"#0B0D0D",
        grey1:"#212529",
        grey2:"#495057",
        grey3:"#868E96",
        grey4:"#ADB5BD",
        grey5:"#CED4DA",
        grey6:"#DEE2E6",
        grey7:"#E9ECEF",
        grey8:"#F1F3F5",
        grey9:"#F8F9FA",
        grey10:"#FDFDFD",
       
        whiteFixed:"#FFFFFF",

        alert1:"#CD2B31",
        alert2:"#FDD8D8",
        alert3:"#FFE5E5",
        
        sucess1:"#18794E",
        sucess2:"#CCEBD7",
        sucess3:"#DDF3E4",

        random1:"#E34D8C",
        random2:"#C04277",
        random3:"#7D2A4D",
        random4:"#7000FF",
        random5:"#6200E3",
        random6:"#36007D",
        random7:"#349974",
        random8:"#2A7D5F",
        random9:"#153D2E",
        random10:"#6100FF",
        random11:"#5700E3",
        random12:"#30007D",

        mode: "#ffffff",

       },
       sizes: {
         container: "75rem",
         containerTablet: "40rem",
       },
       space: {
        1: "0.5rem",
        2: "1rem",
        3: "2rem",
        4: "3rem",
        5: "4rem",
        section: "10rem",
        sectionMobile: "4rem",
      },
      fonts: {
        titles: '"Lexend", sans-serif;"',
        texts: '"Inter", sans-serif;',
      },
      fontSizes: {
        size1: "2.75rem",
        size2: "2.25rem",
        size3: "2rem",
        size4: "1.75rem",
        size5: "1.5rem",
        size6: "1.25rem",
        size7: "1rem",
        size8: "0.875rem",

      
      
        // Mobile
        size1Mobile: "$size2",
        size2Mobile: "$size3",
      },
      lineHeights: {
        lineHeight1: "3.5rem",
        lineHeight2: "2.813rem",
        lineHeight3: "2.5rem",
        lineHeight4: "2.188rem",
        lineHeight5: "1.875rem",
        lineHeight6: "1.563rem",
        lineHeight7: "1.25rem",

        bodyHeight1: "1.75rem",
        bodyHeight2: "1.5rem",

        buttonHeight1: "0rem",
        
        inputHeight1:"0rem",
        inputHeight2:"1.063rem",
        
  
        // Mobile
        title1Mobile: "$lineHeight2",
        title2Mobile: "$lineHeight3",
      },
     

      
      radii: {
        1: "0.5rem",
        2: "0.25rem",
      },

    })

globalStyles();

const App = styled("div", {
  minHeight: "100vh",
});

return <App className={theme}>{children}</App>;
};