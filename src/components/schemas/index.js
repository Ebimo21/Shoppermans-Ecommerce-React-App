import * as yup from 'yup'


export const basicSchema = yup.object().shape({
    firstName: yup.string().firstName("Please enter a valid name").required("Required"),
    lasttName: yup.string().lastName("Please enter a valid name").required("Required"),
    // password: yup.string().min(5)

})

