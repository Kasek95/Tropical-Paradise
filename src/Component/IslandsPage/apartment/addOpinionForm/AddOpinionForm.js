import React from "react";
import "./addOpinionForm.scss"
import {Form, Formik} from "formik";
import {addOpinionValidation} from "./addOpinionValidation";
import CustomSelect from "../../../adminPanel/formAddApartment/CustomSelect";
import CustomInput from "../../../register/customInput/CustomInput";
import CustomTextArea from "../../../adminPanel/formAddApartment/CustomTextArea";
import supabase from "../../../../supabase";

const AddOpinionForm = ({setIsDisplayForm,apartmentId,getOpinion}) => {
    const closeForm = () => {
        setIsDisplayForm()
    }

    const onSubmit = async (values,actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const {Name,Rating,description} = values
        await supabase.from("opinions").insert({
            apartmentId: apartmentId,
            rating: Rating,
            opinia: description,
            name: Name
        });
        getOpinion()
        actions.resetForm()
        closeForm()
    }

    return (
    <Formik
        initialValues={{
            Name: "",
            Rating: "",
            description: "",
        }}
        validationSchema={addOpinionValidation}
        onSubmit={onSubmit}

    >
        {() => (
            <Form className={"addOpinionForm"}>
                <button type={"reset"} onClick={closeForm}  className={"icon"} type={"reset"}><i className="fa-solid fa-x"></i></button>
                <h2>Add Opinion Form</h2>
                <div className={"customSelect"}>
                    <CustomSelect
                        label="Ocena"
                        name="Rating"
                        placeholder="Wystaw ocenę apartamentu"
                    >
                        <option value="">Wybierz ocenę</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </CustomSelect>
                </div>


                <div className={"customInput"}>
                    <CustomInput
                        label={"Nazwa użytkownika"}
                        name={"Name"}
                        type={"text"}
                        placeholder={"Wpisz nazwę użytkownika"}
                    />
                </div>

                <div className={"customTextArea"}>
                    <CustomTextArea
                        label={"Opis apartamentu"}
                        name={"description"}
                        placeholder={"Napisz opis apartamentu"}
                    />
                </div>
                <button className={"addOpinionBtn"}  type={"submit"}>Add Apartment</button>
            </Form>
        )}
    </Formik>
)

}

export default AddOpinionForm;