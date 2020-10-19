import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
type IButtonContinue = {}
type IButtonSignIn = {
    classes?: string,
    textColor?: string
}

export const ButtonContinue: React.FC<IButtonContinue> = () => {
    return (
        <Fragment>
            <button className="uk-button uk-button-primary mt-2">
                <div className="d-flex align-items-center">
                    <span>Continue</span>
                    <span uk-icon="icon: chevron-right"></span>
                </div>
            </button>
        </Fragment>
    );
}



export const ButtonSignIn: React.FC<IButtonSignIn> = ({ classes, textColor }) => {
    return (
        <Fragment>
            <Link to="/login">
                <div className={`uk-button ${classes ? classes : 'uk-button-default'} mt-2`}>
                    <div className="d-flex align-items-center">
                        <span className={`${textColor ? textColor : 'text-dark'}`}>Sign in</span>
                        <span uk-icon="icon: sign-in" className={`${textColor ? textColor : 'text-dark'}`}></span>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
}
export const ButtonLogIn: React.FC<IButtonSignIn> = ({ classes, textColor }) => {
    return (
        <Fragment>
            <button className={`uk-button ${classes ? classes : 'uk-button-default'} mt-2`}>
                <div className="d-flex align-items-center">
                    <span className={`${textColor ? textColor : 'text-dark'}`}>Sign in</span>
                    <span uk-icon="icon: sign-in" className={`${textColor ? textColor : 'text-dark'}`}></span>
                </div>
            </button>
        </Fragment>
    );
}
export const ButtonRegistration: React.FC<IButtonSignIn> = ({ classes, textColor }) => {
    return (
        <Fragment>
            <Link to="/registration">
                <div className="uk-button uk-button-default mt-2">
                    <div className="d-flex align-items-center">
                        <span className={`${textColor ? textColor : 'text-dark'}`}>Create a new account</span>
                        <span uk-icon="icon: lock" className={`${textColor ? textColor : 'text-dark'}`}></span>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
}

export const ButtonSaveAndContinue: React.FC<any> = () => {
    return (
        <Fragment>
            <button className="uk-button uk-button-primary mt-4">
                <div className="d-flex align-items-center">
                    <span>Save and continue</span>
                    <span uk-icon="icon: arrow-right" className="ml-2"></span>
                </div>
            </button>
        </Fragment>
    );
}
