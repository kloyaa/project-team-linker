import React, { Fragment } from 'react'
import svgTeam from '../../assets/img/svg-team.svg'
import { Link } from 'react-router-dom';
import classes from './Home.module.css'

const Home: React.FC<any> = () => {

    return <Fragment>
        <div className="row bg-fade">
            <section className="m-3 p-3 bg-white">
                <h4 className="p-0 m-0 ">Developer's Alliance</h4>
                <p className="p-0 m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nesciunt placeat debitis atque aut quidem nam iste ab aspernatur nostrum.</p>
                <div className="mt-2">
                    <Link to="/auth/login">
                        <button className="uk-button uk-button-default uk-button-small mr-1">Sign in</button>
                    </Link>
                    <Link to="/auth/registration">
                        <button className="uk-button uk-button-primary uk-button-small">Get started</button>
                    </Link>
                </div>
            </section>

            <section className="ml-3 mr-3 p-3 bg-white">
                <section className="text-center">
                    <img
                        src={svgTeam}
                        className={`${classes.svgConnection} img-fluid`}
                        alt="work-together" />
                </section>
                <section className="mt-3 ">
                    <div>
                        <h4 className="p-0 m-0">Share your Open-source Ideas </h4>
                        <p className="p-0 m-0 fs-14">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nesciunt placeat debitis atque aut quidem nam iste ab aspernatur nostrum.</p>
                    </div>
                    <div className="mt-2">
                        <h4 className="p-0 m-0">Start building</h4>
                        <p className="p-0 m-0 fs-14">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nesciunt placeat debitis atque aut quidem nam iste ab aspernatur nostrum.</p>
                    </div>
                    <div className="mt-2">
                        <h4 className="p-0 m-0">Publish</h4>
                        <p className="p-0 m-0 fs-14">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nesciunt placeat debitis atque aut quidem nam iste ab aspernatur nostrum.</p>
                    </div>
                </section>
            </section>
            <section className="mt-3 ml-3 mr-3 p-3 primary">
                <div>
                    <h4 className="p-0 m-0 text-white">A better way of team discussion</h4>
                    <p className="p-0 m-0 fs-14 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nesciunt placeat debitis atque aut quidem nam iste ab aspernatur nostrum.</p>
                    <button className="uk-button uk-button-default uk-button-small text-white mt-3">
                        <div className="d-flex align-items-center">
                            <span>Sign up your team</span>
                            <span className="ml-1" uk-icon="icon: arrow-right"></span>
                        </div>
                    </button>
                </div>
            </section>

        </div>
    </Fragment >
}

export default Home;