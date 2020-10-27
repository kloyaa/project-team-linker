import React, { Fragment } from 'react'
import classes from './FeedMenu.module.css'

const FeedMenu: React.FC<any> = () => {
    return <Fragment>
        <div className={`${classes.menu} mt-3`}>
            <div className="d-flex w-50">
                <div className="d-flex align-items-center text-dark pointer mr-3">
                    <i className="fas fa-fire mr-1"></i>
                    <span className={classes.title}>Hot topics</span>
                </div>
                <div className="d-flex align-items-center text-dark  pointer">
                    <i className="fas fa-project-diagram mr-1"></i>
                    <span className={classes.title}>My projects</span>
                </div>
            </div>

            <button className="uk-button uk-button-primary">
                <div className="d-flex align-items-center">
                    <span className="mr-1" uk-icon="icon: git-fork; ratio: 0.8"></span>
                    <span className={`${classes.title} ${classes.fork}`}>Forked Ideas</span>
                </div>
            </button>
        </div>
    </Fragment>;
}

export default FeedMenu;