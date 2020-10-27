import React, { FC, Fragment } from 'react'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { useDispatch } from 'react-redux';
import { AppDispatch, useEventState } from '../../hooks/hooks';
import { eventToggleSideBar } from '../../redux/events/events-action';

const OVERLAY_STYLE: any = {
    background: 'rgba(0, 0, 0, 0.8)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999
}
type ISideBar = {}
const SideBar: FC<ISideBar> = (props) => {
    let body = document.querySelector('body');

    const dispatch: AppDispatch = useDispatch();
    const events = useEventState();
    const { sidebar } = events;

    if (sidebar) body?.classList.add('disable-scroll')
    else body?.removeAttribute('class');

    return <Fragment>
        {/* Off canvas wrapper   */}
        <OffCanvas
            width={280}
            transitionDuration={300}
            effect={"push"}
            isMenuOpened={sidebar}
            position={"right"}>
            {/* Off canvas body   */}
            <OffCanvasBody>
                {sidebar && <div style={OVERLAY_STYLE} />}
                <div className={`${sidebar && 'opc-2'}`}>
                    {props.children}
                </div>
            </OffCanvasBody>
            {/* Off canvas menu   */}
            <OffCanvasMenu>
                <div className="p-5">
                    <div className="d-flex justify-content-end pointer">
                        <span uk-icon="icon: close" onClick={() => dispatch(eventToggleSideBar())} ></span>
                    </div>
                    <section className="mt-3 text-dark mt-5">
                        <div className="d-flex">
                            <span className="mr-2" uk-icon="icon: user; ratio:1.2"></span>
                            <h6 className="p-0 m-0 text-dark fs-18">Profile</h6>
                        </div>
                        <div className="mt-3 d-flex">
                            <span className="mr-2" uk-icon="icon: git-fork; ratio:1.2"></span>
                            <h6 className="p-0 m-0 text-dark fs-18">Forked post</h6>
                        </div>
                        <div className="mt-3 d-flex">
                            <span className="mr-2" uk-icon="icon: comments; ratio:1.2"></span>
                            <h6 className="p-0 m-0 text-dark fs-18">Discussions</h6>
                        </div>
                    </section>
                    <div className="uk-divider-icon"></div>
                    <section className="mt-3">
                        <div className="d-flex">
                            <span className="mr-2" uk-icon="icon: cog; ratio:1.2"></span>
                            <h6 className="p-0 m-0 text-dark fs-16">Settings and Privacy</h6>
                        </div>
                    </section>
                </div>
            </OffCanvasMenu>
        </OffCanvas>
    </Fragment>
}
export default SideBar