import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useMemo,
} from "react";

import api from "../services/api";
import { IVehicle } from "../interface/IVehicle";
import { IVehicleRequest } from "../interface/IVehicle";
import { IBodyEditAD, IContextValues } from "../interface/IAD/ADInterfaces";

interface VehicleProps {
  children: ReactNode;
}

interface VehicleContextData {
  listVehicle: (id: string) => Promise<void>;
  vehicle: IVehicle;
  cars: IVehicle[];
  motorbikes: IVehicle[];
  createVehicle: (
    id: string,
    data: IVehicleRequest,
    onClose: CloseModal
  ) => Promise<void>;
  listVehicles: () => void;
  vehicles: IVehicle[];
  updateAD: ( data:  IContextValues ,id: string) => Promise<void>;
}

type CloseModal = () => void;

export const VehicleContext = createContext<VehicleContextData>(
  {} as VehicleContextData
);

export const UseVehicle = () => {
  const context = useContext(VehicleContext);

  return context;
};

export const VehicleProvider = ({ children }: VehicleProps) => {
  const [vehicle, setVehicle] = useState<IVehicle>({} as IVehicle);
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [cars, setCars] = useState<IVehicle[]>([]);
  const [motorbikes, setMotorbikes] = useState<IVehicle[]>([]);
  const [editAD, setEditAD]  = useState<IVehicle>({ }as IVehicle)

  const listVehicle = async (id: string) => {
    await api
      .get(`ads/${id}`)
      .then((res) => setVehicle(res.data))
      .catch((err) => console.log(err));
  };

  const listVehicles = useCallback(async () => {
    await api
      .get("ads/")
      .then((res) => {
        setVehicles([...res.data.carros, ...res.data.motos]);
        setCars(res.data.carros);
        setMotorbikes(res.data.motos);
      })
      .catch((err) => console.log(err));
  }, [vehicles]);

  const createVehicle = useCallback(
    async (id: string, data: IVehicleRequest, onClose: CloseModal) => {
      await api
        .post(`ads/${id}`, data)
        .then((res) => {
          setVehicles([...vehicles, res.data]);
          listVehicles();
          return onClose();
        })
        .catch((err) => console.log(err));
    },
    []
  );

  const updateAD = useCallback(async (props: IContextValues) => {
    const { data, id, onClose } = props

    const values = Object.values(data)
    const keys = Object.keys(data)

    const body: IBodyEditAD = {}

    keys.forEach((key: string, index) => {
      if (values[index] !== undefined && values[index] !== '') {
        body[key] = values[index]
      }
    })

    await api
      .patch(`http://localhost:3000/users/${id}`, body)
      .then(res => {
        setEditAD(res.data)
        onClose()
      })
      .catch(err => console.log(err))
  }, [])

  const vehicleContextValues = useMemo(
    () => ({
      listVehicle,
      vehicle,
      createVehicle,
      listVehicles,
      vehicles,
      cars,
      motorbikes,
      updateAD
    }),
    [vehicles]
  );

  return (
    <VehicleContext.Provider value={vehicleContextValues}>
      {children}
    </VehicleContext.Provider>
  );
};
