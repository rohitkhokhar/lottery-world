import React from 'react';

const SignIn = () => {
    return (
        <React.Fragment>
            <div className="l_text-center">
                <h4 style={{fontFamily: `Open Sans`, fontSize: "23px", fontWeight: "normal"}}
                    className="u_pb-10">SIGN IN</h4>
                <div className="u_p-20">
                    <div className="l_row">
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
                            <a href="#">Forgot My Password</a>
                        </div>
                        <div className="u_col-12 l_input btn u_mt-10">
                            <button style={{width: "auto"}}>
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SignIn;