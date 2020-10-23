import React, { Fragment, useState, useEffect } from 'react'
import { ButtonContinue, ButtonSignIn } from '../../../components/Button/Button';
import { ChkBoxAgreement, ChkBoxOPT, InputEmail, InputPassword, InputPasswordConfirm } from '../../../components/Form/Form';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAuthenticationState } from '../../../hooks/hooks';
import { registerUser } from '../../../redux/authentication/auth-action'
import { useHistory } from 'react-router-dom'

type IRegistration = {}
type IFieldsData = {
    email: string,
    password: string,
    confirmPassword: string
}
const Registration: React.FC<IRegistration> = () => {
    const history = useHistory();
    const dispatch: AppDispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const [password, setPasssword] = useState(false)

    const authentication = useAuthenticationState();
    const { message, httpStatus, isAuthenticated } = authentication;

    const onContinue = (data: IFieldsData) => {
        const { email, password, confirmPassword } = data;

        if (!isEqual(password, confirmPassword)) {
            setPasssword(true);
        } else if (isEqual(password, confirmPassword)) {
            localStorage.setItem("email", email);
            dispatch(registerUser({
                email,
                password
            }))
        }
    }

    useEffect(() => {
        if (isAuthenticated)
            history.push('/timeline/profile/edit');
    }, [isAuthenticated, history]);

    return (
        <Fragment>
            <h2 className="mb-3 d-flex justify-content-center align-items-center text-dark">
                <span uk-icon="icon: user; ratio: 1.9"></span>
                <span className="font-weight-light ml-1" style={{ letterSpacing: "4px" }}>Sign up</span>
            </h2>

            <form onSubmit={handleSubmit(onContinue)}>
                <InputEmail
                    httpStatusCode={httpStatus}
                    httpStatusMessage={message}
                    errors={errors.email}
                    register={register({
                        required: {
                            value: true,
                            message: "Email is required"
                        },
                        pattern: {
                            value: /^(([^<>().,;:\s@"]+(\.[^<>().,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Valid email is required'
                        }
                    })} />
                <InputPassword
                    errors={errors.password}
                    register={register({
                        required: {
                            value: true,
                            message: "Password is required"
                        },
                        minLength: {
                            value: 8,
                            message: "Minimun of 8 characters"
                        },
                        maxLength: {
                            value: 50,
                            message: "Maximum of 50 characters only"
                        }
                    })} />
                <InputPasswordConfirm
                    passwordIsEqual={password}
                    errors={errors.confirmPassword}
                    register={register({
                        required: {
                            value: true,
                            message: "Please confirm your password"
                        }
                    })} />

                {httpStatus === 406 &&
                    <Fragment>
                        <div className="danger p-2 text-white mt-3">
                            {message}
                        </div>
                    </Fragment>}
                <div className="mt-3 text-left">
                    <ChkBoxAgreement
                        errors={errors.ChkBoxAgreement}
                        register={register({
                            required: true
                        })} />
                    <ChkBoxOPT />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <ButtonSignIn />
                    <ButtonContinue />
                </div>
            </form>

            <div className="d-flex justify-content-center text-dark mt-5">
                <p className="fs-15" style={{ opacity: "0.7" }}>sign up with</p>
            </div>

            <div className="d-flex justify-content-center" style={{ marginTop: "-15px" }}>
                <span className="uk-icon-button uk-margin-small-right" uk-icon="twitter"></span>
                <span className="uk-icon-button uk-margin-small-right" uk-icon="facebook"></span>
                <span className="uk-icon-button uk-margin-small-right" uk-icon="google-plus"></span>
            </div>
        </Fragment>
    );
}

export default Registration;

function isEqual(password: string, confirmPassword: string) {
    return password.toLowerCase() === confirmPassword.toLowerCase();
}
