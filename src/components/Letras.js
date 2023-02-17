
export default function Letras (props){

    const {setEstadoBotao, palavraSelecionada, contador, setContador, erradas, setErradas, 
        arrayPalavra, setImagem, exibirLetra, setExibirLetra, setCor} = props

    let armazenaValor = contador

    function verifica(){

        console.log("exibirLetra:", exibirLetra.length)
        console.log("Palavra", palavraSelecionada.length)

        if(exibirLetra.length < palavraSelecionada.length && contador !== 6){
            if(!arrayPalavra.includes((props.letra).toLowerCase()) && !erradas.includes(props.letra)){
                const novoArray = [...erradas, props.letra]
                setErradas(novoArray)
                armazenaValor = contador + 1
                setContador(armazenaValor)
                setImagem(`./assets/img/forca${armazenaValor}.png`)
                armazenaValor === 6 && setCor("vermelho")
            } else if(arrayPalavra.includes((props.letra).toLowerCase())){

                const arrayCertas = [...exibirLetra]
                for(let i = 0; i< arrayPalavra.length; i ++){

                    if(arrayPalavra[i] === (props.letra.toLowerCase())){
                        arrayCertas.push((props.letra.toLowerCase()))
                    }
                }
                
                (arrayCertas.length === arrayPalavra.length) && setCor("verde")
                setExibirLetra(arrayCertas)
              }
            } else{
               
                setEstadoBotao(true)
                
            }
    }

    return (
        <button disabled={props.estadoBotao} onClick={verifica} > {props.letra} </button>
    );
}