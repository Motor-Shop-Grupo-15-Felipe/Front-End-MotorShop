import * as yup from "yup"

export const updateADSchema = yup.object().shape({
    type_of_ad:yup.boolean().optional(),
    title:yup.string().optional(),
    year:yup.string().optional(),
    km:yup.number().optional(),
    description:yup.string().optional(),
    vehicle_type:yup.boolean().optional(),
    published: yup.boolean().optional(),
})