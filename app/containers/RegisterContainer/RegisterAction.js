export function firstNameEntry(text) {

    return {
        type: 'FIRST_NAME_ENTRY',
        payload: text
    }
}

export function lastNameEntry(text) {

    return {
        type: 'LAST_NAME_ENTRY',
        payload: text
    }
}

export function emailEntry(text) {

    return {
        type: 'EMAIL_ENTRY',
        payload: text
    }
}

export function passwordEntry(text) {
    return {
        type: 'PASSWORD_ENTRY',
        payload: text
    }
}

export function signUpEntry(registerObj, navigate) {
    return {
        type: 'SIGN_UP_ENTRY',
        payload: registerInfo
    }
}
