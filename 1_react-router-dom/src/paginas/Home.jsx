import { Link } from 'react-router-dom'

function Home(){
    return(
        <div>
            <h1>Home</h1>
            <Link to={'/Joao'}>Ver página do Joao</Link>
        </div>
    )
}
export default Home