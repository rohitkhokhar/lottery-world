import React from 'react';
import {useLocation, useNavigate} from "react-router-dom"

const BreadCrumb = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const splitData = location?.pathname?.split('/');
    return (
        <React.Fragment>
            <div className="container">
                <ol className="l_breadcrumb l_mt-5">
                    <li><a className="l_ml-5 l_cp" onClick={() => navigate(`/`)}>Home</a></li>
                    <li> > <a className="l_ml-5 l_cp" onClick={() => navigate(`/${splitData[2 -1]}`)}>{splitData[1].replace(/-/g, ' ') }</a></li>
                    {splitData[2] && <li> > <a>{splitData[2].replace(/-/g, ' ')}</a></li>}
                </ol>
            </div>
        </React.Fragment>
    );
};

export default BreadCrumb;