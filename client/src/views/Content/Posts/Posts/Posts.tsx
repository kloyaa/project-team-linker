import React, { Fragment } from 'react'
import avatar1 from '../../../../assets/img/avatar1.png'

const DEFAULT_LENGTH = [
    { id: '1', name: 'Nikolai Madridano' },
    { id: '2', name: 'Dooly' },
    { id: '3', name: 'Moon Sang-tae' },
    { id: '4', name: 'Moon Gang-tae' },
    { id: '5', name: 'Ko Moon-yeong' }
]
const PostsComponent: React.FC<any> = () => {
    return <Fragment>
        {DEFAULT_LENGTH.map((data, index) => {
            return (
                <Fragment key={index} >
                    <div className="bg-white">
                        <div>
                            <div className="border p-3 mt-3" style={{ borderRadius: "5px" }}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img
                                                src={avatar1}
                                                alt="avatar"
                                                className="img-fluid rounded-circle"
                                                style={{ height: "50px", width: "50px" }} />
                                        </div>
                                        <div className="ml-2">
                                            <h5 className="p-0 m-0 ml-1 text-dark">{data.name}</h5>
                                            <div
                                                uk-tooltip="Posted on October 20, 2020"
                                                className="d-flex align-items-center">
                                                <span className="text-dark"
                                                    uk-icon="icon: clock; ratio: 0.6"></span>
                                                <h6 className="p-0 m-0 ml-1 text-dark opc-7 fs-13">October 20, 2020</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="text-dark mr-2"
                                            uk-tooltip="People involved"
                                            uk-icon="icon: users; ratio: 1"></span>
                                        <span className="text-dark mr-2"
                                            uk-tooltip="Fork to timeline"
                                            uk-icon="icon: git-fork; ratio: 1"></span>
                                        <span className="text-dark"
                                            uk-tooltip="Discussion and Comments"
                                            uk-icon="icon: comments; ratio: 1"></span>
                                    </div>
                                </div>

                                <div className="p-3">
                                    <div className="w-100">
                                        <ul className="uk-tab" uk-tab="true">
                                            <li className="uk-active"><a>Description</a></li>
                                            <li><a>Sumarry</a></li>
                                            <li><a>Goal</a></li>
                                            <li><a>Progress</a></li>
                                        </ul>
                                    </div>

                                    <h3 className="p-0 m-0">Machine Learning</h3>
                                    <section>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt libero molestiae, esse labore non saepe quod repellat hic deleniti?
                                </section>
                                </div>
                                <div className="p-0 m-0 d-flex justify-content-end mr-5">
                                    <div className="b text-dark">
                                        <span className="text-dark"
                                            uk-tooltip="Home"
                                            uk-icon="icon: hashtag; ratio: 1"></span>
                                    Machine Learning
                                </div>
                                    <div className="b text-dark">
                                        <span className="text-dark"
                                            uk-tooltip="Home"
                                            uk-icon="icon: hashtag; ratio: 1"></span>
                                    Python
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        })}
    </Fragment>
}

export default PostsComponent;
