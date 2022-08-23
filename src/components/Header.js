import {Link} from 'react-router-dom';

import './Header.css'

export default function Header({cartArr}){
    return (
        <>
        <h1>
            <ul>
                <li><Link to='./'>Home</Link></li>
                <li><Link to='./cart'>Cart({cartArr.length})</Link></li>
            </ul>
        </h1>
        </>
    )
}