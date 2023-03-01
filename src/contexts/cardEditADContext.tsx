import { createContext, useContext, useState } from "react"
import {  IADUpdateProps, IContextValues, IProviderProps } from "../interface/IAD/ADInterfaces"
import api  from "../services/api"
import { useAuth } from "./authContext"

export const ADSContext = createContext({} as IContextValues)


const ADSProvider = ({ children }: IProviderProps) => {
   const { token } = useAuth()
   const [isLoading, setIsLoading] = useState(false)
   const [editAD] = useState<IContextValues>({} as IContextValues)

   const updateADS = async (
   ADSid:string,
   data: IADUpdateProps) =>{
   setIsLoading(true)
    await api
    .patch(`/ads/${ADSid}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },})
      .then(() => {
        setIsLoading(false)})
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
        })
    
return (
  <ADSContext.Provider
  value={{editAD,isLoading,updateADS}}
  
  >
    {children}
  </ADSContext.Provider>
)


}}
