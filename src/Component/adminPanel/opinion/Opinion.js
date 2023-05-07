import React from "react"
import "./opinion.scss"
import {AiFillDelete} from "react-icons/ai";
import supabase from "../../../supabase";

const Opinion = ({opinion, getOpinion}) => {


     const deleteOpinion = async (id) => {
         await supabase.from("opinions")
             .delete()
             .eq("id", id)
         getOpinion()
     }

    return (
        <>
            <li key={opinion.id} className={"opinionContainer"}>
               <h4>{opinion.name}</h4>
                <span className={"opinionDescription"}>{opinion.opinia}</span>
                <button onClick={() => deleteOpinion(opinion.id)} className={"deleteOpinion"}><AiFillDelete/></button>
            </li>
        </>
    )
}

export default Opinion;