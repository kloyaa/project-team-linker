import React from 'react'
import tempAvatar from '../../assets/img/avatar1.png'
const Profile = () => {
    return (
        <div>
            <div className="col-md-4">
                <div className="card p-3 mt-3">
                    <div className="text-center">
                        <img
                            style={{ height: "150px", width: "150px" }}
                            className="img-fluid rounded-pill"
                            src={tempAvatar}
                            alt="avatar" />
                        <h3 className="text-dark p-0 m-0 b mt-2">Nikolai Madridano</h3>
                        <h4 className="text-dark" style={{ marginTop: "-10px" }}>kolyamadridano21</h4>
                    </div>


                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex justify-content-center">
                            <p className="text-dark text-center w-75 blockquote"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quo?</p>
                        </div>
                        <div>
                            <div className="d-flex">
                                <span className="text-dark mr-1" uk-icon="icon: rss;"></span>
                                <span className="text-dark"><b>20,000</b> followers <b>130</b> following</span>
                            </div>
                            <div className="d-flex">
                                <span className="text-dark mr-1" uk-icon="icon: star;"></span>
                                <span className="text-dark"><b>520</b> Stars received</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="text-dark d-flex align-items-center">
                                <span className="mr-1" uk-icon="icon: location;"></span>
                                <span>Cagayan de Oro City, Philippines.</span>
                            </div>
                            <div className="text-dark d-flex align-items-center">
                                <span className="mr-1" uk-icon="icon: github;"></span>
                                <span>github.com/koolmadridano</span>
                            </div>
                            <div className="text-dark d-flex align-items-center">
                                <span className="mr-1" uk-icon="icon: twitter;"></span>
                                <span>twitter.com/holakola</span>
                            </div>
                            <div className="text-dark d-flex align-items-center">
                                <span className="mr-1" uk-icon="icon: instagram;"></span>
                                <span>instagram.com/_imyour_kola</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
