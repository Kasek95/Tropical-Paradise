import * as yup from "yup"

export const addOpinionValidation = yup.object().shape({
    Name: yup
        .string()
        .min(5,"Użytkowniku musi mieć 5 znaków")
        .required("Required"),
    description: yup
        .string()
        .min(50,"Opis pokoju musi mieć min. 50 znaków")
        .required("Required"),
    Rating: yup
        .string()
        .oneOf(["1","2","3","4","5"], "Wystaw ocenę")
        .required("Required")
});