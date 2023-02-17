import { useState } from "react";
import palavras from "../palavras";

export default function Jogo (props){

    const {estadoBotao, setEstadoBotao, palavraSelecionada, setPalavraSelecionada, contador, 
           setContador, letraSelecionada, setLetra, erradas, arrayPalavra, 
           setArrayPalavra, imagem, exibirLetra, cor} = props

    
    const [index] = useState (Math.floor(Math.random()*(palavras.length)))
    
    
    if(palavraSelecionada === ""){
         setPalavraSelecionada (palavras[index])
    }

    function Botao(){

        setEstadoBotao(false)

        if(cor === "vermelho" || cor === "verde"){
            window.location.reload()
        }
    }
   
    return (

        <> 
            <div className="imagem-forca">
                 <img data-test="game-image" src={imagem} alt={imagem}/>
            </div>

            <div className="organizar">   
                <button data-test="choose-word" onClick={Botao} className="botao"> Escolher Palavra </button>
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
                        setArrayPalavra = {setArrayPalavra}
                        exibirLetra={exibirLetra}
                        cor={cor}/>
            </div>  
        </>
    );
}

function MontaPalavra(props){

    
    const {palavraSelecionada, contador, erradas,arrayPalavra, setArrayPalavra, exibirLetra, cor} = props
    
    
   

    const array = []


    if(arrayPalavra.length === 0 ){
        for(let i = 0; i< palavraSelecionada.length; i++){
            array.push(palavraSelecionada[i])
        }
        setArrayPalavra(array)
    }

    console.log("erradas:",erradas)
    console.log(arrayPalavra)
    console.log("certas",exibirLetra)

    console.log(cor)

    return (

        <>
            <div className={`palavraEscondida ${(props.estadoBotao && contador !== 6 && exibirLetra.length < palavraSelecionada.length) && "esconder" }`} >
                {
                    (contador === 6) ?  arrayPalavra.map((i) => <span  data-test="word" className={cor}> {i} </span>)  : arrayPalavra.map((i) => <span data-test="word" className={cor}> {exibirLetra.includes(i)? i : "_"} </span>) 

                } 
             </div>

             <div>
                <p> Escolhidas Erradas: {erradas.map( (i) => i )} </p>
             </div>
        </>
        

        
    );

    
}


