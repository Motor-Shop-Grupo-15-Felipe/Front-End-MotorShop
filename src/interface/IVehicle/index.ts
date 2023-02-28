import { IUser } from "../IUser";

export interface Image {
  id?: string;
  image: string;
}

export interface IVehicle {
  id: string;
  title: string;
  description: string;
  isActive?: boolean;
  price: string;
  plate: string;
  type: "carro" | "moto";
  images: Image[];
  km: number;
  year: string;
  user: IUser;
}
export interface IVehicleState {
  carros: IVehicle[];
  motos: IVehicle[];
}
export interface IVehicleCreation {
  title: string;
  description: string;
  isActive: boolean;
  price: string;
  type: string;
  color: string;
  plate: string;
  images: Image[];
  km: string;
  year: string;
}

export interface IVehicleLeilao {
  id: string;
  title: string;
  
  description: string;
  price: string;
 
  km: number;
  year: string;
  user: IUser;
}

export interface IVehicleLeilaoProps {
  props: {
    [x: string]: any;
    id: string;
    title: string;
    
    description: string;
    price: string;
  
    km: number;
    year: string;
    user: IUser;
  };
}

export interface IPropsVehicle {
  props: { vehicle: IVehicle; isOwnerSellerPerfil: boolean };
}

export interface IPropsVehicleIsActive {
  props: { isActive: boolean };
}

export interface IVehicleCreated {
  description: string;
  km: string;
  price: string;
  title: string;
  year: string;
  type: string;
}

export interface IVehicleRequest {
  type: string;
  images: string[];
  userId: string;
  isActive: boolean;
  title: string;
  year: string;
  km: string;
  description: string;
  price: string;
}
