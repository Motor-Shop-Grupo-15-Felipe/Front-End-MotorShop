import { createContext, useContext, useState } from "react"
import { IAdData, IContextValues, IProviderProps, UserDataProps } from "../interface/IAD/ADInterfaces"
import api  from "../services/api"

export const ADSContext = createContext<IContextValues>({} as IContextValues)

export const useADS = () => {
    const context = useContext(ADSContext)

    if (!context) {
        throw new Error("useADS must be used within as ContactProvider")
      }
      return context
    

}

const ADSProvider = ({ children }: IProviderProps) => {
   // const { token } = useAuth()
   const [isLoading, setIsLoading] = useState(false)
   const [ads, setAds] = useState<IAdData[]>([])

   const loadADS = async () => {
    setIsLoading(true)
    await api
    .get(`/ads`,{
        headers: {
            Authorization:// `Bearer ${token}`,
          },
    })


   }
    

}
export default ADSProvider
