import React from "react"
import "./addApartment.scss"
import {Formik,Form} from "formik";
import CustomInput from "../../register/customInput/CustomInput";
import CustomSelect from "./CustomSelect";
import {addApartmentValidation} from "./validationAddApartment";
import supabase from "../../../supabase";
import CustomTextArea from "./CustomTextArea";

const AddApartmentForm = ({getApartments, cancelForm}) => {
    const cancelFormAdd = () => {
        cancelForm()
    }

    async function getBase64ImageFromUrl(imageUrl) {
        const res = await fetch(imageUrl);
        const blob = await res.blob();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener(
                "load",
                function () {
                    resolve(reader.result);
                },
                false
            );

            reader.onerror = () => {
                return reject(this);
            };
            reader.readAsDataURL(blob);
        });
    }

    const onSubmit = async (values,actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const doc = document.getElementById("1");

        const img = URL.createObjectURL(doc.files[0]);
        const imgBase64 = await getBase64ImageFromUrl(img);

        const {Rating,Island,RomLiked,NumberOfGuest,RomPrice,RomInfo} = values

        await supabase.from("Roms").insert({
            RomInfo: RomInfo,
            RomPrice: RomPrice,
            NumberOfGuest: NumberOfGuest,
            RomImg: imgBase64,
            RomLiked: RomLiked,
            Island: Island,
            rating: Rating
        });
        getApartments()
        actions.resetForm();
        cancelFormAdd()
    }

    return (
        <Formik
            initialValues={{
                Island: "",
                RomLiked: false,
                NumberOfGuest: "",
                RomImg:"",
                RomPrice: "",
                RomInfo: "",
                Rating: ""
            }}
            validationSchema={addApartmentValidation}
            onSubmit={onSubmit}

        >
            {({ isSubmitting }) => (
                <Form className={"addApartmentForm"}>
                    <button onClick={cancelFormAdd}  className={"icon"} type={"reset"}><i className="fa-solid fa-x"></i></button>
                    <h2>Add Product Form</h2>
                    <div className={"customSelect"}>
                        <CustomSelect
                            label="Island name"
                            name="Island"
                            placeholder="Please select a job"
                        >
                            <option value="">Wybierz wyspę</option>
                            <option value="Tiki Taki">Tiki Taki</option>
                            <option value="Toca Toca">Toca Toca</option>
                            <option value="Nobu">Nobu</option>
                        </CustomSelect>
                    </div>

                    <div className={"customSelect"}>
                        <CustomSelect
                            label="Ocena"
                            name="Rating"
                            placeholder="Wystaw ocenę"
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
                            label={`Number of guest`}
                            name={"NumberOfGuest"}
                            type={"number"}
                            placeholder={"Wpisz maksymalną liczbę gości"}
                        />
                    </div>
                    <div className={"customInput"}>
                        <CustomInput
                            label={`Kwota za jedną noc`}
                            name={"RomPrice"}
                            type={"number"}
                            placeholder={"Kwota za jedną noc"}
                        />
                    </div>

                    <div className={"customInput"}>
                        <CustomInput
                            id={1}
                            label={"Picture of products"}
                            name={"RomImg"}
                            type={"file"}
                            placeholder={"Dodaj zdjęcie apartamentu"}
                        />
                    </div>

                    <div className={"customTextArea"}>
                          <CustomTextArea
                           label={"Opis apartamentu"}
                           name={"RomInfo"}
                           placeholder={"Napisz opis apartamentu"}
                          />
                    </div>
                    <button className={"addApartmentBtn"}  type={"submit"}>Add Apartment</button>


                </Form>
            )}
        </Formik>
    )
}
export default AddApartmentForm;