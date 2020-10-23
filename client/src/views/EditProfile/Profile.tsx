import React, { Fragment } from 'react'
import Profile from './EditProfile/Profile'

const ProfileComponent: React.FC<any> = () => {
    return <Fragment>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="mt-5">
                        <Profile />
                    </div>
                </div>

            </div>
        </div>
    </Fragment>
}
export default ProfileComponent;

