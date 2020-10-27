import React, { FC, Fragment } from 'react'
import { Redirect } from 'react-router-dom';
import { AppDispatch, useAuthenticationState } from '../../../hooks/hooks'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/authentication/auth-action';

type ISettingsComponent = {}
const SettingsComponent: FC<ISettingsComponent> = () => {
    const authenticationState = useAuthenticationState();
    const dispatch: AppDispatch = useDispatch();

    const { user, isAuthenticated } = authenticationState;
    if (!isAuthenticated && !localStorage.token) {
        return <Redirect to="/auth/login" />
    }
    const email = user?.email
        .toLowerCase()
        .slice(0, user?.email.indexOf('@'))
        .trim()

    return <Fragment>
        <div className="row justify-content-center">
            <div className="col-md-5">
                <section>
                    <section className="mt-2 p-3 border">
                        <span className="fs-18 fw-b">@{email}</span>
                        <p className="p-0 m-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, iusto. Rerum dignissimos aliquid tempore quos. Voluptates excepturi natus error sequi autem possimus molestiae illo repellendus aperiam, nobis fugit quae laborum aut doloremque repudiandae tenetur eaque minima culpa provident ab alias a optio? Labore repellendus doloribus nihil aliquam necessitatibus, tenetur earum!</p>
                    </section>
                    <section className="mt-2 p-3 border">
                        <span className="fs-18 fw-b">Notifications</span>
                        <p className="p-0 m-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, iusto. Rerum dignissimos aliquid tempore quos. Voluptates excepturi natus error sequi autem possimus molestiae illo repellendus aperiam, nobis fugit quae laborum aut doloremque repudiandae tenetur eaque minima culpa provident ab alias a optio? Labore repellendus doloribus nihil aliquam necessitatibus, tenetur earum!</p>
                    </section>
                    <section className="mt-2 p-3 border">
                        <span className="fs-18 fw-b">Privacy and safety</span>
                        <p className="p-0 m-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, iusto. Rerum dignissimos aliquid tempore quos. Voluptates excepturi natus error sequi autem possimus molestiae illo repellendus aperiam, nobis fugit quae laborum aut doloremque repudiandae tenetur eaque minima culpa provident ab alias a optio? Labore repellendus doloribus nihil aliquam necessitatibus, tenetur earum!</p>
                    </section>
                    <section className="mt-2 p-3 border">
                        <span className="fs-18 fw-b">Content preferences</span>
                        <p className="p-0 m-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, iusto. Rerum dignissimos aliquid tempore quos. Voluptates excepturi natus error sequi autem possimus molestiae illo repellendus aperiam, nobis fugit quae laborum aut doloremque repudiandae tenetur eaque minima culpa provident ab alias a optio? Labore repellendus doloribus nihil aliquam necessitatibus, tenetur earum!</p>
                    </section>
                    <section className="mt-2 p-3 border">
                        <span className="fs-18 fw-b">Theme</span>
                        <p className="p-0 m-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, iusto. Rerum dignissimos aliquid tempore quos. Voluptates excepturi natus error sequi autem possimus molestiae illo repellendus aperiam, nobis fugit quae laborum aut doloremque repudiandae tenetur eaque minima culpa provident ab alias a optio? Labore repellendus doloribus nihil aliquam necessitatibus, tenetur earum!</p>
                    </section>
                </section>
            </div>
            <div className="col-md-2">
                <section className="mt-2 p-3 border">
                    <span className="fs-18 fw-b">General</span>
                    <div className="mt-2 pointer" onClick={() => dispatch(logoutUser())}>
                        <span uk-icon="icon:sign-out"></span>
                        <span className="fs-15">Logout account</span>
                    </div>
                </section>
                <section className="mt-2 p-3 border">
                    <span className="fs-18 fw-b">Help center</span>
                </section>
            </div>
        </div>
    </Fragment>
}
export default SettingsComponent