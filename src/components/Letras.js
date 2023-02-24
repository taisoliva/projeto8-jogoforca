export default function Letras (props){

    const { estadoBotao, setEstadoBotao, palavraSelecionada, contador, setContador, erradas, setErradas, 
        arrayPalavra, setImagem, exibirLetra, setExibirLetra, setCor, cor, alfabetoClicado} = props

    let armazenaValor = contador

    function verifica(){
        console.log("exibirLetra:", exibirLetra.length)
        console.log("Palavra", palavraSelecionada.length)

        alfabetoClicado.push(props.letra)

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
        <button data-test="letter" className={estadoBotao || (alfabetoClicado.includes(props.letra)) ? "alfabeto_desativado" : "alfabeto_ativado"} disabled={(props.estadoBotao || (alfabetoClicado.includes(props.letra)) || cor === "vermelho" || cor === "verde") && true} onClick={verifica} > {props.letra} </button>
    );
}