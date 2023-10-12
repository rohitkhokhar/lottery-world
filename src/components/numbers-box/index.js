import React from 'react';
import CheckBox from "../Checkbox";

const NumbersBox = () => {
    let i = 1
    let n = 1
    return (<React.Fragment>
            <>{Array.from(Array(50).keys()).map(key => {
                return <div className="number-checkbox">
                    <a href="">{i++}</a>
                </div>
            })}</>
            <>
            {Array.from(Array(5).keys()).map(key => {
                return <div className="number-checkbox orange">
                    <a href="">{n++}</a>
                </div>
            })}</>
            {/*<CheckBox label=" "/>*/}
        </React.Fragment>
    );
};

export default NumbersBox;