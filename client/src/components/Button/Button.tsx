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


