import React, { Fragment, useState, useEffect } from 'react';
import { IChkBoxAgreement, IFieldEmail, IFieldPassword, IFieldGitHub, IEmailDisabled, IFieldAlternateEmail, IFieldFullname, IChkBoxRememberMe } from './types';

export const InputEmail: React.FC<IFieldEmail> = ({ errors, register }) => {
    const [previousEmail, setPreviousEmail] = useState<{ value: string }>({ value: "" });
    useEffect(() => {
        if (localStorage.email)
            setPreviousEmail({ value: localStorage.email });
    }, []);
    const updatePreviousEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPreviousEmail({ value: e.target.value })
    }
    return <Fragment>
        <div className="uk-inline mt-1">
            <span
                className={`uk-form-icon  ${errors && ' text-danger'} `}
                uk-icon="icon: mail"></span>
            <input
                value={previousEmail.value}
                onChange={updatePreviousEmail}
                name="email"
                ref={register}
                className={`uk-input text-dark uk-form-width-large`}
                type="text"
                placeholder="Email" />
        </div>
        {errors && <p className="text-danger fw-400 fs-13 p-0 m-0">{errors.message}</p>}
    </Fragment>
}

export const InputPassword: React.FC<IFieldPassword> = ({ register, errors }) => {
    return <Fragment>
        <div className="uk-inline mt-2">
            <span className={`uk-form-icon uk-form-icon-flip ${errors && 'text-danger'}`} uk-icon="icon: lock"></span>
            <input
                name="password"
                ref={register}
                className={`uk-input ${errors && 'uk-form-danger'} text-dark uk-form-width-large`}
                type="password"
                placeholder="Password" />
        </div>
        {errors && <p className="text-danger fw-400 fs-13  p-0 m-0">{errors.message}</p>}
    </Fragment>
}

export const InputPasswordConfirm: React.FC<IFieldPassword> = ({ register, errors, passwordIsEqual }) => {
    return <Fragment>
        <div className="uk-inline mt-2">
            <span className={`uk-form-icon uk-form-icon-flip ${errors && 'text-danger'}`} uk-icon="icon: lock"></span>
            <input
                name="confirmPassword"
                ref={register}
                className={`uk-input ${errors && 'uk-form-danger'} text-dark uk-form-width-large`}
                type="password"
                placeholder="Confirm password" />
        </div>
        {errors && <p className="text-danger fw-400 fs-13  p-0 m-0">{errors.message}</p>}
        {passwordIsEqual && <p className="text-danger fw-400 fs-13  p-0 m-0">Password does not match </p>}
    </Fragment>
}

export const ChkBoxAgreement: React.FC<IChkBoxAgreement> = ({ register, errors }) => {
    return <Fragment>
        <label>
            <input
                name="ChkBoxAgreement"
                ref={register}
                className="uk-checkbox"
                type="checkbox" />
            <span className={`${errors ? 'text-danger b' : 'text-dark'} ml-1 fs-14`}> I agree to Deviance's Term of service </span>
        </label>
    </Fragment>
}

export const ChkBoxRemember: React.FC<IChkBoxRememberMe> = ({ register, errors }) => {
    return <Fragment>
        <label>
            <input
                ref={register}
                name="remember"
                className="uk-checkbox"
                type="checkbox" />
            <span className="ml-1 text-dark fs-14">Remember me</span>
        </label>
    </Fragment>
}
export const ChkBoxOPT: React.FC<any> = () => {
    return <Fragment>
        <label>
            <input
                className="uk-checkbox"
                type="checkbox" />
            <span className="ml-1 text-dark fs-14">I don't want to receive Developer's Allience notifications to the email I have provided *</span>
        </label>
    </Fragment>
}


export const InputGitHub: React.FC<IFieldGitHub> = ({ errors, register }) => {
    console.log(errors)
    return <Fragment>
        <div className="uk-inline">
            <span className={`uk-form-icon ${errors && 'text-danger'}`} uk-icon="icon: github-alt"></span>
            <input
                uk-tooltip="title: GitHub profile link; pos: left; animation:uk-animation-slide-right-small; duration: 300"
                ref={register}
                name="gitHub"
                className={`uk-input ${errors && 'uk-form-danger'} text-dark uk-form-width-large`}
                type="text"
                placeholder="GitHub" />
        </div>
        {errors && <p className="text-danger fw-400 fs-13 p-0 m-0 ml-1 b">{errors.message}</p>}
    </Fragment>
}
export const InputFacebook: React.FC<any> = () => {
    return <Fragment>
        <div className="uk-inline mt-2">
            <span className="uk-form-icon" uk-icon="icon: facebook"></span>
            <input
                uk-tooltip="title: Facebook profile link; pos: left; animation:uk-animation-slide-right-small; duration: 300"
                className="uk-input  uk-form-width-large"
                type="text"
                placeholder="Facebook" />
        </div>
    </Fragment>
}

export const InputInstagram: React.FC<any> = () => {
    return <Fragment>
        <div className="uk-inline mt-2">
            <span className="uk-form-icon" uk-icon="icon: instagram"></span>
            <input
                uk-tooltip="title: Instagram profile link; pos: left; animation:uk-animation-slide-right-small; duration: 300"
                className="uk-input  uk-form-width-large"
                type="text"
                placeholder="Instagram" />
        </div>
    </Fragment>
}

export const InputYouTube: React.FC<any> = () => {
    return <Fragment>
        <div className="uk-inline mt-2">
            <span className="uk-form-icon" uk-icon="icon: youtube"></span>
            <input
                uk-tooltip="title: YouTube channel link; pos: left; animation:uk-animation-slide-right-small; duration: 300"
                className="uk-input  uk-form-width-large"
                type="text"
                placeholder="YouTube" />
        </div>
    </Fragment>
}




export const InputFirstname: React.FC<IFieldFullname> = ({ register, errors }) => {
    return <Fragment>
        <input
            uk-tooltip="title: First name; pos: left; animation:uk-animation-slide-right-small; duration: 300"
            ref={register}
            name="firstName"
            className={`mt-2 uk-input ${errors && 'uk-form-danger'} text-dark uk-form-width-large`}
            type="text"
            placeholder="First name" />
        {errors && <p className="text-danger fw-400 fs-13 p-0 m-0">{errors.message}</p>}
    </Fragment>
}
export const InputLastname: React.FC<IFieldFullname> = ({ register, errors }) => {
    return <Fragment>
        <input
            uk-tooltip="title: Last name; pos: right; animation:uk-animation-slide-left-small; duration: 300"
            ref={register}
            name="lastName"
            className={`mt-2 uk-input ${errors && 'uk-form-danger'} text-dark uk-form-width-large`}
            type="text"
            placeholder="Last name" />
        {errors && <p className="text-danger fw-400 fs-13 p-0 m-0  ml-1">{errors.message}</p>}
    </Fragment>
}


export const InputAlternateEmail: React.FC<IFieldAlternateEmail> = ({ errors, register }) => {
    return <Fragment>
        <div className="uk-inline mt-2">
            <span
                className={`uk-form-icon ${errors && 'text-danger'}`} uk-icon="icon: plus"></span>
            <input
                uk-tooltip="title: Alternate email; pos: left; animation:uk-animation-slide-right-small; duration: 300"
                ref={register}
                name="altEmail"
                className={`uk-input ${errors && 'uk-form-danger'} text-dark uk-form-width-large`}
                type="text"
                placeholder="Alternate email" />
        </div>
        {errors && <p className="text-danger fw-400 fs-13 p-0 m-0  ml-1">{errors.message}</p>}
    </Fragment>
}

export const InputEmailDisabled: React.FC<IEmailDisabled> = ({ userEmail }) => {
    const [previousEmail, setPreviousEmail] = useState<{ value: string }>({ value: "" });
    useEffect(() => {
        if (localStorage.email)
            setPreviousEmail({ value: localStorage.email });
    }, []);
    const updatePreviousEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPreviousEmail({ value: e.target.value })
    }
    return <Fragment>
        <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: mail"></span>
            <input
                uk-tooltip={`title: ${userEmail}; pos: left; animation:uk-animation-slide-right-small; duration: 300`}
                value={previousEmail.value}
                onChange={updatePreviousEmail}
                className="uk-input  uk-form-width-large"
                type="text"
                placeholder="Email" disabled />
        </div>
    </Fragment>
}