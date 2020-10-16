import  React, { Fragment, useState  } from 'react';

type IFieldPassword =  {
    register: any,
    errors: {
        message: any
    },
    passwordIsEqual?: boolean
 }
type IFieldEmail =  {
    responseMessage: string,
    errors: {
        message: any
    },
    register: any }
type IChkBoxAgreement = { 
    register: any,
    errors: boolean
}

export const InputEmail: React.FC<IFieldEmail> = ({ errors, register, responseMessage }) => {
    const [email, setEmail] = useState({
        emailValue: localStorage.getItem('email')?.toString()
    })
    return ( 
        <Fragment>
            <div className="uk-inline mt-1">
                <span className={`uk-form-icon ${(errors || responseMessage) && 'text-danger'}`} uk-icon="icon: mail"></span>
                <input 
                    value={email.emailValue}
                    onChange={(e: any) => setEmail(e.target.value)}
                    name="email"
                    ref={register}
                    className={`uk-input ${(errors || responseMessage)  &&  'uk-form-danger'} text-dark uk-form-width-large`}
                    type="text"
                    placeholder="Email" />
            </div>
            { errors && <p className="text-danger fw-400 fs-13 p-0 m-0">{errors.message}</p> }
            { responseMessage && <p className="text-danger fw-400 fs-13  p-0 m-0">{responseMessage}</p> }
        </Fragment>
     );
}
 
export const InputPassword: React.FC<IFieldPassword> = ({  register, errors }) => {
    return ( 
        <Fragment>
            <div className="uk-inline mt-2">
                <span className={`uk-form-icon uk-form-icon-flip ${errors && 'text-danger'}`} uk-icon="icon: lock"></span>
                <input 
                    name="password"
                    ref={register}
                    className={`uk-input ${errors && 'uk-form-danger'} text-dark uk-form-width-large`}
                    type="password"
                    placeholder="Password"  />
            </div>
            { errors && <p className="text-danger fw-400 fs-13  p-0 m-0">{errors.message}</p> }
        </Fragment>
     );
}
 
 
export const InputPasswordConfirm: React.FC<IFieldPassword> = ({ register, errors, passwordIsEqual }) => {
    return ( 
        <Fragment>
             <div className="uk-inline mt-2">
                <span className={`uk-form-icon uk-form-icon-flip ${errors && 'text-danger'}`} uk-icon="icon: lock"></span>
                <input 
                    name="confirmPassword"
                    ref={register}
                    className={`uk-input ${errors && 'uk-form-danger'} text-dark uk-form-width-large`}
                    type="password" 
                    placeholder="Confirm password" />
            </div>
            { errors && <p className="text-danger fw-400 fs-13  p-0 m-0">{errors.message}</p> }
            { passwordIsEqual && <p className="text-danger fw-400 fs-13  p-0 m-0">Password does not match </p> }

        </Fragment>
     );
}
 

export const ChkBoxAgreement: React.FC<IChkBoxAgreement> = ({ register, errors}) => {
    return ( 
        <Fragment>
            <label>
                <input 
                    name="ChkBoxAgreement"
                    ref={register}
                    className="uk-checkbox" 
                    type="checkbox"/>
                <span className={`${errors ? 'text-danger b' : 'text-dark'} ml-1 fs-14`}> I agree to Deviance's Term of service </span>
            </label>
        </Fragment>
    );
}
export const ChkBoxOPT: React.FC<any> = () => {
    return ( 
        <Fragment>
            <label>
                <input 
                    className="uk-checkbox" 
                    type="checkbox"/>
                <span className="ml-1 text-dark fs-14">I don't want to receive Developer's Allience notifications to the email I have provided *</span>
            </label>
        </Fragment>
    );
}