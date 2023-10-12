import React from 'react';
import Navbar from "../navbar";
import BreadCrumb from "../../components/breadcrumb";
import NumbersBox from "../../components/numbers-box";
import Footer from "../footer";

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
                <div className="l_lotto-play l_mb-25">
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
                <div className="beton-play-area" style={{marginBottom: "30px"}}>
                    <ul>
                        <li className="ticket-box">
                            <div className="ticket-box-inner">
                                <div className="ticket-box-header">
                                    <div className="ticket-box-header-top">
                                        <button className="btn-ticket-magic">
                                            <img src="/images/delete.png" style={{marginRight: "3px"}}
                                                 alt="Lotto India"/>Quick Pick
                                        </button>
                                        <button className="btn-ticket-clear">
                                            <img src="/images/magic-wand.png"
                                                 alt="Lotto India"/></button>
                                    </div>
                                    <div className="ticket-box-header-bottom">Pick 6 numbers</div>
                                </div>
                                <div className="ticket-box-body">
                                    <NumbersBox/>
                                </div>
                            </div>
                        </li>
                        <li className="ticket-box">
                            <div className="ticket-box-inner">
                                <div className="ticket-box-header">
                                    <div className="ticket-box-header-top">
                                        <button className="btn-ticket-magic">
                                            <img src="/images/delete.png" style={{marginRight: "3px"}}
                                                 alt="Lotto India"/>Quick Pick
                                        </button>
                                        <button className="btn-ticket-clear">
                                            <img src="/images/magic-wand.png"
                                                 alt="Lotto India"/></button>
                                    </div>
                                    <div className="ticket-box-header-bottom">Pick 6 numbers</div>
                                </div>
                                <div className="ticket-box-body">
                                    <NumbersBox/>
                                </div>
                            </div>
                        </li>
                        <li className="ticket-box">
                            <div className="ticket-box-inner">
                                <div className="ticket-box-header">
                                    <div className="ticket-box-header-top">
                                        <button className="btn-ticket-magic">
                                            <img src="/images/delete.png" style={{marginRight: "3px"}}
                                                 alt="Lotto India"/>Quick Pick
                                        </button>
                                        <button className="btn-ticket-clear">
                                            <img src="/images/magic-wand.png"
                                                 alt="Lotto India"/></button>
                                    </div>
                                    <div className="ticket-box-header-bottom">Pick 6 numbers</div>
                                </div>
                                <div className="ticket-box-body">
                                    <NumbersBox/>
                                </div>
                            </div>
                        </li>
                        <li className="ticket-box">
                            <div className="ticket-box-inner">
                                <div className="ticket-box-header">
                                    <div className="ticket-box-header-top">
                                        <button className="btn-ticket-magic">
                                            <img src="/images/delete.png" style={{marginRight: "3px"}}
                                                 alt="Lotto India"/>Quick Pick
                                        </button>
                                        <button className="btn-ticket-clear">
                                            <img src="/images/magic-wand.png"
                                                 alt="Lotto India"/></button>
                                    </div>
                                    <div className="ticket-box-header-bottom">Pick 6 numbers</div>
                                </div>
                                <div className="ticket-box-body">
                                    <NumbersBox/>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="beton-payment">

                        <div className="beton-payment-box">

                            <div className="payment-draws" data-draws-count="4">
                                <div className="section-title draws-title">How Many Draws?</div>
                                <ul className="draws-options">

                                    <li><a data-checked="1" data-action="1">1</a></li>
                                    <li><a data-checked="0" data-action="1">2</a></li>
                                    <li><a data-checked="0" data-action="1">4</a></li>
                                    <li><a data-checked="0" data-action="1">8</a></li>


                                </ul>
                            </div>


                            <div className="payment-separator">OR</div>


                            <div className="payment-subs" data-md="true">

                                <button className="btn-subs" data-checked="0"><span>SUBSCRIBE and SAVE 20%</span>

                                </button>

                                <div className="subs-note">Never miss a draw with your lucky numbers!</div>
                                <div className="subs-panel" style={{display: "none"}}>

                                    <ul className="subs-options">
                                        <li className="subs-option">

                                            <a data-checked="1">
                                                <div className="subs-checkbox"/>
                                                <div className="subs-checkbox-text">Monthly Subscription - 10%
                                                    Discount
                                                </div>
                                                <div className="clearfix"/>
                                            </a>

                                        </li>

                                    </ul>

                                    <div className="subs-actions">
                                        <button className="btn-subs-save">Save</button>
                                        <button className="btn-subs-cancel">Cancel</button>
                                    </div>

                                </div>

                            </div>


                            <div className="payment-amount">

                                <div className="amount-section amount-lines">
                                    <div className="l_flex l_align-center l_content-between">
                                        <div className="amount-section-title">1 Draw</div>
                                        <div className="amount-section-value">₹0.00</div>
                                    </div>
                                    <div className="clearfix"/>

                                </div>

                                <div className="amount-section amount-discount">
                                    <div className="l_flex l_align-center l_content-between">
                                        <div className="amount-section-title">Discount</div>
                                        <div className="amount-section-value">₹0.00</div>
                                    </div>
                                    <div className="clearfix"/>

                                </div>

                                <div className="amount-section amount-total">
                                    <div className="l_flex l_align-center l_content-between">
                                        <div className="amount-section-title">Total</div>
                                        <div className="amount-section-value">₹0.00</div>
                                    </div>
                                    <div className="clearfix"/>

                                </div>

                            </div>

                            <div className="beton-actions">
                                <button className="btn-add-to-cart" disabled="disabled">Add To Cart</button>
                            </div>

                        </div>

                    </div>
                </div>
                <p className="l_mb-10">Match all six numbers and the Joker Ball to win the jackpot; if you match just
                    the Joker Ball you win the Free Bet Bonus, while you also win a prize for matching at least two main
                    numbers. You can bet on one draw or you can subscribe on a monthly or three-monthly basis so that
                    you never miss out.</p>
                <p className="l_mb-10">Lotto India is the first ever online lottery designed for Indian players
                    everywhere – but anyone can play. The jackpot is up for grabs twice weekly and, at over ₹4 Crore, is
                    the highest jackpot India has to offer, and it can even grow over ten times larger when Bumper Draws
                    are scheduled. The cost is very low compared to other online lotteries and it offers overall odds of
                    winning a prize at 1 in 3.</p>
                <p className="l_mb-10">You can find more information on the ways to play Lotto India on the information
                    page, whilst the results will be announced on the Lotto India Results page along with all the prizes
                    you can win and how to check your numbers.</p>

                <h2 style={{textDecoration: "underline", fontWeight: 500, marginBottom: "10px"}}>Playing Lotto India from India</h2>
                <p className="l_mb-10">Lotto India was developed specifically so that it could be played in the whole of
                    India. It doesn’t matter where in the country you are located – the game is available for you to
                    play online. Betting on lotteries is permitted in India so you can register anytime for your chance
                    to win one of the prizes on offer. You will also be notified automatically straight after every draw
                    if you are a winner so there is no chance of missing out on a prize.</p>

            </div>

            <Footer/>
        </React.Fragment>
    );
};

export default LottoIndiaPlay;