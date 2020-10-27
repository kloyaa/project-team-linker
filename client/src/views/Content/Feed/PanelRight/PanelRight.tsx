import React, { Fragment } from 'react'

type PanelRight = {}

const PanelRight: React.FC<PanelRight> = () => {
    return <Fragment>
        <section className="bg-white mt-3  p-3">
            <div className="text-dark-fade fs-13">
                <i className="fas fa-map-pin mr-1"></i>
                <span>Communication</span>
            </div>
            <div className="mt-2">
                <div>
                    <i className="far fa-comments mr-2"></i>
                    <span>Team discussion</span>
                </div>
                <div>
                    <i className="far fa-comment mr-2"></i>
                    <span>Messages</span>
                </div>
            </div>
        </section>
        <section className="mt-3 bg-white  p-3">
            <div className="text-dark-fade fs-13">
                <i className="fas fa-map-pin mr-1"></i>
                <span>Pinned</span>
            </div>
            <div className="text-left fs-14 mt-2">
                <i className="fas fa-th mr-1"></i>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
            </div>
            <div className="text-left fs-14 mt-2">
                <i className="fas fa-th mr-1"></i>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
            </div>
            <div className="text-left fs-14 mt-2">
                <i className="fas fa-th mr-1"></i>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
            </div>
        </section>
        <section className="mt-3 bg-white p-3">
            <div>
                <i className="fab fa-bitbucket mr-2"></i>
                <span>GitHub Repo</span>
            </div>
            <div>
                <i className="fas fa-project-diagram mr-2"></i>
                <span>Projects</span>
            </div>
        </section>
    </Fragment>
}

export default PanelRight;