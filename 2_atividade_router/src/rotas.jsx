import { Routes, Route } from "react-router-dom";
import Marcao from "./paginas/Marcao";
import Waldomiro from "./paginas/Waldomiro"

function Rotas(){
    return(
        <Routes>
            <Route path='/Marcao' element={<Marcao />}/>
            <Route path='/Waldomiro' element={<Waldomiro />}/>
        </Routes>
    )
}
export default Rotas