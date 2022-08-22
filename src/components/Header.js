import {Link} from 'react-router-dom';
// import Home from './Home';
// import Cart from './Cart';
import './Header.css'

export default function Header(){
    return (
        <>
        <h1>
            <ul>
                <li><Link to='./'>Home</Link></li>
                <li><Link to='./cart'>Cart</Link></li>
            </ul>
        </h1>
        </>
    )
}