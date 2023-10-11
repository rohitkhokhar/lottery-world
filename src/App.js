import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Lottery from "./app-lottery";
import LottoIndia from "./app-lottery/lotto-india";
import LottoIndiaPlay from "./app-lottery/lotto-india/lotton-india-play";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Lottery/>}/>
                    <Route path="/lotto-india" element={<LottoIndia/>} />
                    <Route path="/lotto-india/lotto-india-play" element={<LottoIndiaPlay/>} />
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default App;
