import { useState } from "react";
import palavras from "../palavras";

export default function Jogo (props){

    const {estadoBotao, setEstadoBotao, palavraSelecionada, setPalavraSelecionada, contador, 
           setContador, letraSelecionada, setLetra, erradas, arrayPalavra, setArrayPalavra, imagem} = props

    
    const [index] = useState (Math.floor(Math.random()*(palavras.length)))
   
    
    if(palavraSelecionada === ""){
         setPalavraSelecionada (palavras[index])
    }
   
    return (

        <> 
            <div className="imagem-forca">
                 <img src={imagem} />
            </div>

            <div className="organizar">   
                <button onClick={() => setEstadoBotao(false)} className="botao"> Escolher Palavra </button>
                <MontaPalavra  
                        key={index} 
                        palavraSelecionada={palavraSelecionada} 
                        estadoBotao={estadoBotao}
                        contador={contador}
                        setContador={setContador}
                        letraSelecionada={letraSelecionada}
                        setLetra={setLetra}
                        erradas={erradas}
                        arrayPalavra = {arrayPalavra}
                        setArrayPalavra = {setArrayPalavra}/>
            </div>  
        </>
    );
}

function MontaPalavra(props){

    
    const {palavraSelecionada, contador, setContador, 
           letraSelecionada, setLetra, erradas,arrayPalavra, setArrayPalavra} = props
    

    const array = []

    if(arrayPalavra.length === 0 ){
        for(let i = 0; i< palavraSelecionada.length; i++){
            array.push(palavraSelecionada[i])
        }
        setArrayPalavra(array)
    }

    console.log(erradas)
    console.log(arrayPalavra)
    
    return (
        <div className={`palavraEscondida ${props.estadoBotao && "esconder"}`} >
            {arrayPalavra.map((i) => <span> _ </span>) }
        </div>
    );

    
}

/* function verifica(letraSelecionada){
    letraSelecionada === "" ? "_" : "o"
} */
