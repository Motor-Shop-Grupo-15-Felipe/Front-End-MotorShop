import { createContext, useContext, useState } from "react"
import { IProviderProps, UserDataProps } from "../interfaces/ADInterfaces"
import api  from "../services/api"

const ADSContext = createContext<UserDataProps>({} as UserDataProps)

function AdsProvider({children}: IProviderProps){
    

}
