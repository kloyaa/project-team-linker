import React, { FC, Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch, useAuthenticationState } from '../../hooks/hooks';
import { eventToggleSideBar } from '../../redux/events/events-action'

type INavbarBottom = {}
export const NavbarBottom: FC<INavbarBottom> = () => {
    const authenticationState = useAuthenticationState();
    const { isAuthenticated } = authenticationState;
    const dispatch: AppDispatch = useDispatch();
    const toggleSideBar = () => {
        dispatch(eventToggleSideBar());
    }
    if (!isAuthenticated) return null
    return <Fragment>
        <section className="d-sm-none d-md-none d-lg-none d-xl-none">
            <nav className="navbar fixed-bottom navbar-dark bg-white border">
                <section className="text-dark p-1 d-flex justify-content-between w-100">
                    <span uk-icon="icon: home; ratio: 1.3"></span>
                    <span uk-icon="icon: search; ratio: 1.3"></span>
                    <span uk-icon="icon: plus; ratio: 1.3"></span>
                    <section>
                        <div className="position-absolute" style={{ top: 0, zIndex: 99999999, marginLeft: '11px' }}>
                            <span className="text-white bg-danger p-1 fs-8">92</span>
                        </div>
                        <span className="pointer" uk-tooltip="title: Notifications; pos: bottom" uk-icon="icon: bell; ratio: 1.3"></span>
                    </section>
                    <span uk-icon="icon: menu; ratio: 1.3" onClick={toggleSideBar}></span>
                </section>
            </nav>
        </section>
    </Fragment>
}