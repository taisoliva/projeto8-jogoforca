import { useState } from "react";



export default function Letras (props){

    const {palavraSelecionada, contador, setContador,
          letraSelecionada, setLetra, erradas, setErradas, arrayPalavra, setImagem} = props

    let armazenaValor = contador

    function verifica(){

        if(!arrayPalavra.includes((props.letra).toLowerCase())){
            const novoArray = [...erradas, props.letra]
            setErradas(novoArray)
            armazenaValor = contador + 1
            setContador(armazenaValor)
            setImagem(`./assets/img/forca${armazenaValor}.png`)
       }
       
    }

    return (
        <button disabled={props.estadoBotao} onClick={verifica} > {props.letra} </button>
    );
}