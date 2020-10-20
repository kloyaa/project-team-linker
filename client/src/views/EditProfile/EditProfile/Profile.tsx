import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Redirect, useHistory } from 'react-router-dom';
import { ButtonSaveAndContinue } from '../../../components/Button/Button';
import { DividerTitleEditProfile, DividerTitleSocial } from '../../../components/Divider/Divider';
import { InputAlternateEmail, InputEmailDisabled, InputFacebook, InputFirstname, InputGitHub, InputInstagram, InputLastname, InputYouTube } from '../../../components/Form/Form';
import { AppDispatch, useTypedSelector } from '../../../hooks/hooks';
import { useDispatch } from 'react-redux'
import { editProfile } from '../../../redux/profile/profile-action';

function Profile() {
    const history = useHistory();
    const dispatch: AppDispatch = useDispatch();
    const authenticationState = useTypedSelector(state => state.authentication);

    const { user, isAuthenticated } = authenticationState;
    const { errors, register, handleSubmit } = useForm();
    const [proceed, setProceed] = useState({
        willProceed: false
    })

    useEffect(() => {
        console.log('[history]', history)
        if (!isAuthenticated)
            history.push('/login');

    }, [isAuthenticated, history,]);

    if (proceed.willProceed)
        return <Redirect to="/feed/posts" />

    const onSave = (data: any) => {
        const { firstName, lastName, gitHub } = data;
        dispatch(editProfile({
            firstName,
            lastName,
            gitHub
        }))
        setProceed({ willProceed: true })
    }


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
                <div className="row mt-2">
                    <div className="col-md-6">
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
                    </div>
                    <div className="col-md-6">
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
                    </div>
                </div>


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
                <ButtonSaveAndContinue />
            </form>
        </Fragment>
    )
}

export default Profile
