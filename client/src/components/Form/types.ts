export type IFieldPassword = {
    register: any,
    errors: {
        message: any
    },
    passwordIsEqual?: boolean
}
export type IFieldEmail = {
    httpStatusCode?: number,
    httpStatusMessage?: any,
    errors: {
        message: any
    },
    register: any
}
export type IChkBoxAgreement = {
    register: any,
    errors: boolean
}
export type IChkBoxRememberMe = {
    register: any,
    errors: boolean
}
export type IFieldGitHub = {
    register: any,
    errors: {
        message: any,
        pattern: boolean,
        type: any
    }
}
export type IFieldFullname = {
    register: any,
    errors: any
}
export type IFieldAlternateEmail = {
    register: any,
    errors: {
        message: any
    }
}
export type IEmailDisabled = {
    userEmail: string
}