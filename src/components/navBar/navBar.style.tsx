import { styled } from "@stitches/react"
import { colors } from "../../styles/Global"

const Color = colors.color

export const Header = styled("header", {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 2rem",  

})

export const Navigation = styled("nav", {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    
})

export const Categories = styled("ul", {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    margin: "0 4rem",
    padding: "1rem 1rem",
    gap: "0.7rem",
})

export const Link = styled("a", {
    textDecoration: "none",
    color: Color.grey0.color,

})


export const Division = styled("hr", {
    transform: "rotate(90deg)",
    width: "100%",
    color: `${Color.grey6.color}`
})

export const Sections = styled("div", {
    display: "flex", 
    gap: "0.5rem",

})





