import React, { Fragment } from 'react';


type IDividerTitleSocial = {}
export const DividerTitleSocial: React.FC<IDividerTitleSocial> = () => (
    <Fragment>
        <h3 className="text-dark">
            <div className="d-flex">
                <span uk-icon="icon: link; ratio: 1.5" className="mr-2"></span>
                <span className="font-weight-bold">Social</span>
            </div>
        </h3>
    </Fragment>
)

type IDividerTitleEditProfile = {}
export const DividerTitleEditProfile: React.FC<IDividerTitleEditProfile> = () => (
    <Fragment>
        <h3 className="text-dark">
            <div className="d-flex">
                <span uk-icon="icon: user; ratio: 1.5" className="mr-2"></span>
                <span className="font-weight-bold">Edit profile</span>
            </div>
        </h3>
    </Fragment>
)

