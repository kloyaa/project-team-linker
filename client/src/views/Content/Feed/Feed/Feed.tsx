import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import avatar1 from '../../../../assets/img/avatar1.png'
import { useAuthenticationState } from '../../../../hooks/hooks'
import classes from './Feed.module.css'
const DEFAULT_LENGTH = [
    { id: '1', name: 'Nikolai Madridano', title: "Machine learning" },
    { id: '2', name: 'Dooly', title: "Javascript Neural-Network" },
    { id: '3', name: 'Moon Sang-tae', title: "Facebook API that uses GraphQL by default" },
    { id: '4', name: 'Moon Gang-tae', title: "Embedded API in Adruino" },
    { id: '5', name: 'Ko Moon-yeong', title: "Enhanced Javascript WebScrapper" }
]
const PostsComponent: React.FC<any> = () => {
    const authentication = useAuthenticationState();
    const { isAuthenticated } = authentication;

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
                                                className={`${classes.avatar} img-fluid rounded-circle`} />
                                        </div>
                                        <div className="ml-2">
                                            <h5 className={`${classes.name} ml-1 text-dark`}>{data.name}</h5>
                                            <div
                                                uk-tooltip="Posted on October 20, 2020"
                                                className="d-flex align-items-center">
                                                <i className={`${classes.datePostedIcon} far fa-clock`}></i>
                                                <h6 className={`${classes.datePosted} text-dark opc-7`}>October 20, 2020</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {isAuthenticated && <div className="d-flex align-items-center">
                                        <span className="text-dark mr-2"
                                            uk-tooltip="People involved"
                                            uk-icon="icon: users; ratio: 1"></span>
                                        <span className="text-dark mr-2"
                                            uk-tooltip="Fork to timeline"
                                            uk-icon="icon: git-fork; ratio: 1"></span>
                                        <span className="text-dark"
                                            uk-tooltip="Discussion and Comments"
                                            uk-icon="icon: comments; ratio: 1"></span>
                                    </div>}

                                </div>

                                <div className="p-3">
                                    {isAuthenticated ?
                                        <div className="w-100">
                                            <ul className="uk-tab" uk-tab="true">
                                                <li className="uk-active"><a>Description</a></li>
                                                <li><a>Sumarry</a></li>
                                                <li><a>Goal</a></li>
                                                <li><a>Progress</a></li>
                                            </ul>
                                        </div> :
                                        <Fragment>
                                            <div className="d-flex align-items-center mb-3 p-0 m-0">
                                                <span className="text-dark mr-1" uk-tooltip="People involved" uk-icon="icon: lock; ratio: 0.8"></span>
                                                <span className="text-dark fs-15">
                                                    <Link to="/auth/login" className="uk-link-toggle mr-1">
                                                        <b>Sign in</b>
                                                    </Link> to view more options</span>
                                            </div>
                                        </Fragment>
                                    }
                                    <h3 className={`mb-1 ${classes.title}`}>{data.title}</h3>
                                    <section>
                                        <section className={classes.description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt libero molestiae, esse labore non saepe quod repellat hic deleniti?
                                        </section>
                                    </section>
                                </div>
                                <div className="d-flex justify-content-center text-dark opc-5 fs-12">
                                    <div className="mr-2">
                                        <i className="fas fa-eye mr-1"></i>
                                        <span>23,134</span> people
                                    </div>
                                    <div>
                                        <i className="fas fa-hands-helping mr-1"></i>
                                        <span>134</span> contributors joined
                                    </div>
                                </div>
                                {isAuthenticated &&
                                    <div className={`${classes.tags} d-flex justify-content-end`}>
                                        <div className="b text-dark">
                                            <span className="text-dark"
                                                uk-tooltip="Home"
                                                uk-icon="icon: hashtag; ratio: 1"></span>
                                            <span>Machine Learning</span>
                                        </div>
                                        <div className="b text-dark">
                                            <span className="text-dark"
                                                uk-tooltip="Home"
                                                uk-icon="icon: hashtag; ratio: 1"></span>
                                            <span>Python</span>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        })}
    </Fragment >
}

export default PostsComponent;
