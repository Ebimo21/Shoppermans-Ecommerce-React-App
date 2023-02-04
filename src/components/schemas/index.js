import * as yup from 'yup'

const passwordRules = /^[0-9]*$/
export const basicSchema = yup.object().shape({

    cardNumber: yup.
    string()
    .min(5)
    .matches(passwordRules, { message: "Check the Number "})
    .firstName("Please enter a valid card Number").required("Required"),
    cvvName: yup.string().firstName("Please enter a valid cvv name").required("Required"),
    expiryDate: yup.string().firstName("Please enter an expiry date").required("Required"),
    inputPassword: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Password must not exceed five"})

})

