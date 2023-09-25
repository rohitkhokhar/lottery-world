/**
 * =========================================================================================
 * Side Modal and Modal Popup
 * =========================================================================================
 **/

import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import useEscKey from "../../app-lottery/common/hooks/useEscKey";
import useResizeHeight from "../../app-lottery/common/hooks/useResizeHeight";
import useWindowSize from "../../app-lottery/common/hooks/useWindowSize";
import {isMobileDevice} from "../../app-lottery/common/function";

const SideModal = React.memo((props) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const size = useWindowSize();

    useEscKey(() => {
        if (props?.open && !document.querySelector('.react-datepicker-popper')) props.onClose();
    });

    const scrollHeight = useResizeHeight(['u_side-modal-header', 'u_side-modal-footer']);

    useEffect(() => {
        setTimeout(() => setOpen(true), 10);
        if (props?.open && isMobileDevice() && size <= 1024) {
            document.querySelector('body').style.position = 'fixed';
            document.querySelector('body').classList.add('u_w-full');
        }
        return (() => {
            document.querySelector('body').style.position = '';
            document.querySelector('body').classList.remove('u_w-full');
        });
    }, [props?.open]);

    const handleClose = () => {
        setTimeout(() => setOpen(false), 10);
        props.onClose();
    };

    const setHeight = (scrollHeightTotal) => {
        let bodyHeight = window.innerHeight < 768 ? window.innerHeight : 700;
        return {maxHeight: `calc(${bodyHeight}px - ${scrollHeightTotal}px)`}
    }
    const overlayClick = () => {
        if (props.closeOnOutsideClick) handleClose()
    }

    return (
        <React.Fragment>
            {/* <Popup
                open={props.open}
                onClose={props.onClose}
                modal
            > */}
            <div
                ref={ref}
                className={`u_side-modal ${open ? 'active' : ''} ${props?.className ? props?.className : ''}`}
            >
                {/* Modal Overlay */}
                {open && <div className="u_modal-overlay" onClick={overlayClick}/>}

                {/* Modal Content */}
                <div className="u_side-modal-layout" style={{maxWidth: `${props.maxWidth}px`}}>

                    {/* Modal header */}
                    <div className="u_side-modal-header u_flex u_align-center u_content-between"
                         id="u_side-modal-header">
                        {
                            props?.header ?
                                props?.header
                                :
                                <div className="u_task-header-left">
                                    <h6 className="u_one-line u_task-darkname">{props.name}</h6>
                                </div>
                        }

                        <div className="u_task-header-right u_flex u_align-center">
                            <div style={{textAlign: "right", padding: "15px 15px 0 15px"}} className="u_lh-0">
                                <p className="l_ib l_cp" onClick={handleClose}>X</p>
                            </div>
                        </div>
                    </div>

                    {/* Modal body */}
                    <div className="u_side-modal-body" id="u_side-modal-body"
                         style={setHeight(scrollHeight)}>
                        {props.children}
                    </div>

                    {/* Modal footer */}
                    <div className="u_side-modal-footer" id="u_side-modal-footer">
                        {props.footer}
                    </div>

                </div>
            </div>
            {/* </Popup> */}
        </React.Fragment>
    );
})

SideModal.propTypes = {
    open: PropTypes.bool,
    name: PropTypes.string.isRequired,
    maxWidth: PropTypes.number,
    onClose: PropTypes.func.isRequired,
    footer: PropTypes.element,
    headerOptions: PropTypes.element,
    closeOnOutsideClick: PropTypes.bool
};

SideModal.defaultProps = {
    closeOnOutsideClick: false,
};

export default SideModal;