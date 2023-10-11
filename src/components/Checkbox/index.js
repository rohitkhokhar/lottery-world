import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = props => {

    return (
        <React.Fragment>
            <div className={`u_checkbox ${props?.className} ${props?.checked ? 'u_checkbox-checked' : ''} ${props.disableClass ? 'u_checkbox-disable' : ''} `}>
                <input placeholder="1" id={props.id} type="checkbox" {...props}/>
                <label htmlFor={props.id}><span>{props.label}</span></label>
            </div>
        </React.Fragment>
    );
};

CheckBox.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
};
CheckBox.defaultProps = {
    id: 'u_chk',
    label: 'Checkbox',
};
export default CheckBox;

