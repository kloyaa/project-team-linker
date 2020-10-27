import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { ButtonSaveChanges } from '../../../components/Button/Button';
import { DividerTitleEditProfile, DividerTitleSocial } from '../../../components/Divider/Divider';
import { InputAlternateEmail, InputEmailDisabled, InputFacebook, InputFirstname, InputGitHub, InputInstagram, InputLastname, InputYouTube } from '../../../components/Form/Form';
import { AppDispatch, useAuthenticationState } from '../../../hooks/hooks';
import { useDispatch } from 'react-redux'
import { editProfile } from '../../../redux/profile/profile-action';
//import { Redirect } from 'react-router-dom';

function Profile() {
    const authentication = useAuthenticationState();
    const dispatch: AppDispatch = useDispatch();
    // const [proceed, setProceed] = useState({
    //     feed: false
    // })

    const { user } = authentication;
    const { errors, register, handleSubmit } = useForm();

    const onSave = (data: any) => {
        const { firstName, lastName, gitHub } = data;
        dispatch(editProfile({
            firstName,
            lastName,
            gitHub
        }))
        //setProceed({ feed: true })
    }

    // if (isAuthenticated && proceed.feed) {
    //     return < Redirect to="/feed/posts" />
    // }
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSave)}>
                <DividerTitleEditProfile />
                {/* Fields */}
                <InputEmailDisabled
                    userEmail={user?.email} />
                <InputAlternateEmail
                    errors={errors.altEmail}
                    register={register({
                        required: {
                            value: true,
                            message: "Alternate email is required."
                        },
                        pattern: {
                            value: /^(([^<>().,;:\s@"]+(\.[^<>().,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Valid email is required'
                        }
                    })} />
                <InputFirstname
                    errors={errors.firstName}
                    register={register({
                        required: {
                            value: true,
                            message: "First name is required"
                        },
                        pattern: {
                            value: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                            message: "First name is ugly and so are you, Please try another one."
                        },
                        minLength: 3,
                        maxLength: 30
                    })} />
                <InputLastname
                    errors={errors.lastName}
                    register={register({
                        required: {
                            value: true,
                            message: "Last name is required"
                        },
                        pattern: {
                            value: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                            message: "Last name is ugly and so are you, Please try another one."
                        },
                        minLength: 3,
                        maxLength: 30
                    })} />

                <DividerTitleSocial />
                {/* Fields social*/}
                <InputGitHub
                    errors={errors.gitHub}
                    register={register({
                        required: {
                            value: true,
                            message: "GitHub link is required"
                        },
                        pattern: {
                            value: /^(https):\/\/(www.github.com)+(\/[^\s]*)?$/i,
                            message: "Refer to this example https://www.github.com/username"
                        },
                        minLength: 10,
                        maxLength: {
                            value: 70,
                            message: "Refer to this example https://www.github.com/username"
                        }
                    })} />

                <InputYouTube />
                <InputInstagram />
                <InputFacebook />
                <div>
                    <ButtonSaveChanges />
                </div>

            </form>
        </Fragment>
    )
}

export default Profile
