import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const SET_APP_ERROR = 'SET_APP_ERROR';

export type InitializedSuccessType = ReturnType<typeof initializedSuccess>
export type SetAppErrorType = ReturnType<typeof setAppError>

export type ActionAppTypes =
    | InitializedSuccessType
    | SetAppErrorType

let initialState = {
    initialized: false,
    globalError: null as string | null,
}

export type InitialStateType = typeof initialState

const appReducer = (state: InitialStateType = initialState, action: ActionAppTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        case SET_APP_ERROR:
            return {
                ...state, globalError: action.error,
            }
        default:
            return state
    }
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)
export const setAppError = (error: string | null) => ({type: SET_APP_ERROR, error:error} as const )

export const initializeApp = () =>
    (dispatch: any) => {
        let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })

    }

export default appReducer