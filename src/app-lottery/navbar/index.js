import React, {useState} from 'react';
import SideModal from "../../components/side-modal";
import {useNavigate} from 'react-router-dom';
import Register from "../auth/register";
import SignIn from "../auth/signin";

const Navbar = () => {

    const navigate = useNavigate();
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
                            <img src="/images/register.svg"/>
                            <a href="#">Register</a>
                        </li>
                        <li className="sign-in" onClick={() => setSignin(true)}>
                            <img src="/images/signin.svg"/>
                            <a href="#">Sign In</a>
                        </li>
                        <li className="cart">
                            <img src="/images/basket.svg"/>
                            <a href="#">Basket</a>
                        </li>
                    </ul>
                    <a className="logo" href="/">
                        <img src="/images/lotteryworld-logo.svg" alt="lottery world"/>
                    </a>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="container">
                    <div className='buttons'>
                        <p className='p1' onClick={() => navigate("/lotto-india/lotto-india-play")}>Lotto India</p>
                        <p className='p1'>Bumper Lottery</p>
                        <p className='p1'>Mega Millons</p>
                        <p className='p1'>EuroMillons</p>
                        <p className='p1'>All Lottery</p>
                        <p className='p1'>Results</p>
                        <p className='p1'>Scratchcards</p>
                        <p className='p1'>Games</p>
                        <p className='p1'>Support</p>
                    </div>
                </div>
            </div>

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

export default Navbar;