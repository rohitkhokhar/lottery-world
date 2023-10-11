import React from 'react';
import Navbar from "../navbar";
import BreadCrumb from "../../components/breadcrumb";

const LottoIndia = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <BreadCrumb/>
            <div className="container l_lotto-india">
                <div className="l_row header">
                    <div className="l_col-5">
                        <h1>Lotto India</h1>
                        <p>Lotto India is an online lottery which offers jackpots of over ₹4 Crore twice a week. It is
                            quick and simple to play from India and other locations around the world and it has great
                            odds of winning, at just 1 in 3 to win any prize.</p>
                        <button className='btn btn1'>Play Lotto India Now</button>
                    </div>
                    <div className="l_col-5">
                        <img src="/images/india.png"/>
                    </div>
                </div>
                <div className="l_row l_lotto-how">
                    <div className="l_col-9">
                        <h2>How to play Lotto India</h2>
                        <p className="l_mb-10">Draws take place at 6:00 PM IST on Tuesdays and Fridays and you must
                            submit your entries by
                            5:50 PM. It costs ₹40 per entry and you must follow the steps below to take part:</p>
                        <ul>
                            <li>Pick six numbers from 1 to 50 and a Joker Ball from 1 to 5. You can choose your own
                                numbers or select the Quick Pick option if you would prefer a random set. To submit more
                                than one entry, move on to another game panel and repeat the same process.
                            </li>
                            <li>Choose how many draws to enter. You can play your numbers in a single draw or even
                                subscribe for up to three months to ensure you never miss out.
                            </li>
                            <li>Add your entries to the cart. You will need to sign up for a new account if it is your
                                first time playing on LotteryWorld.com, or log in to complete your purchase if you are
                                an existing user.
                            </li>
                            <li>Wait for the draw to see if you are a winner after checking the results.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="l_row l_lotto-how">
                    <div className="l_col-9">
                        <h2>Lotto India Prizes and Odds</h2>
                        <p className="l_mb-10">You win prizes if the numbers you pick match the winning numbers. The
                            jackpot is worth over ₹4 Crore and you win it by matching all six main numbers plus the
                            Joker Ball. If more than one player matches all the numbers, the jackpot is shared between
                            all the winners.</p>
                        <p className="l_mb-10">You can also win prizes for matching fewer than all the numbers drawn. If
                            you match two or more numbers then you will also win a prize.</p>
                        <p className="l_mb-10">The following table shows all the different ways you can win prizes and
                            the amounts each are worth:</p>
                    </div>
                </div>
                <div className="l_row l_lotto-how">
                    <div className="l_col-9">
                        <div align="center" className="table-scrollable">
                            <table className="table table-bordered banking"
                                   style={{width: "70%", textAlignLast: "center", border: "1px #ddd solid"}}>
                                <caption>Lotto India Prizes and Odds</caption>
                                <thead>
                                <tr>
                                    <th>Match</th>
                                    <th>Prize*</th>
                                    <th>Odds</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>6 + Joker Ball</td>
                                    <td>Jackpot- ₹4 Crore</td>
                                    <td>1 in 79,453,500</td>
                                </tr>
                                <tr>
                                    <td>6 Main Numbers</td>
                                    <td>₹750,000</td>
                                    <td>1 in 19,863,375</td>
                                </tr>
                                <tr>
                                </tr>
                                <tr>
                                    <td>5 Main Numbers</td>
                                    <td>₹80,000</td>
                                    <td>1 in 75,240</td>
                                </tr>
                                <tr>
                                    <td>4 Main Numbers</td>
                                    <td>₹4,000</td>
                                    <td>1 in 1,400</td>
                                </tr>
                                <tr>
                                    <td>3 Main Numbers</td>
                                    <td>₹400</td>
                                    <td>1 in 75</td>
                                </tr>
                                <tr>
                                    <td>2 Main Numbers</td>
                                    <td>₹40</td>
                                    <td>1 in 10</td>
                                </tr>
                                <tr>
                                    <td>0 + Joker Ball</td>
                                    <td>Free Bet Bonus</td>
                                    <td>1 in 5</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="l_my-10"><small>*The prizes are converted to INR from EUR, which means these
                            values
                            are an estimate and can vary depending on the exchange rate.</small></p>
                        <p className="l_mb-10">The overall odds of winning a prize are 1 in 3, while the overall odds of
                            winning the Free Bet Bonus are 1 in 5.</p>
                        <p className="l_mb-10">The Joker ball cannot be used as a subtitute for a main number when it
                            comes
                            to winning a prize. So matching one main number and the Joker ball does not win the prize
                            for
                            matching 2 main numbers, and so on up the table. The numbers must be from the 6 selected
                            that
                            are shown in white on the results page.</p>
                    </div>
                </div>

                <div className="l_row l_lotto-faq">
                    <div className="l_col-9">
                        <div className="l_lotto-faq-inner">
                            <h3 className="l_mb-15">Lotto India FAQs</h3>
                            <p>You can find the answer to some of the most frequently asked questions about Lotto India
                                below.
                            </p>
                            <p>Does the jackpot roll over if there are no winners?
                            </p>
                            <p>No, the jackpot stays at over ₹4 Crore if there are no winners. However, Bumper Draws
                                take place from time to time, in which the jackpot is increased to a higher amount than
                                usual for a special one-off event.

                            </p>
                            <p>What is the Joker Ball?
                            </p>
                            <p>The Joker Ball is a number between 1 and 5 that is randomly selected after the five main
                                numbers. As it is selected from a separate pool, it is possible for the same number to
                                appear as a main number and the Joker Ball in the same draw. The prize for matching only
                                the Joker Ball is a Free Bet Bonus.
                            </p>
                            <p>Can you win the Match 2 prize more than once in the same draw?
                            </p>
                            <p>No. The prize for matching between two and six main numbers is ₹40*. You are not entitled
                                to win this prize twice if you match four numbers or three times if you match six. You
                                must match the Joker Ball plus all six main numbers to win the jackpot.
                            </p>
                            <p>How do you claim prizes?
                            </p>
                            <p>As Lotto India is only available online, you will automatically be notified if you win a
                                prize. If you win the Free Bet Bonus or the ₹40* cash prize, they will be credited to
                                your LotteryWorld.com account straight after the draw. If you win the jackpot, you may
                                need to provide identification and will be guided through the verification process.
                            </p>
                            <p>Is Lotto India only available online?
                            </p>
                            <p>Yes. You will not find Lotto India tickets in stores. The game can be played online from
                                various locations all over the world, including everywhere in India.
                            </p>
                            <p>Is it legal to play in India?
                            </p>
                            <p>As Lotto India is an international lottery it is not subject to the same gambling laws as
                                other Indian lotteries. It is therefore completely legal to play the game in India.</p>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
};

export default LottoIndia;