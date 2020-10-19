import React, { Fragment, useEffect, useState } from 'react'
import { ButtonLogIn, ButtonRegistration } from '../../../components/Button/Button';
import { InputEmail, InputPassword } from '../../../components/Form/Form';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { AppDispatch, useTypedSelector } from '../../../hooks/hooks';
import { loginUser } from '../../../redux/authentication/auth-action';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
type ILogin = {}
type IFieldsData = {
    email: string,
    password: string,
    confirmPassword: string
}

const Login: React.FC<ILogin> = () => {
    const dispatch: AppDispatch = useDispatch();
    const history = useHistory();
    const authentication = useTypedSelector(state => state.authentication)

    const { message, isAuthenticated, httpStatus } = authentication;
    const { register, handleSubmit, errors } = useForm();
    const [email, setEmail] = useState({ value: "" });

    const onSubmit = (data: IFieldsData) => {
        const { email, password } = data;
        dispatch(loginUser({
            email, password
        }))
        setEmail({ value: email })
    }
    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem('email', email.value)
            history.push('/feed')
        }
        console.log(`[Login.tsx: httpStatus] ${httpStatus}`)
    }, [isAuthenticated]);


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
                        <div className="bg-danger p-2 text-white mt-3">
                            {message}
                        </div>
                    </Fragment>}
                <div className="d-flex justify-content-between mt-3">
                    <div className="text-dark">
                        <span className="mr-1">Dont have an account? <br /></span>
                        <Link to="/registration" style={{ textDecoration: "none" }}>
                            <div className="d-flex align-items-center">
                                <span className="text-dark b mr-1">Register here </span>
                                <span className="uk-icon text-dark" uk-icon="icon: lock; ratio: 1"></span>
                            </div>
                        </Link>
                    </div>
                    <ButtonLogIn classes={'uk-button-primary'} textColor={'text-white'} />
                </div>
                <div className="d-flex justify-content-center text-dark mt-5">
                    <p className="fs-11" style={{ opacity: "0.7" }}>sign in with</p>
                </div>
                <div className="d-flex justify-content-center" style={{ marginTop: "-15px" }}>
                    <span className="uk-icon-button uk-margin-small-right" uk-icon="twitter"></span>
                    <span className="uk-icon-button uk-margin-small-right" uk-icon="facebook"></span>
                    <span className="uk-icon-button uk-margin-small-right" uk-icon="google-plus"></span>
                </div>
            </form>
        </Fragment>
    );
}

export default Login;