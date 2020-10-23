import React from 'react';
import Login from './Login/Login';


type IRegistrationForm = {}
const LoginForm: React.FC<IRegistrationForm> = () => (
    <div className="container">
        <div className="row justify-content-center vh-100">
            <div className="col-xl-4 col-lg-6 col-md-8 col-sm-12">
                <section className="section__registration">
                    <h2 className="mb-3 d-flex justify-content-center align-items-center text-dark">
                        <span uk-icon="icon: user; ratio: 1.9"></span>
                        <span className="font-weight-light ml-1" style={{ letterSpacing: "4px" }}>Sign in</span>
                    </h2>
                    <Login />
                </section>
            </div>
        </div>
    </div>
)

export default LoginForm;