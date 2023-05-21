import React, {useState} from "react";
import "./singielApartments.scss"
import {AiFillDelete} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import supabase from "../../../supabase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingielApartment = ({apartment,getApartments}) => {
    const [isDisplayForm, setIsDisplayForm] = useState(false)
    const [editApartment, setEditApartment] = useState({
        id: "",
        RomInfo: "",
        RomPrice: "",
        RomImg: "",
        NumberOfGuest: "",
        Island: "",

    })

    const getEditApartment= (apartment) => {
        setEditApartment({
            id: apartment.id,
            RomInfo: apartment.RomInfo,
            RomPrice: apartment.RomPrice,
            RomImg: apartment.RomImg,
            NumberOfGuest: apartment.NumberOfGuest,
            Island:apartment.Island,
        })
        setIsDisplayForm(true)
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
    const fileSelectedHandler = async (e) => {
        let img = URL.createObjectURL(e.target.files[0])
        const imgBase64 = await getBase64ImageFromUrl(img)
        setEditApartment((prevEditApartment) => ({
            ...prevEditApartment,
            RomImg: imgBase64
        }));
    };

    const deleteApartment = async(id) => {
        await supabase.from("Roms")
            .delete()
            .eq("id", id)
        getApartments()
        toast.success('Usunąłeś apartament!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
   const submit = async (e) => {
       e.preventDefault()
       const {data} = await  supabase
           .from("Roms")
           .update({
               RomInfo: editApartment.RomInfo,
               RomPrice: editApartment.RomPrice,
               RomImg: editApartment.RomImg,
               NumberOfGuest: editApartment.NumberOfGuest,
               Island:editApartment.Island,

           })
           .eq("id", editApartment.id)

       setEditApartment({
           id: "",
           RomInfo: "",
           RomPrice: "",
           RomImg: "",
           NumberOfGuest: "",
           Island:"",
       })
       setIsDisplayForm(false)
       getApartments()
   }

    return (
        <div key={apartment.id} className={"apartmentCont"}>
            <div className={"apartmentInfo"}>
                <p>Wyspa: {apartment.Island}</p>
                <span>Cena za noc: <strong>{apartment.RomPrice}$</strong></span>
                <span>Ilość Osób w pokoju: {apartment.NumberOfGuest} osoby</span>
            </div>
            <div className={"btnContainer"}>
                <button  className={"btn"}><AiFillDelete onClick={() => deleteApartment(apartment.id)}/></button>
                <button onClick={() => getEditApartment(apartment)} className={"btn"}><AiFillEdit/></button>
            </div>
            <section className={isDisplayForm ? "editApartment show" : "editApartment"}>

               <form onSubmit={submit} className={"form"}>
                   <button type={"reset"} onClick={()=> setIsDisplayForm(false)} className={"closeForm"}><i className="fa-solid fa-x"></i></button>
                    <h2>Edit Apartment</h2>
                   <div className={"customInput"}>
                       <label htmlFor={"ProductsPrice"}>Rom Price per day</label>
                       <input
                           type={"number"}
                           value={editApartment.RomPrice}
                           name={"ProductsPrice"}
                           onChange={e => setEditApartment({...editApartment, RomPrice: e.target.value})}
                       />
                   </div>

                   <div className={"customInput"}>
                       <label htmlFor={"NumberGuest"}>Ilość osób</label>
                       <input
                           type={"number"}
                           value={editApartment.NumberOfGuest}
                           name={"NumberGuest"}
                           onChange={e => setEditApartment({...editApartment, NumberOfGuest: e.target.value})}
                       />
                   </div>

                   <div className={"customTextArea"}>
                       <label htmlFor={"ProductsInfo"}>Apartment Info</label>
                       <textarea
                           rows={6}
                           type={"text"}
                           value={editApartment.RomInfo}
                           name={"ProductsInfo"}
                           onChange={e => setEditApartment({...editApartment, RomInfo: e.target.value})}
                       />
                   </div>

                   <div className={"customInput"}>
                       <label htmlFor={"ProductsImg"}>Apartment IMG</label>
                       <input onChange={fileSelectedHandler} type={"file"}  name={"ProductsImg"}/>
                   </div>

                   <div className={"customSelect"}>
                       <label>Wybierz wyspę</label>
                       <select
                           value={editApartment.Island}
                           onChange={e => setEditApartment({...editApartment,Island: e.target.value})}
                       >
                           <option value="Tiki Taki">Tiki Taki</option>
                           <option value="Toca Toca">Toca Toca</option>
                           <option value="Nobu">Nobu</option>
                       </select>
                   </div>

                   <button type={"submit"} className={"saveBtn"}>Save</button>
               </form>
            </section>

        </div>
    )

}
export default SingielApartment;