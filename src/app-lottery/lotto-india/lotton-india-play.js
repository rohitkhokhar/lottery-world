import React from 'react';
import Navbar from "../navbar";
import BreadCrumb from "../../components/breadcrumb";
import NumbersBox from "../../components/numbers-box";

const LottoIndiaPlay = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <BreadCrumb/>

            <div className="container l_lotto-india">
                <div className="header">
                    <h1>Play Lotto India</h1>
                    <p className="l_mb-20">Lotto India draws take place every Tuesday and Friday at 6:00 PM IST. To bet
                        on the game you pick
                        six numbers between 1 and 50 plus a Joker Ball between 1 and 5, and you must enter by 5:50 PM
                        IST on draw days.</p>
                </div>
                <div className="l_lotto-play">
                    <div className="l_lotto-play-header">

                        <div className="l_lotto-play-header-table">

                            <div className="l_lotto-play-header-row">

                                <div className="l_lotto-play-header-cell cell-logo">
                                    <img
                                        src="https://in.lotteryworld.com/Media/app/images/brands/brand-33/logo-ball-small.png"
                                        className="lotto-logo" alt="Lotto India logo"/>
                                </div>

                                <div className="l_lotto-play-header-cell cell-brand-name">
                                    <div className="c-brand-name">Lotto India</div>
                                </div>

                                <div className="l_lotto-play-header-cell cell-vertical-line">
                                    <div className="c-vertical-line"/>
                                </div>

                                <div className="l_lotto-play-header-cell cell-prize">

                                    <div className="c-prize">
                                        <span className="brand-prize"><span className="small-m">₹</span>40</span><span
                                        className="prize-text"> Million</span>
                                    </div>

                                </div>

                                <div className="l_lotto-play-header-cell cell-vertical-line">
                                    <div className="c-vertical-line"/>
                                </div>

                                <div className="l_lotto-play-header-cell cell-timer">

                                    <div className="c-timer">2 days 20 hrs</div>

                                </div>

                            </div>

                        </div>

                        <div className="l_lotto-play-header-command">

                            <button className="btn-header-magic l_mr-2">
                                <div>Quick Pick</div>
                            </button>
                            <button className="btn-header-clear" disabled="disabled">
                                <div>Clear</div>
                            </button>

                        </div>

                    </div>
                </div>

                <NumbersBox/>
            </div>
        </React.Fragment>
    );
};

export default LottoIndiaPlay;