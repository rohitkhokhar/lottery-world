import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import SideModal from "../components/side-modal";
import Register from "./auth/register";
import SignIn from "./auth/signin";

const Lottery = () => {
    const history = useNavigate();

    const [register, setRegister] = useState(false);
    const [signin, setSignin] = useState(false);

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id=""/>
                    <div className="hamburger-lines">
                        <span className="line line1"/>
                        <span className="line line2"/>
                        <span className="line line3"/>
                    </div>
                    <ul className="menu-items">
                        <li className="sign-up" onClick={() => setRegister(true)}>
                            <img src="images/register.svg"/>
                            <a href="#">Register</a>
                        </li>
                        <li className="sign-in" onClick={() => setSignin(true)}>
                            <img src="images/signin.svg"/>
                            <a href="#">Sign In</a>
                        </li>
                        <li className="cart">
                            <img src="images/basket.svg"/>
                            <a href="#">Basket</a>
                        </li>
                    </ul>
                    <h1 className="logo"><img src="images/lotteryworld-logo.svg"/></h1>
                </div>
            </nav>

            {register && <SideModal
                open={register}
                maxWidth={500}
                onClose={() => setRegister(false)}
            >
                <Register/>
            </SideModal>}

            {signin && <SideModal
                open={signin}
                maxWidth={500}
                onClose={() => setSignin(false)}
            >
                <SignIn/>
            </SideModal>}
        </React.Fragment>
    );
};

export default Lottery;