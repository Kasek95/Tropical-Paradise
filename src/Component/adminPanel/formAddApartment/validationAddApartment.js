import * as yup from "yup"

export const addApartmentValidation = yup.object().shape({
    Island: yup
        .string()
        .oneOf(["Tiki Taki","Toca Toca","Nobu"], "Wybierz wyspę")
        .required("Required"),
    NumberOfGuest: yup
        .number()
        .positive("Liczba gości musi być pozytywna")
        .required("Required"),
    RomPrice:yup
        .number()
        .positive("Cena musi być pozytywna")
        .required("Required"),
    RomImg: yup
        .string()
        .required("Wstaw zdj."),
    RomInfo: yup
        .string()
        .min(50,"Opis pokoju musi mieć min. 50 znaków")
        .required("Required"),
    Rating: yup
        .string()
        .oneOf(["1","2","3","4","5"], "Wystaw ocenę")
        .required("Required")
});