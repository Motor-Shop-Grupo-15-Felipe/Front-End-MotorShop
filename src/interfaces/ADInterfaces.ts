import { ReactNode } from "react"

export interface IProviderProps {
    children: ReactNode
  }

  export interface IADCreateProps {
    title: string
    year: string
    km: number
    description:string
    vehicle_type:boolean
    published: boolean
  }

  export interface IAdData {
    id: string
    title: string
    year: string
    km: number
    description:string
    vehicle_type:boolean
    published: boolean
    createdAt: Date
  }

  export interface IADUpdateProps {
    title: string
    year: string
    km: number
    description:string
    vehicle_type:boolean
    published: boolean
  }

  export interface IADListProps {
    ads:IAdData[]
  }

  export interface UserDataProps {
     ad:IAdData | undefined
     

  }
  