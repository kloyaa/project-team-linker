import React, { Fragment } from 'react'
import { ButtonSignIn } from '../../../components/Button/Button';
import { InputEmail, InputPassword } from '../../../components/Form/Form';

type ILogin = {}
const Login: React.FC<ILogin> = () => {
    return (
        <Fragment>
            <InputEmail />
            <InputPassword />

            <ButtonSignIn classes={'uk-button-primary'} textColor={'text-white'} />
        </Fragment>
    );
}

export default Login;