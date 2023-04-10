import React from 'react';
import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';


function NavBar() {

    const navigate = useNavigate();
    

    const handleClick = () => {
        navigate('/signin');
    }
    return(
        <div className="navBar">
            <ul>
                <li>
                    <img src={logo} alt="logo" />
                    <p>About</p>
                    <p>Campaigns</p>
                    <p>Services</p>
                    <button onClick={handleClick}>Join the Community</button>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;
