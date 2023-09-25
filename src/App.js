import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Lottery from "./app-lottery";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Lottery/>}/>
                    {/*<Route path="/pages" element={<InnerPages/>} />*/}
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default App;
