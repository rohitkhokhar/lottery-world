import React from 'react';

const Register = () => {
    return (
        <React.Fragment>
            <div className="l_text-center">
                <h4 style={{fontFamily: `Open Sans`, fontSize: "23px", fontWeight: "normal"}}
                    className="u_pb-10">REGISTER</h4>
                <h5 style={{fontFamily: `Open Sans`, fontSize: "19px", fontWeight: "lighter"}}>Your first step
                    towards the world's biggest jackpots.</h5>
                <div className="u_p-20">
                    <div className="l_row">
                        <div className="u_col-12 l_input u_mb-15">
                            <input
                                onChange={(e) => console.log(">>>>")}
                                type="text"
                                placeholder="First Name"
                                autoComplete="off"
                            />
                        </div>
                        <div className="u_col-12 l_input u_mb-15">
                            <input
                                onChange={(e) => console.log(">>>>")}
                                type="text"
                                placeholder="Surname"
                                autoComplete="off"
                            />
                        </div>
                        <div className="u_col-12 l_input u_mb-15">
                            <input
                                onChange={(e) => console.log(">>>>")}
                                type="email"
                                placeholder="Email"
                                autoComplete="off"
                            />
                        </div>
                        <div className="u_col-12 l_input u_mb-15">
                            <input
                                onChange={(e) => console.log(">>>>")}
                                type="text"
                                placeholder="Password"
                                autoComplete="off"
                            />
                        </div>
                        <div className="u_col-12 l_input u_mb-15">
                            <p className="l_text-left">
                                I understand that I will receive targeted marketing messages and can change my contact preferences in the "My Account" section on the site at any time, or Unsubscribe through the Unsubscribe link provided in all email messages themselves.
                            </p>
                        </div>
                        <div className="u_col-12 l_input u_mb-15">
                            <p className="l_text-left">
                                By clicking Submit below. I confirm I am 18+ and have read and accept the T&Cs and Privacy Policy.
                            </p>
                        </div>
                        <div className="u_col-12 l_input btn">
                            <button>
                                Submit and Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Register;