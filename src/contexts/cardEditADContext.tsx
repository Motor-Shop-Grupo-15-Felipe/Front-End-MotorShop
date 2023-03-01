import { createContext, useContext, useState } from "react"
import { IAdData, IADUpdateProps, IContextValues, IProviderProps, UserDataProps } from "../interface/IAD/ADInterfaces"
import api  from "../services/api"
import { useAuth } from "./authContext"

export const ADSContext = createContext<IContextValues>({} as IContextValues)

export const useADS = () => {
    const context = useContext(ADSContext)

    if (!context) {
        throw new Error("useADS must be used within as ContactProvider")
      }
      return context
    

}

const ADSProvider = ({ children }: IProviderProps) => {
   const { token } = useAuth()
   const [isLoading, setIsLoading] = useState(false)
   const [ads, setAds] = useState<IAdData[]>([])

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
  value={{isLoading,updateADS}}
  
  >
    {children}
  </ADSContext.Provider>
)


}}
export default ADSProvider
