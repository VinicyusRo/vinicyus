import { Link } from 'react-router-dom'

function Waldomiro(){
    return(
        <div>
        <h1>Página do Waldomiro</h1>
        <Link to={'/Marcao'}>Ver página do Marcao</Link>
        </div>
    )
}
export default Waldomiro