import  React from 'react';
import Registration from './Registration/Registration';

type IRegistrationForm = {}
const RegistrationForm: React.FC<IRegistrationForm> = () => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-10">
                <section className="section__registration">
                    <Registration />                    
                </section>
            </div>
        </div>
    </div>
)

export default RegistrationForm;