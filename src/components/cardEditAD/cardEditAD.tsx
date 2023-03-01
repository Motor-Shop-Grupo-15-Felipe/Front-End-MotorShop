import React, { useContext } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup";

import { updateADSchema } from "../../validators";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { IBodyEditAD, IContextValues  , IAdData} from "../../interface/IAD/ADInterfaces";
import { VehicleContext } from "../../contexts/vehicleContext";

  const EdittADs = ({id,title,year,km,price,plate,description,vehicle_type,published,createdAt}: IAdData) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const {updateAD} = useContext(VehicleContext)
     

    
  
    const {
       formState: { errors },
        register,
        handleSubmit,
      } = useForm({
        resolver: yupResolver(updateADSchema),
      });

      const handleUpdate = (data: IContextValues) => {
        updateAD(data,id)
        onClose()
        
      }

      return (
         
            <>
              <Button onClick={onOpen}>Editar anúncio</Button>
              <Button ml={4} ref={finalRef}>
                I'll receive focus on close
              </Button>
        
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent
                as='form'
                onSubmit={handleSubmit(handleUpdate as SubmitHandler<FieldValues>)}
                >
                  <ModalHeader>Editar anúncio</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Tipo de anúncio</FormLabel>
                      <Input ref={initialRef} />
                    </FormControl>
        
                    <FormControl mt={4}>
                    <FormLabel>Informações do veículo</FormLabel>
                      <FormLabel>Título</FormLabel>
                      <Input placeholder='Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200' {...register("title")}/>
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Ano</FormLabel>
                      <Input placeholder='2018'{...register("year")} />
                      <FormLabel>Quilometragem</FormLabel>
                      <Input placeholder='0' {...register("km")}  />
                      <FormLabel>Placa</FormLabel>
                      <Input placeholder='xxt-0000' {...register("plate")}  />
                      <FormLabel>Preço</FormLabel>
                      <Input placeholder='50.000,00' {...register("price")} />
                    </FormControl>

                    <FormControl mt={4}>
                    <FormLabel>Descrição</FormLabel>
                      <Input placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' {...register("description")} />
                    </FormControl>

                    <FormControl mt={4}>
                    <FormLabel>Tipo de veículo</FormLabel>
                      <Input  />
                    </FormControl>

                    <FormControl mt={4}>
                    <FormLabel>Publicado</FormLabel>
                      <Input  />
                    </FormControl>

                    <FormControl mt={4}>
                    <FormLabel>Imagem de capa</FormLabel>
                      <Input placeholder='https://image.com' />
                    </FormControl>
                    <FormControl mt={4}>
                    <FormLabel>1° Imagem da galeria</FormLabel>
                      <Input placeholder='https://image.com' />
                    </FormControl>
                    <FormControl mt={4}>
                    <FormLabel>2° Imagem da galeria</FormLabel>
                      <Input placeholder='https://image.com' />
                      <Button onClick={onOpen}>Adicionar campo para imagem da galeria</Button>
                    </FormControl>
                     

                  </ModalBody>
        
                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} type="submit">
                    Salvar alterações
                    </Button>
                    <Button onClick={onClose}>Excluir anúncio</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          
        
      )
   
    
  }
  export default EdittADs
   //<ModalEdit onSubmit={handleSubmit(editStatusTech)}></ModalEdit>
   