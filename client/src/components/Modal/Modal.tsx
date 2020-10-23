import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';

type ModalPost = {
    toggle: boolean,
    onClose: any
}
const MODAL_STYLE: any = {
    zIndex: 1000,
    position: 'absolute',
    top: "30%",
    left: "50%",
    transform: 'translate(-50%, -50%)'
}
const MODAL_OVERLAY: any = {
    background: 'rgba(0, 0, 0, 0.8)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000
}
const ModalPost: React.FC<ModalPost> = ({ toggle, onClose }) => {
    const modalPostPortal: any = document.getElementById("modalPostPortal");

    return ReactDOM.createPortal(
        <Fragment>
            {toggle &&
                <Fragment>
                    <div style={MODAL_OVERLAY} />
                    <div className="bg-white p-3" style={MODAL_STYLE}>
                        <div className="d-flex justify-content-end p-0 m-0">
                            <div className="pointer  p-0 m-0" onClick={onClose}>
                                <span className="text-dark p-0 m-0" uk-icon="icon: close; ratio: 2"></span>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="form-h-textarea"></label>
                            <div className="uk-form-controls">
                                <textarea className="uk-textarea uk-form-width-large" id="form-h-textarea" rows={5} placeholder="Write post"></textarea>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="uk-button uk-button-default mr-1">save as draft</button>
                            <button className="uk-button uk-button-primary">post</button>
                        </div>
                    </div>

                </Fragment>}
        </Fragment >, modalPostPortal
    );

}

export default ModalPost;