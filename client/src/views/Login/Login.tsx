import React from 'react';
import Login from './Login/Login';


type IRegistrationForm = {}
const LoginForm: React.FC<IRegistrationForm> = () => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-10">
                <section className="section__registration">
                    <h2 className="mb-3 d-flex justify-content-center align-items-center text-dark">
                        <span uk-icon="icon: lock; ratio: 3.9"></span>
                    </h2>
                    <Login />
                </section>
            </div>
        </div>
    </div>
)

export default LoginForm;