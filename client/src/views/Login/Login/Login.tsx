import React, { Fragment } from 'react'
import { ButtonLogIn } from '../../../components/Button/Button';
import { InputEmail, InputPassword } from '../../../components/Form/Form';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { AppDispatch, IAuthenticationState, useAuthenticationState } from '../../../hooks/hooks';
import { loginUser } from '../../../redux/authentication/auth-action';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../../helpers/authentication/isAuthenticated';


type IFieldsData = {
    email: string,
    password: string,
    confirmPassword: string,
    remember: any
}

const Login: React.FC<any> = () => {
    const dispatch: AppDispatch = useDispatch();
    const authentication: IAuthenticationState = useAuthenticationState();
    const { register, handleSubmit, errors } = useForm();
    const { message, httpStatus } = authentication;

    // 1. Login handler
    // 2. Save email to localStorage if all is valid
    const onSubmit = (fieldsInput: IFieldsData) => {
        const { email, password } = fieldsInput;
        dispatch(loginUser({
            email, password
        }))
        localStorage.setItem('email', email)
    }

    // 1. If token is present and state is Authenticated
    // 2. redirect to feed component
    if (isAuthenticated(authentication) && localStorage.token) {
        return <Redirect to="/feed" />
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputEmail
                    httpStatusMessage={message}
                    httpStatusCode={httpStatus}
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
                {httpStatus === 400 &&
                    <Fragment>
                        <div className="danger p-2 text-white mt-3">
                            {message}
                        </div>
                    </Fragment>}
                <div className="d-flex justify-content-between mt-3">
                    <div className="text-dark">
                        <span className="mr-1">Dont have an account? <br /></span>
                        <Link to="/auth/registration" style={{ textDecoration: "none" }}>
                            <div className="d-flex align-items-center">
                                <span className="text-dark b mr-1">Register here </span>
                                <span className="uk-icon text-dark" uk-icon="icon: lock; ratio: 1"></span>
                            </div>
                        </Link>
                    </div>
                    <ButtonLogIn classes={'uk-button-primary'} textColor={'text-white'} />
                </div>

            </form>
        </Fragment>
    );
}

export default Login;