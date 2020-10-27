import React, { FC, Fragment } from 'react'
import SettingsComponent from './Settings/Settings'

type IAppSettings = {}

const AppSettings: FC<IAppSettings> = () => {
    return <Fragment >
        <section>
            <SettingsComponent />
        </section>
    </Fragment>
}
export default AppSettings