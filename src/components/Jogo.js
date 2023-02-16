import palavras from "../palavras";

export default function Jogo (){

    const palavraSelecionada = palavras[Math.floor(Math.random()*(palavras.length))]
    return (

        <> 
            <div className="imagem-forca">
                 <img src="./assets/img/forca0.png" />
            </div>

            <div className="organizar">   
                <button className="botao"> Escolher Palavra </button>
                <MontaPalavra  key={palavraSelecionada} palavraSelecionada={palavraSelecionada}/>
            </div>  

            
        </>
    );
}

function MontaPalavra(props){

    const array = []
    for(let i = 0; i< props.palavraSelecionada.length; i++){
        array.push(props.palavraSelecionada[i])
    }
    console.log(array)
    return (
        <div className="palavraEscondida">
            {array.map((i) => <span>_</span>)}
        </div>
    );
}

function exibirPalavra (){

}

