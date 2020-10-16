import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

import spinner from '../../assets/loaders/ball-triangle.svg'
type ISpinnerLarge  = {
    
}
 
const SpinnerLarge: React.FC<ISpinnerLarge> = () => {
    const portalSpinner: any = document.getElementById("portalSpinner") 

    return ReactDom.createPortal(
        <Fragment>
            <div className="box-center">
                <img src={spinner} alt="spinner" className="img-fluid" />
            </div>
        </Fragment>, portalSpinner
    )
}
 
export default SpinnerLarge;