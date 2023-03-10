import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", 
                  "g", "h", "i", "j", "k", "l", 
                  "m", "n", "o", "p", "q", "r", 
                  "s", "t", "u", "v", "w", "x", 
                  "y", "z"]

function App() {

  const [estadoBotao, setEstadoBotao] = useState(true)
  const [contador, setContador] = useState(0)
  const [letraSelecionada,setLetra] = useState("")
  const [erradas, setErradas] = useState ([])
  const [palavraSelecionada, setPalavraSelecionada] = useState ("")
  const [arrayPalavra, setArrayPalavra] = useState([])
  const [imagem, setImagem] = useState ("./assets/img/forca0.png")
  const [exibirLetra, setExibirLetra] = useState ([])
  const [cor, setCor] = useState("palavraEscondidaCor")
  const [alfabetoClicado, setAlfabetoClicado] = useState ([])
  

  return (
    <>
        <div className="Jogo">
          <Jogo 
          estadoBotao={estadoBotao} 
          setEstadoBotao={setEstadoBotao}

          palavraSelecionada={palavraSelecionada}
          setPalavraSelecionada = {setPalavraSelecionada}

          contador={contador}
          setContador={setContador}

          letraSelecionada={letraSelecionada}
          setLetra={setLetra}

          erradas={erradas}
          setErradas = {setErradas}

          arrayPalavra = {arrayPalavra}
          setArrayPalavra = {setArrayPalavra}

          imagem={imagem}
          setImagem = {setImagem}

          exibirLetra={exibirLetra}
          setExibirLetra = {setExibirLetra}
         

          cor={cor}
          setCor = {setCor}

          setAlfabetoClicado = {setAlfabetoClicado}
          

          
          
          />

          
        </div>

        <div className="alfabeto"> 
          {alfabeto.map(word => <Letras 
          key={word} 

          letra={word.toUpperCase()} 
          palavraSelecionada={palavraSelecionada}

          estadoBotao={estadoBotao} 
          setEstadoBotao={setEstadoBotao} 

          contador={contador}
          setContador={setContador}

          letraSelecionada={letraSelecionada}
          setLetra={setLetra}

          erradas={erradas}
          setErradas = {setErradas}
          arrayPalavra = {arrayPalavra}

          setImagem={setImagem}

          exibirLetra={exibirLetra}
          setExibirLetra = {setExibirLetra}

          setCor={setCor}
          cor={cor}

          alfabetoClicado={alfabetoClicado}
          
          
          /> )}
          
        </div>
    </>
    
  );
}

export default App;
