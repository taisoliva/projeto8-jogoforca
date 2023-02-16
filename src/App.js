import Jogo from "./components/Jogo";
import palavras from "./palavras"
import Letras from "./components/Letras";

const alfabeto = ["a", "b", "c", "d", "e", "f", 
                  "g", "h", "i", "j", "k", "l", 
                  "m", "n", "o", "p", "q", "r", 
                  "s", "t", "u", "v", "w", "x", 
                  "y", "z"]

function App() {
  return (

    <>
        <div className="Jogo">
          <Jogo/>
        </div>
        <div className="alfabeto"> 
          {alfabeto.map(word => <Letras key={word} letra={word.toUpperCase()} /> )}
          
        </div>
    </>
    
   

  );
}

export default App;
