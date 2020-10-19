import React, { Fragment } from 'react'
import Navbar from './NavbarTop/Navbar/Navbar'

type INavbarTop = {}
const NavbarTop: React.FC<INavbarTop> = () => {
    return (
        <Fragment>
            <Navbar />
        </Fragment>
    );
}

export default NavbarTop;