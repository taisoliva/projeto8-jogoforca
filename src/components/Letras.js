import { useState } from "react";

export default function Letras (props){

    const [estadoBotao, setEstadoBotao] = useState(true)
    return (
        <button disabled={estadoBotao} onClick={() => {console.log(props.letra)}}> {props.letra} </button>
    );
}