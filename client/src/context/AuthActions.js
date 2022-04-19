export const LoginStart = (userCredentials) => ({
    type: 'LOGIN_START',
})

export const LoginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
})

export const LoginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
})

export const UpdateStart = (userCredentials) => ({
    type: 'UPDATE_START',
})

export const UpdateSuccess = (user) => ({
    type: 'UPDATE_SUCCESS',
    payload: user,
})

export const UpdateFailure = (error) => ({
    type: 'UPDATE_FAILURE',
    payload: error,
})
export const Logout = () => ({
    type: 'LOGOUT',
})
